require("dotenv").config();
import jwt from "jsonwebtoken";
import express from "express";
import passport from "passport";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

Router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password } = req.body.credentials;
    await UserModel.findEmailAndPhone(email, phoneNumber);

    //DataBase
    const newUser = await UserModel.create(req.body.credentials);

    //Jwt token
    // const token = jwt.sign({ user: { fullName, email } }, "ZomatoApp");
    const token = newUser.generateJwtToken();
    return res
      .status(200)
      .json({ token, status: "Successfully retrieved your token" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/signin", async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password } = req.body.credentials;
    const doesUserExist = await UserModel.findByEmailAndPassword(
      req.body.credentials
    );

    //Jwt token
    const token = jwt.sign({ user: { fullName, email } }, "ZomatoApp");
    return res.status(200).json({ token, status: "Sign in successsful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.json({ token: req.session.passport.user.token });
  }
);

export default Router;
