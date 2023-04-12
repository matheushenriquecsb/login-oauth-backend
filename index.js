import express from "express";
import cookieSession from "cookie-session";
import cors from "cors";
import passport from "passport";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";
import "./passport.js";

dotenv.config();
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);
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
