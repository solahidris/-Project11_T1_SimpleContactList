// import logo from "./images/logo.svg";
import "./App.css";
import HeaderApp from "./components/HeaderApp";

function App() {

  const contactList = [{fullName:"user1", age:11}, {fullName:"user2", age:22}, {fullName:"user3", age:33}];

  return (
    <div className="bg-slate-800/90 h-screen">
      <HeaderApp />
      <div className="mx-20 text-xs">
      <p className="bg-yellow-100 text-center my-3">DO THIS I GUESS</p>
        <p className="bg-orange-500 text-white my-3 line-through">1- figure this out somewhat</p>
        <p className="bg-yellow-300/90 my-3">2- use https://jsonplaceholder.typicode.com/ for free api list</p> 
        <p className="bg-yellow-300/90 my-3">3- fetch from API</p>
        <p className="bg-yellow-300/90 my-3">4- render from API using useState and useEffect</p>
        <p className="bg-yellow-300/90 my-3">5- create button for display a part of data from USER API rendered</p>
        <p className="bg-yellow-300/90 my-3">6- onClick button show data</p>
        <p className="bg-yellow-300/90 my-3">7- onClick also can hide data (useState) for show/hide</p>  
      </div>

      <div>
        
      </div>

      <div className="text-center text-white bg-slate-800">
        <p className="py-4 font-bold italic bg-slate-600">this is the normal array destructure mapping</p>
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
