require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

import ConnectDB from "./database/connection";
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurants";
import Food from "./API/Foods";
import Menu from "./API/Menus";
import Order from "./API/Orders";
import Review from "./API/Reviews";
import User from "./API/Users";
import googleConfig from "./config/google.config";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Passport config
googleConfig(passport);

const Port = 4000;

zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);

zomato.get("/", (req, res) => res.json({ message: "Setup success - Yeah!" }));

zomato.listen(Port, () =>
  ConnectDB()
    .then(() => console.log(`Server is running http://localhost:${Port}`))
    .catch(() => console.log(`Something messed up http://localhost:${Port}`))
);
