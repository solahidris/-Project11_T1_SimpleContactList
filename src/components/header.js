import React from "react";

const Header = () => {
  return (
    <>
    <div className="flex justify-center">
      <p className="font-mono text-xs text-white text-center w-[60%]">
        Build a contact list app that fetches the list of all users from API and
        renders each user’s details on a component with “show age” button which
        displays the age on click.
      </p>
    </div>
    <p className="flex justify-center text-white p-5">--------------------------------------------------</p>
    </>
  );
};

export default Header;
