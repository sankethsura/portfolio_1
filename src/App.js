import "./App.css";
import Waiting from "./Waiting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import Home from "./Home";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/waiting" element={<Waiting />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
