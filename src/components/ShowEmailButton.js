import React from "react";

const ShowEmailButton = ({showItems, buttonListItemHandler}) => {
  return (
    <div className="flex justify-end mb-3">
      {showItems === false ? (
        <button
          onClick={buttonListItemHandler}
          className="bg-slate-400 border-2 border-slate-500/20 rounded-lg text-sm py-2 px-4 drop-shadow-xl font-mono"
        >
          Show Email
        </button>
      ) : (
        <button
          onClick={buttonListItemHandler}
          className="bg-slate-400 border-2 border-slate-500/20 rounded-lg text-sm py-2 px-4 drop-shadow-xl font-mono"
        >
          Hide Email
        </button>
      )}
    </div>
  );
};

export default ShowEmailButton;
