import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

import { deliveryCardImages } from "./DeliveryImageList";

export const CardSm = (props) => {
  return (
    <>
      <div className="my-6 shadow-xl rounded-xl border border-blue-2 bg-white">
        <div>
          <div className="w-full">
            <img
              className="w-full rounded-t-lg"
              src={props.imgUrl}
              alt={props.restaurantName}
            />
          </div>
          <div className="px-4 py-2 border-b">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-lg tracking-wide">{props.restaurantName}</h3>
              <button className="flex items-center gap-1 px-2 bg-ratingColor-600 rounded-lg text-white font-bold text-sm">
                <span>{props.rating}</span>
                <span className="text-xs">
                  <AiFillStar />
                </span>
              </button>
            </div>
            <div className="w-full flex items-center justify-between text-sm text-gray-600">
              <h5>{props.categories}</h5>
              <h5 className="flex items-center justify-end w-28">
                <span className="text-xs text-gray-500">
                  <FaRupeeSign />
                </span>
                <span>{props.pricing} for one</span>
              </h5>
            </div>
          </div>
          <div className="flex items-center justify-between px-2 py-3 bg-white shadow-xl rounded-b-xl">
            <div className="w-16">
              <img
                className="w-full h-full"
                src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp"
                alt="max-safety-b1"
              />
            </div>
            <div className="w-60">
              <h3 className="text-xs text-gray-600">
                Follows all MaxSafety measures to ensure your food is safe
              </h3>
            </div>
            <div className="bg-indigo-400 rounded-full p-1 text-white">
              <FiTrendingUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DeliveryRestaurantCards = () => {
  return (
    <>
      <div className="m-4 py-6">
        <div>
          <h3 className="text-lg">Delivery Restaurants in Mumbai</h3>
        </div>
        <div>
          {deliveryCardImages.map((property) => (
            <CardSm
              imgUrl={property.imgURL}
              restaurantName={property.restaurantName}
              rating={property.rating}
              categories={property.categories}
              pricing={property.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DeliveryRestaurantCards;
