import logo from "./images/logo.svg";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <div className="bg-slate-800/90 h-screen">
      <div className="flex justify-center pt-10">
        <img src={logo} className="h-20 animate-bounce" alt="logo" />
      </div>
      <Header />
    </div>
  );
}

export default App;
