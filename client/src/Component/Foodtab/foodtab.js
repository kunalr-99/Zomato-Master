import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { GiBooze } from "react-icons/gi";
import { RiFootprintLine } from "react-icons/ri";

const TabSm = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      typeIcon: <BsHandbag />,
      typeText: "Delivery",
      isActive: false,
    },
    {
      id: "dineout",
      typeIcon: <RiFootprintLine />,
      typeText: "DineOut",
      isActive: false,
    },
    {
      id: "nightlife",
      typeIcon: <GiBooze />,
      typeText: "NightLife",
      isActive: false,
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="lg:hidden bg-white p-2 z-20 flex items-center justify-around w-full fixed bottom-0 text-md text-gray-500 border-t border-gray-200">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                  ? "flex flex-col relative items-center text-2xl text-zomato-400 "
                  : "flex flex-col items-center text-2xl "
              }
            >
              <div
                className={
                  type === items.id &&
                  "absolute -top-3 w-full border-t-4 border-red-400"
                }
              />
              {items.typeIcon}
              <h4 className="text-sm">{items.typeText}</h4>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const Foodtab = () => {
  return (
    <>
      <div>
        <TabSm />
      </div>
    </>
  );
};

export default Foodtab;
