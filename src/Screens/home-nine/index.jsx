import React from "react";
import HnineVector from "../../Assets/HnineVector.png";
import HomeNineNav from "../../Components/home-nine/HomeNineNav";
import HomeNineCard from "../../Components/home-nine/HomeNineCard";
import HnineGroup4 from "../../Assets/HnineGroup4.png";
import HnineFrame4 from "../../Assets/HnineFrame4.png";

const HomeNine = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: HnineGroup4,
      title1: "Data Service",
      title2:
        "is a reliable and affordable platform for purchasing affordable data bundles and airtime top-ups for any Nigerian network. We offer competitive pricing for data plans from Airtel, MTN, 9mobile, and Glo.",
      imageAlt: "logo",
      imageSrcc: HnineFrame4,
    },
    {
      id: 2,
      imageSrc: HnineGroup4,
      title1: "Airtime Services",
      title2:
        "offers convenient and rapid airtime top-up services at competitive rates. Our low charges and quick recharge services make it easy for customers to top up their airtime.",
      imageAlt: "logo",
      imageSrcc: HnineFrame4,
    },
    {
      id: 3,
      imageSrc: HnineGroup4,
      title1: "Electricity",
      title2:
        "is a reliable and affordable platform for purchasing affordable data bundles and airtime top-ups for any Nigerian network. We offer competitive pricing for data plans from Airtel, MTN, 9mobile, and Glo.",
      imageAlt: "logo",
      imageSrcc: HnineFrame4,
    },
    {
      id: 4,
      imageSrc: HnineGroup4,
      title1: "Education",
      title2:
        "Do you want to stay on top of your finances, then make you can make use of  our pocket-friendly electricity payment feature. It saves more time and money with our streamlined payment tools.",
      imageAlt: "logo",
      imageSrcc: HnineFrame4,
    },
    {
      id: 5,
      imageSrc: HnineGroup4,
      title1: "TV Subscription",
      title2:
        "we offer discounted rates for renewing your DSTV, GOTV, and Startimes subscriptions, allowing you to save money on your cable service. Our convenient access to subscription renewal saves you time and effort in obtaining your cable service.",
      imageAlt: "logo",
      imageSrcc: HnineFrame4,
    },
    {
      id: 6,
      imageSrc: HnineGroup4,
      title1: "Airtime Service",
      title2:
        "is your go-to source for various examination scratch cards, including those for Waec, Neco, and Nabteb. We take pride in providing top-quality service and aim to make our website your go-to destination after your first experience with us.",
      imageAlt: "logo",
      imageSrcc: HnineFrame4,
    },
    // Repeat this structure for the other 5 cards.
  ];
  return (
    <div className=" w-full mx-auto overflow-hidden">
      <div className=" lg:space-y-[-100px] md:space-y-0 space-y-0">
        <div
          className=" bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${HnineVector})`,
            backgroundSize: "100% 100%",
            // // Add a media query to reduce background image height
            // "@media (max-width: 768px)": {
            //   backgroundSize: "100% auto", // Adjust the height as needed
            // },
            // "@media (max-width: 640px)": {
            //   backgroundSize: "100% 30%", // Adjust the height as needed
            // },
          }}
        >
          <HomeNineNav />

          <div className="grid md:px-16 lg:px-28 px-8 pb-[24px] justify-center mx-auto w-full h-screen">
            <div className=" grid justify-center space-y-[-100px] text-white mt-32">
              <div className="grid justify-center text-center lg:w-[900px]">
                <p className=" lg:text-[70px] font-bold md:text-[52px] text-[42px]">
                  Getting Bills Paid without being Frustrated
                </p>
              </div>
              <div className="grid justify-center text-center">
                <p className=" w-[400px] ">
                  In a few clicks, buy data to keep surfing the internet. You
                  can buy whatever size of data plan for whichever network you
                  desire. Get Started!
                </p>
              </div>

              <div className="flex justify-center">
                <button className=" bg-white w-[157px] h-[42px] text-black font-bold rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:px-16 lg:px-28 px-8 pb-[24px] lg:mt-14  md:mt35 mt-30 justify-center mx-auto w-full">
          <div className=" lg:flex md:grid grid lg:justify-between md:justify-center justify-center">
            <div className=" lg:w-3/5 md:w-full w-full grid justify-center p-16 items-center">
              <img src={require("../../Assets/HnineGroup2.png")} alt="" />
            </div>
            <div className=" lg:w-2/5 md:w-full w-full grid justify-center mt-28">
              <div className=" p-16">
                <div>
                  <p className=" text-[18px]">ABOUT US</p>
                </div>
                <div className=" space-y-28">
                  <div>
                    <p className=" lg:text-[40px] md:text-[30px] text-[20px]">
                      Who We Are
                    </p>
                    <p>
                      We have the BEST Features For Your Subscriptions. You can
                      trsut us with your subscriptions.
                    </p>
                  </div>
                  <div className="">
                    <button className=" bg-hninecol w-[157px] h-[42px] text-black font-bold rounded-full">
                      Get Sterted
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-16 grid justify-center lg:px-28 px-8 pb-[24px] z-0 bg-hninecoll lg:mt-8  md:mt35 mt-30 mx-auto w-full h-auto">
        <div className=" p-20">
          <div className="grid">
            <div>
              <p className="text-20px">OUR SERVICES</p>
            </div>
            <div className=" ">
              <p className="text-[40px] font-bold">What We Do</p>
            </div>
            <div>
              <img
                className="h-auto w-[170.11px]"
                src={require("../../Assets/HnineLine79.png")}
                alt=""
              />
            </div>
          </div>

          <div className="grid z-0 h-full md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto">
            {cardData.map((card) => (
              <HomeNineCard
                key={card.id}
                imageSrc={card.imageSrc}
                title1={card.title1}
                title2={card.title2}
                imageAlt={card.imageAlt}
                imageSrcc={card.imageSrcc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNine;
