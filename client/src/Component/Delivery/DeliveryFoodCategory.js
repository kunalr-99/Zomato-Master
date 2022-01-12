import React from "react";

export const DeliveryFoodCategory = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-20">
          <img
            className="w-full h-full rounded-full shadow-lg mb-2"
            src={props.imgUrl}
            alt={props.foodName}
          />
        </div>
        <div>
          <h3 className="text-sm text-center">{props.foodName}</h3>
        </div>
      </div>
    </>
  );
};
export const DeliveryBrandName = (props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="w-20">
          <img
            className="w-full h-full shadow-lg mb-2"
            src={props.imgUrl}
            alt={props.foodName}
          />
        </div>
        <div>
          <h3 className="text-base text-center">{props.foodName}</h3>
        </div>
        <div>
          <h3 className="text-sm text-center text-gray-700">
            {props.timeCount}
          </h3>
        </div>
      </div>
    </>
  );
};
