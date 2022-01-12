import React from "react";
import { GiWineGlass } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className="py-3 px-4 flex items-center justify-between border-b-1 border-gray-500 shadow-lg">
        <div className="w-24">
          <img
            className="w-full h-full"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="brand-logo"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-navColor-500 text-white px-4 py-2 rounded-full">
            Use App
          </button>
          <span className="w-8">
            <GiWineGlass className="text-xl text-gray-500 bg-yellow-200 border border-gray-500 rounded-full p-1 w-full h-full" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
