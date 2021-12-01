const UserServices = require("../services/users");
const { hash, compare } = require('./../lib/bcrypt')
const { token } = require('../lib/token')
const validator = require('./../lib/validate')

const Login = (req, res) => {
  res.send();
};

const Register = async (req, res) => {

  const { email, password } = req.body;

  const data = { email, password }

  // let encryptedPassword;

  //validate inputs

  if (validator(data)) return res.json(validator(data));

  //check if user already exists

  const oldUser = await UserServices.getUserBy(email)

  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
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
  getOneUser,
};
