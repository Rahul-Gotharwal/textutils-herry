
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import Alert from "./components/Alert"; 
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light  mode has been enabled ", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About"
        Home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-9 ">

      <Routes>
        <Route exact path="/about" element={ <About mode={mode} />} >
       </Route>
       
        <Route exact  path="/"element={<Textform showAlert={showAlert} rahul=" Try-TextUtils-For Update Your Text" mode={mode} />}> 
          
        </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;