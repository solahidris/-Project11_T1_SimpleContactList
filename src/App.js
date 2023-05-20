import "./App.css";
import HeaderApp from "./components/HeaderApp";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  // normal array mapping (delete later)
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
  const [showItems, setShowItems]= useState(false);

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
        <p className="bg-yellow-300/90 my-3">6- onClick button show data - connect with api data div</p>
        <p className="bg-yellow-300/90 my-3">
          7- onClick also can hide data (useState) for show/hide
        </p>
      </div>

      <div className="bg-blue-300/70 p-10">
        <p className="py-4 font-bold italic text-white bg-blue-700/80 mb-4">
          this is the API Render
        </p>

        {/* create a button to show and hide all the list */}
        <button onClick={buttonShowHideHandler} className="bg-slate-300 rounded text-sm py-2 px-4 mb-4 drop-shadow-xl font-mono flex justify-center">show / hide</button>
        {/* DELETE LATER - JUST WANT TO SHOW BUTTON STATE */}
        <p className="bg-black text-white p-3 text-xs">"showItems" - State / Current Value</p>
        <p className="bg-black text-white p-3 mt-1 mb-10 text-xs">{String(showItems)}</p>

        {/* Render API to UI */}
        <ol>
          {users
            // limit to 3 users easier to see
            .filter((user) => user.id <= 3)
            // map each user to list items
            .map((user) => (
              <div key={user.id} className="bg-yellow-400/90 p-2 mb-2">
                <li>{user.name}</li>
                <li>{user.address.zipcode}</li>
              </div>
            ))}
        </ol>

        <p></p>
      </div>

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
