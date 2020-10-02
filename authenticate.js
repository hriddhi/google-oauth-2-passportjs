var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: '1078704625860-k2llr8vh5fg4gc2gu7ghufh1m9tp2h46.apps.googleusercontent.com',
    clientSecret: 'AMwbHeUKUgAjNNwtfMfOxptH',
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Register user here.
    console.log(profile);
    cb(null, profile);
  }
));