import React, { Component } from "react";
import { Route } from "react-router-dom";

import HomeLayout from "../Layout/Home.layout";

const HomeLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <div>
        <Route
          {...rest}
          component={(props) => (
            <HomeLayout>
              <Component {...rest} />
            </HomeLayout>
          )}
        />
      </div>
    </>
  );
};

export default HomeLayoutHOC;
