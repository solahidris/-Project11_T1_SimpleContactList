import React from "react";
import logo from "../images/logo.svg"

const HeaderApp = () => {
  return (
    <div>
      <div className="pt-10 flex justify-center">
        <img src={logo} className="h-20 animate-bounce" alt="logo" />
      </div>
      <div className="flex justify-center">
        <p className="font-mono text-xs text-white text-center w-[60%]">
          Build a contact list app that fetches the list of all users from API
          and renders each user’s details on a component with “show age” button
          which displays the age on click.
        </p>
      </div>
      <p className="flex justify-center text-white p-5">
        --------------------------------------------------
      </p>
    </div>
  );
};

export default HeaderApp;
