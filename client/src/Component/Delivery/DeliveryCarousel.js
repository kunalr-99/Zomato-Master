import React from "react";
import {
  DeliveryFoodCategory,
  DeliveryBrandName,
} from "./DeliveryFoodCategory";
import { deliveryImageList, brandImageList } from "./DeliveryImageList";

const DeliveryCarousel = () => {
  return (
    <>
      <div className="mx-4 my-6 bg-white">
        <div className="">
          <h3 className="text-lg">Eat what makes you happy</h3>
        </div>
        <div>
          <div className=" w-full flex items-center justify-between my-4">
            {deliveryImageList[0].map((property) => (
              <DeliveryFoodCategory
                imgUrl={property.imgUrl}
                foodName={property.foodName}
              />
            ))}
          </div>
          <div className=" w-full flex items-center justify-between my-4">
            {deliveryImageList[1].map((property) => (
              <DeliveryFoodCategory
                className="rounded-full"
                imgUrl={property.imgUrl}
                foodName={property.foodName}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-6">
        <img
          className="w-full h-full rounded-md"
          src="https://cdn.static-zoutons.com/images/originals/blog/ZomatoNewUserOffers03_1595005611.png"
          alt="bannerAd1"
        />
      </div>
      <div className="mx-4 my-6 bg-white">
        <div>
          <h3>Top Brands for You</h3>
        </div>
        <div>
          <div className=" w-full flex items-center justify-between m-4 gap-5 overflow-x-auto">
            {brandImageList.map((property) => (
              <DeliveryBrandName
                imgUrl={property.imgUrl}
                foodName={property.foodName}
                timeCount={property.timeCount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryCarousel;
