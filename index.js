const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
require("./passport");
dotenv.config();
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", authRoutes);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log("Server is running!");
});
