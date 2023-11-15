import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Video from "./Video";
import Signin from "./Signin";
import Upload from './Upload';

// npm i bootstrap@5.3.2
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/js/dist/modal.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* My reactooo */} 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Video" element={<Video />}></Route>
          <Route exact path="/Signin" element={<Signin />}></Route>
          <Route exact path="/upload" element={<Upload/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
