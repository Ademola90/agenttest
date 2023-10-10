import React from "react";

const HomeTenCard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm lg:w-[300px] md:w-[400px] w-[300px] rounded grid py-5 justify-center overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300 ease-in">
      <div className=" grid justify-center">
        <img src={image} alt={title} className="w-[50px] h-[50px]" />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold grid justify-center text-xl mb-2">
          <p>{title}</p>
        </div>
        <div className=" grid justify-center">
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTenCard;
