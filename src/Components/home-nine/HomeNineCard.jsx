import React from "react";

const HomeNineCard = ({ imageSrc, title1, title2, imageAlt, imageSrcc }) => {
  const cardStyle = {
    width: "300px",
    height: "280px",
  };
  return (
    <div className=" grid justify-center space-y-[-57px] transition-transform hover:scale-105 duration-300 ease-in">
      <div className=" grid justify-center relative mt-[-40px]">
        <img
          className=" rounded-t-lg w-[70px] h-[70px] top-[75px] relative z-10"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div
        style={cardStyle}
        className="card bg-white shadow-lg overflow-hidden z-0 py-8 m-4  grid items-center  rounded-lg px-3  "
      >
        <div className="grid justify-center">
          <h4 className="mt-3 text-black text-center font-bold">{title1}</h4>

          <div className="">
            <p className=" text-black">{title2}</p>
          </div>
        </div>
      </div>
      <div className="grid justify-center">
        <img
          className=" rounded-t-lg w-[70px] h-[35px] relative z-10 "
          src={imageSrcc}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default HomeNineCard;
