import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./components/Home/Home";
import Aboutus from "./components/Pages/Aboutus/Aboutus";
import Services from "./components/Pages/Services/Services";
import Project from "./components/Pages/Project/Project";
import Contactus from "./components/Pages/Contactus/Contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common Header + Footer */}
        <Route element={<Layout />}>

          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contactus />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;