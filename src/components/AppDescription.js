import React from "react";

const AppDescription = ({ showAppDescription, buttonAppDescriptionHandler }) => {
  return (
    <div className="px-4">
      {showAppDescription === true ? (
        <div className="mx-20 text-xs">
          <p className="bg-yellow-100 text-center my-3">DO THIS I GUESS</p>
          <p className="bg-orange-500 text-white my-3 line-through">
            1- figure this out somewhat
          </p>
          <p className="bg-orange-500 text-white my-3 line-through">
            2- use https://jsonplaceholder.typicode.com/ for free api list
          </p>
          <p className="bg-orange-500 text-white my-3 line-through">
            3- fetch from API
          </p>
          <p className="bg-orange-500 text-white my-3 line-through">
            4- render from API using useState and useEffect
          </p>
          <p className="bg-orange-500 text-white my-3 line-through">
            5- create button for display a part of data from USER API rendered
          </p>
          <p className="bg-orange-500 text-white my-3 line-through">
            6- onClick button show data - connect with api data div
          </p>
          <p className="bg-orange-500 text-white my-3 line-through">
            7- onClick also can hide data (useState) for show/hide
          </p>
          <div className="flex justify-end">
      <button className="px-4 py-2 rounded-lg bg-slate-500 text-xs" onClick={buttonAppDescriptionHandler}>Hide All</button>
      </div>
          </div>
      ) : (<div className="flex justify-end">
      <button className="px-4 py-2 rounded-lg bg-slate-500 text-xs" onClick={buttonAppDescriptionHandler}>Show Work Flow</button>
      </div>)}
    </div>
  );
};

export default AppDescription;