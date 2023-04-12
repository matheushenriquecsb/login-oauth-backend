import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
dotenv.config();

//Google settings
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_GOOGLE_ID,
      clientSecret: process.env.CLIENT_GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
