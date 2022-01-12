import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "./Delivery/Delivery";
import Dineout from "./Dineout/Dineout";
import Nightlife from "./Nightlife/Nightlife";

const Master = () => {
  const { type } = useParams();
  return (
    <>
      {(type === "delivery" && <Delivery />) ||
        (type === "dineout" && <Dineout />) ||
        (type === "nightlife" && <Nightlife />)}
    </>
  );
};

export default Master;
