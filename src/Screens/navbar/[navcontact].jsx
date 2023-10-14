import React from "react";

const NavContact = () => {
  return (
    <div className=" bg-navcontactcol flex items-center justify-between lg:px-20 md:px-12 px-8 py-2">
      <div className=" lg:flex md:grid grid items-center lg:space-x-10">
        <div className=" flex items-center space-x-2">
          <img
            className=" w-[14.65px] h-[19.19px]"
            src={require("../../assets/Navcontcall.png")}
            alt="contact"
          />
          <p className=" fon-segoe text-white text-[16px]">+234 702 330 3000</p>
        </div>
        <div className=" flex items-center space-x-2">
          <img
            className=" w-[14.65px] h-[19.19px]"
            src={require("../../assets/Navcontmail.png")}
            alt="contact"
          />
          <p className=" fon-segoe text-white text-[16px]">
            info@screenclass.com admin
          </p>
        </div>
      </div>

      {/* social media */}
      <div className="  lg:flex md:flex hidden items-center space-x-4">
        <img
          className=" w-[24px] h-[24px]"
          src={require("../../assets/Linkedin.png")}
          alt=""
        />
        <img
          className=" w-[24px] h-[24px]"
          src={require("../../assets/Instagram.png")}
          alt=""
        />
        <img
          className=" w-[24px] h-[24px]"
          src={require("../../assets/Twitter.png")}
          alt=""
        />
        <img
          className=" w-[24px] h-[24px]"
          src={require("../../assets/Facebook.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavContact;
