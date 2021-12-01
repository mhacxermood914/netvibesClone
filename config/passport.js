const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./../models/users')
const passport = require('passport')
const configAuth = require('./passport-auth-cred');


// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, user, done) {
    //const user = User.findByPk(id)
    done(id, user);
});

passport.use(new GoogleStrategy({

    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,

},
    async function (token, refreshToken, profile, done) {
        

        // try to find the user based on their google id
        const oldUser = await User.findOne({ 'id': profile.id });



        if (oldUser) {

            return done(null, oldUser);

        } else {

            var newUser = new User();

            newUser.id = profile.id;
            newUser.token = token;
            //newUser.google.name = profile.displayName;
            newUser.email = profile.emails[0].value; // pull the first email

            newUser.save()

            return done(null, newUser);

        }

        // function (err, user) {
        //     if (err)
        //         return done(err);

        //     if (user) {
        //         return done(null, user);
        //     } else {
        //         var newUser = new User();

        //         console.log({ profile })

        //         // set all of the relevant information
        //         // newUser.google.id = profile.id;
        //         // newUser.google.token = token;
        //         // newUser.google.name = profile.displayName;
        //         // newUser.google.email = profile.emails[0].value; // pull the first email

        //         // save the user
        //         // newUser.save(function (err) {
        //         //     if (err)
        //         //         throw err;
        //         //     return done(null, newUser);
        //         // });
        //     }
        // }

    }));