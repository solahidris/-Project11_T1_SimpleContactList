import React from "react";

const UsersInfo = ({users, showItems}) => {
    return (
        <ol className="bg-slate-300 border-2 border-slate-400/20 p-4 rounded-lg font-mono text-sm text-slate-100">
        {users
          // limit to 5 users easier to see
          .filter((user) => user.id <= 5)
          // map each user to list items
          .map((user) => (
            <div
              key={user.id}
              className="bg-slate-500 border-2 border-slate-600/20 rounded-lg p-2 mb-2"
            >
              <li>Name: {user.name}</li>
              {showItems === true && (
                <li className="text-xs">Email: {user.email}</li>
              )}
            </div>
          ))}
      </ol>
    )
};

export default UsersInfo;