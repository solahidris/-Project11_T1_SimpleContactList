import "./App.css";
import HeaderApp from "./components/HeaderApp";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  // DELETE LATER - normal array mapping
  const contactList = [
    { fullName: "user1", age: 11 },
    { fullName: "user2", age: 22 },
    { fullName: "user3", age: 33 },
  ];

  // create users for different keys
  const [users, setUsers] = useState([]);

  // fetch user data FUNCTION from API
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // object to json
      .then((json) => setUsers(json)); // json data set to users
  };

  // render when app loads
  useEffect(() => {
    fetchUserData();
  }, []);

  // Show or Hide State of list items
  const [showItems, setShowItems] = useState(false);

  // function that sets Show State to True
  const buttonShowHideHandler = () => {
    if (showItems === false) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  };

  return (
    <div className="bg-slate-800/90 h-screen">
      <HeaderApp />
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
      </div>

      <div className="bg-blue-300/70 p-10">
        {/* DELETE LATER - JUST A TITLE */}
        <p className="py-4 font-bold italic text-white bg-blue-700/80 mb-4">
          this is the API Render
        </p>

        {/* DELETE LATER - JUST WANT TO SHOW BUTTON STATE */}
        <p className="bg-black text-white p-3 text-xs">
          "showItems" - State / Current Value
        </p>
        <p className="bg-black text-white p-3 mt-1 mb-10 text-xs">
          {String(showItems)}
        </p>

        {/* Contact List Title */}
        <div>
          <p className="tracking-widest font-bold bg-slate-300/90 border-2 border-slate-400/20 p-4 text-center mb-3 rounded-lg uppercase text-lg font-mono">
            Contact List
          </p>
        </div>

        {/* create a button to show and hide all the list */}
        <div className="flex justify-end mb-3">
          {showItems === false ? (
            <button
              onClick={buttonShowHideHandler}
              className="bg-slate-400 border-2 border-slate-500/20 rounded-lg text-sm py-2 px-4 drop-shadow-xl font-mono"
            >
              Show Email
            </button>
          ) : (
            <button
              onClick={buttonShowHideHandler}
              className="bg-slate-400 border-2 border-slate-500/20 rounded-lg text-sm py-2 px-4 drop-shadow-xl font-mono"
            >
              Hide Email
            </button>
          )}
        </div>

        {/* Render API to UI */}
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
                {showItems === true && <li className="text-xs">Email: {user.email}</li>}
              </div>
            ))}
        </ol>

        <p></p>
      </div>

      {/* DELETE LATER - JUST TO TEST */}
      <div className="text-center text-white bg-slate-800">
        <p className="py-4 font-bold italic bg-slate-600">
          this is the normal array destructure mapping
        </p>
        {contactList.map((contact, index) => (
          <div key={index}>
            <p>-- start --</p>
            <p>{contact.fullName}</p>
            <p>{contact.age}</p>
            <p>// end //</p>
          </div>
        ))}
      </div>

      {/* CAN DELETE LATER - BOTTOM MARGIN BLACK */}
      <div className="py-20 bg-black"></div>
    </div>
  );
}

export default App;

// Data structure of each API User
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }
