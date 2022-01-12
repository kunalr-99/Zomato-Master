import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "./Delivery/Delivery";

const Master = () => {
  const { type } = useParams();
  return <>{type === "delivery" && <Delivery />}</>;
};

export default Master;
