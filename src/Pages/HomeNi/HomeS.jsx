import React from "react";
import { Link } from "react-router-dom";

const HomeS = () => {
  return (
    <div className=" grid">
      <Link
        to="/homenine"
        className=" bg-blue-700 text-white font-bold px-8 py-2]"
      >
        Home Nine
      </Link>
      <Link
        to="/hometen"
        className=" bg-blue-700 text-white font-bold px-8 py-2]"
      >
        Home Ten
      </Link>
      <Link
        to="/landinpage"
        className=" bg-blue-700 text-white font-bold px-8 py-2]"
      >
        Landing Page
      </Link>
    </div>
  );
};

export default HomeS;
