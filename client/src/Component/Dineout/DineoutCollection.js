import React from "react";
import { dineoutCollectionImages } from "./DineoutImageList";
import { deliveryCardImages } from "../Delivery/DeliveryImageList";
import { CardSm } from "../Delivery/DeliveryRestaurantCards";
import { GoTriangleRight } from "react-icons/go";

const DineoutCollectionCarousel = (props) => {
  return (
    <>
      <div className="relative">
        <div className="w-44 h-80">
          <img
            className="w-full h-full rounded-lg object-cover z-1"
            src={props.imgUrl}
            alt={props.header}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-5 rounded-lg" />
        <div className="absolute bottom-4 left-2 text-white z-10">
          <div>
            <h3 className="text-sm mb-1">{props.header}</h3>
          </div>
          <div>
            <h3 className="text-xs flex items-center">
              {props.noOfPlaces} Places{" "}
              <span className="text-basm">
                <GoTriangleRight />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

const DineoutCollection = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="p-4">
          <div className="w-full flex items-center justify-between mb-4">
            <h3 className="text-lg text-gray-600">Collections</h3>
            <a href="#">
              <div className="flex items-center text-red-400">
                <h3 className="text-xs text-red-300">
                  All collections in Mumbai
                </h3>
                <GoTriangleRight />
              </div>
            </a>
          </div>
          <div>
            <h3 className="text-xs text-gray-400 mb-6">
              Explored curated lists of top restaurants, cafes, pubs and bars in
              Mumbai, based on trends
            </h3>
          </div>
          <div>
            <div className=" w-full flex items-center justify-between my-4 gap-8 overflow-x-auto">
              {dineoutCollectionImages.map((property) => (
                <DineoutCollectionCarousel
                  imgUrl={property.imgUrl}
                  header={property.header}
                  noOfPlaces={property.noOfPlaces}
                />
              ))}
            </div>
          </div>
          <div className="pt-4">
            <div>
              <h3 className="text-lg">Dine-Out Restaurants in Worli, Mumbai</h3>
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
        </div>
      </div>
    </>
  );
};

export default DineoutCollection;
