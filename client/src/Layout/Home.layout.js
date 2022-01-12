import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Foodtab from "../Component/Foodtab/foodtab";

const HomeLayout = (props) => {
  return (
    <>
      <div className="">
        <Navbar />
        {props.children}
      </div>
      <Foodtab />
    </>
  );
};

export default HomeLayout;
