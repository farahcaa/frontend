import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./pages/components/layout/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
