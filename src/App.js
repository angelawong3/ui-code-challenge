import React, { useEffect } from "react";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  useEffect(() => {
    document.title = "The God Father Employee Dashboard";
  }, []);
  return (
    <Router>
      <Navigation />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
