// import logo from "./images/logo.svg";
import "./App.css";
import HeaderApp from "./components/HeaderApp";

function App() {

  const contactList = [{fullName:"user1", age:11}, {fullName:"user2", age:22}, {fullName:"user3", age:33}];

  return (
    <div className="bg-slate-800/90 h-screen">
      <HeaderApp />
      <div className="mx-20">
      <p className="bg-yellow-100 text-center my-3">DO THIS I GUESS</p>
        <p className="bg-yellow-300/90 my-3 line-through">1- have a contact list</p>
        <p className="bg-yellow-300/90 my-3">2- fetch list of all users</p>
        <p className="bg-yellow-300/90 my-3">3- fetch from API</p>
        <p className="bg-yellow-300/90 my-3">4- render each user's detail</p>
        <p className="bg-yellow-300/90 my-3">5- user's detail have button (show age)</p>
        <p className="bg-yellow-300/90 my-3">6- click button will show age</p>  
      </div>

      <div className="text-center text-white bg-slate-800">
        {contactList.map((contact,index)=>(
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
