import React from "react";
import HomeS from "./Pages/HomeNi/HomeS";
import HomeNine from "./Screens/home-nine";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeS />} />
          <Route path="/homenine" element={<HomeNine />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
