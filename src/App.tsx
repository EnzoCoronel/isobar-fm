import React from "react";
import Info from "./pages/Info";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  
  return (
      <Routes>
        <Route path="/band/:id" element={<Info/>} />
        <Route path="/" element={<Home />} />
      </Routes>
  );
};

export default App;
