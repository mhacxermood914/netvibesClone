const UserServices = require("../services/users");
const { hash, compare } = require('./../lib/bcrypt')
const { token } = require('../lib/token')
const validator = require('./../lib/validate')
const axios = require('axios')
const { google } = require('googleapis')
const Login = async (req, res) => {

  let hash, hash_pwd;

  const { email, password } = req.body;

  const data = { email, password }

  //validate inputs
  if (validator(data)) {

    res.statusMessage = validator(data)

    return res.status(401).end();
  }

  //check if user already exists

  const oldUser = await UserServices.getUserBy(email)

  if (oldUser) {

    hash = await UserServices.getUserInfoBy(email, 'password')

    hash = JSON.stringify(hash)

    hash = JSON.parse(hash)

    console.log({hash})

    if (await compare(password, hash[0].password)) {

      const jwt = await token(email)

      res.cookie('user', jwt, { maxAge: 900000, httpOnly: true });

      res.writeHead(302, {
        'Location': '/dashboard' // This is your url which you want
      });

      res.statusMessage = "Authenticated successfully!!!"

      return res.status(200).end()

    }else{

      res.statusMessage = "Password Incorrect"

      return res.status(401).end()
    }
  } else {
    res.statusMessage = "L'utilisateur n'existe pas"
    return res.status(401).end()
  }




};

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CONSUMER_KEY,
  process.env.GOOGLE_CONSUMER_SECRET,
  `http://localhost:3000/auth/google/callback`,
);

const getGoogleAuthURL = () => {

  const scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ];


  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: scopes, // If you only need one scope you can pass it as string
  });
}

const GoogleAuth = (req, res) => {

  //Getting Google Auth Link
  res.redirect(getGoogleAuthURL())


}

const handleGoogleAuthCallback = async (req, res) => {

  const { tokens } = await oauth2Client.getToken(req.query.code);

  // Fetch the user's profile with the access token and bearer
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      },
    )
    .then(res => res.data)
    .catch(error => {
      throw new Error(error.message);
    });



  const { email } = googleUser

  const jwt = await token(email)

  //check if user already exists

  const oldUser = await UserServices.getUserBy(email)

  if (oldUser) {

    //req.session.user = googleUser //only when the user get authenticated

    res.cookie('user', jwt, { maxAge: 900000, httpOnly: true });

    return res.status(200).redirect('/dashboard') //user authenticated

  }


  UserServices.createUser({ email, encryptedPassword: null, jwt })

  return res.status(200).redirect('/') // login bruh

}

//same code as above
const AuthenticateGoogleUser = async (req, res) => {

  const { tokens } = await oauth2Client.getToken(req.query.code);

  // Fetch the user's profile with the access token and bearer
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      },
    )
    .then(res => res.data)
    .catch(error => {
      throw new Error(error.message);
    });

  //req.session.user = googleUser

  const { email } = googleUser

  const jwt = await token(email)

  //check if user already exists

  const oldUser = await UserServices.getUserBy(email)

  if (oldUser) {
    return res.status(200).redirect('/dashboard') //login modal will be triggered
  }
}

const Register = async (req, res) => {

  const { email, password } = req.body;

  const data = { email, password }

  // let encryptedPassword;

  //validate inputs

  if (validator(data)){

    res.statusMessage = validator(data)

    return res.status(401).end();
  } 

  //check if user already exists

  const oldUser = await UserServices.getUserBy(email)

  if (oldUser) {

    res.statusMessage = "User Already Exist. Please Login";
   
    return res.status(400).end();
  }

  //create token

  const jwt = await token(email)

  //Encrypt password

  const encryptedPassword = await hash(password)

  UserServices.createUser({ email, encryptedPassword, jwt });
  res.json({ email, encryptedPassword, jwt });

};

const getAllUsers = (req, res, next) => {
  res.send("respond with a resource");
};

const getOneUser = (req, res, next) => {
  res.send("respond with a resource");
};

module.exports = {
  Login,
  Register,
  getAllUsers,
  GoogleAuth,
  AuthenticateGoogleUser,
  handleGoogleAuthCallback,
  getOneUser,
};
