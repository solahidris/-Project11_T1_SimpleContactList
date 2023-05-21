import "./App.css";
import AppDescription from "./components/AppDescription";
import HeaderApp from "./components/HeaderApp";
import React from "react";
import { useState, useEffect } from "react";
import ContactListTitle from "./components/ContactListTitle";
import ShowEmailButton from "./components/ShowEmailButton";
import UsersInfo from "./components/UsersInfo";

function App() {
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

  // List Item Show/Hide State
  const [showItems, setShowItems] = useState(false);
  // List Items Button Handler
  const buttonListItemHandler = () => {
    if (showItems === false) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  };

  // Show AppDescription
  const [showAppDescription, setShowAppDescription] = useState(false);

  // AppDescription Button Handler
  const buttonAppDescriptionHandler = () => {
    setShowAppDescription(!showAppDescription);
  };

  return (
    <div className="bg-slate-800/90 h-screen">
      <HeaderApp />
      <AppDescription
        showAppDescription={showAppDescription}
        buttonAppDescriptionHandler={buttonAppDescriptionHandler}
      />

      {/* container for app */}
      <div className={"py-[2rem] px-[5rem] md:px-[10rem] lg:px-[20rem] xl:px-[25rem]"}>

        <ContactListTitle />
        <ShowEmailButton showItems={showItems} buttonListItemHandler={buttonListItemHandler}/>
        <UsersInfo users={users} showItems={showItems}/>
        
      </div>
    </div>
  );
}

export default App;