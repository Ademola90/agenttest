import React from "react";

const HomeNineCard = ({ imageSrc, title1, title2, imageAlt, imageSrcc }) => {
  const cardStyle = {
    width: "290px",
    height: "296px",
  };
  return (
    <div className="grid transition-transform hover:scale-105 duration-300 ease-in">
      <div className=" grid justify-center relative lg:top-10 md:top-10 top-10 z-10 items-center">
        <img
          className="rounded-t-lg w-[70px] h-[70px]  "
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div
        style={cardStyle}
        className="card bg-white shadow-lg w-[290px] h-[296px] grid justify-center items-center overflow-hidden rounded-lg px-3 "
      >
        <div className="grid justify-center items-center">
          <h4 className="mt-3 text-black text-center font-bold">{title1}</h4>

          <p className="text-black text-center">{title2}</p>
        </div>
      </div>

      <div className=" grid justify-center items-end relative lg:bottom-6 md:bottom-6 bottom-6">
        <img
          className="rounded-t-lg w-[70px] h-[35px]"
          src={imageSrcc}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default HomeNineCard;
