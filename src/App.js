import React from "react";
import HomeS from "./Pages/HomeNi/HomeS";
import HomeNine from "./Screens/home-nine";
import HomeTen from "./Screens/home-ten";
import LandingPage from "./Screens/landingpage/landing-page";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeS />} />
          <Route path="/homenine" element={<HomeNine />} />
          <Route path="/hometen" element={<HomeTen />} />
          <Route path="/landinpage" element={<LandingPage />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
