import "./App.css";
import Waiting from "./Waiting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import Home from "./Home";
import { useState } from "react";
function App() {
const [popUp,setPopUp] = useState(true)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setPopUp={setPopUp} popUp={popUp}/>} />
        <Route path="/contactform" element={<ContactForm setPopUp={setPopUp} popUp={popUp}/>} />
        <Route path="/waiting" element={<Waiting />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
