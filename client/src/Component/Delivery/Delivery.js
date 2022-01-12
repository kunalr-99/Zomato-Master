import React from "react";
import DeliveryCarousel from "./DeliveryCarousel";
import DeliveryRestaurantCards from "./DeliveryRestaurantCards";

const Delivery = () => {
  return (
    <div>
      <DeliveryCarousel />
      <div className="bg-gray-100 pb-6">
        <DeliveryRestaurantCards />
      </div>
    </div>
  );
};

export default Delivery;
