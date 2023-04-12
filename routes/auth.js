const router = require("express").Router();
const passport = require("passport");

const dotenv = require("dotenv");
dotenv.config();

router.get("/login/sucess", (req, res) => {
  res.status(201).json({ message: "failure", user: req.user });
});

router.get("/login/failed", (req, res) => {
  if (req.user) {
    res.status(401).json({ message: "failure" });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_GOOGLE_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_GOOGLE_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
