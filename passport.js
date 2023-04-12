const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
//import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const dotenv = require("dotenv");
dotenv.config();

//Google settings
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      dotenv(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
