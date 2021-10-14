import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

const Port = 5000;

zomato.get("/", (req, res) => res.json({ message: "Setup success - Yeah!" }));

zomato.listen(Port, () =>
  console.log(`Server running at http://localhost:${Port}`)
);
