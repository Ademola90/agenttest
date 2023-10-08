import React from "react";
import HnineVector from "../../Assets/HnineVector.png";
import HomeNineNav from "../../Components/home-nine/HomeNineNav";
import HomeNineCard from "../../Components/home-nine/HomeNineCard";
import HnineGroup4 from "../../Assets/HnineGroup4.png";
import HnineFrame4 from "../../Assets/HnineFrame4.png";
import { Link as RouterLink } from "react-router-dom";

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
                <RouterLink
                  to="/login"
                  className=" bg-white w-[157px] justify-center grid items-center no-underline h-[42px] text-black font-bold rounded-full"
                >
                  Get Started
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          name="about"
          className="grid md:px-16 lg:px-28 px-8 pb-[24px] lg:mt-14  md:mt35 mt-30 justify-center mx-auto w-full"
        >
          <div className=" lg:flex md:grid grid lg:justify-between md:justify-center justify-center">
            <div className=" lg:w-3/5 md:w-full w-full grid justify-center p-16 items-center">
              <img src={require("../../Assets/HnineGroup2.png")} alt="" />
            </div>
            <div className=" lg:w-2/5 md:w-full w-full grid justify-center lg:mt-28 md:mt-0 mt-0">
              <div className=" p-16">
                <div className=" lg:mt-28">
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
                    <RouterLink to="/login">
                      <button className=" bg-hninecol no-underline w-[157px] h-[42px] text-black font-bold rounded-full">
                        Get Sterted
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        name="product"
        className="md:px-16 justify-center items-center grid lg:px-28 px-8 pb-[24px] z-0 bg-hninecoll lg:mt-8  md:mt35 mt-30 mx-auto w-full h-auto"
      >
        <div className=" p-20 space-y-20">
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

          <div className="grid z-0 h-full md:grid-cols-2 lg:gap-10 md:gap-20 lg:grid-cols-3 justify-center mx-auto">
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

      <div className="grid md:px-16 lg:px-28 py-10 px-8 lg:mt-14 space-y-16  md:mt35 mt-30 mx-auto w-full">
        <div className="grid items-center w-full">
          <div>
            <p className=" lg:text-[20px] md:first-letter:text-[18px] text-[14px]">
              WHY YOU SHOULD CHOOSE US
            </p>
          </div>
          <div>
            <p className=" lg:text-[48px] md:text-[30px] text-[28px] lg:w-full md:w-full w-[250px]">
              Benefits You Stand To Enjoy With Us
            </p>
          </div>
          <div>
            <img
              className=" h-auto lg:w-[328.1px] md:w-[280.1px] w-[140.1px]"
              src={require("../../Assets/HnineLine79.png")}
              alt=""
            />
          </div>
        </div>
        <div className=" lg:flex md:grid grid lg:justify-between md:justify-center justify-center ">
          <div className=" w-1/2 grid justify-center ">
            <div className=" grid justify-center">
              <img
                className=" "
                src={require("../../Assets/HnineGroup42.png")}
                alt=""
              />
            </div>
          </div>
          <div className=" lg:w-1/2 mt-5 md:w-full w-full grid lg:p-10 justify-between">
            <div className=" grid lg:space-y-[-50px]">
              <div>
                <p className=" lg:w-[441px] font-bold">
                  Our user-friendly app & secure online platform make managing
                  your finances easy.
                </p>
              </div>
              <div>
                <div className=" flex space-x-3 items-center">
                  <img
                    className=" w-5 h-5"
                    src={require("../../Assets/HnineGroup66.png")}
                    alt=""
                  />

                  <p className=" mt-3">Secure and Convenient Transactions</p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <img
                    className=" w-5 h-5"
                    src={require("../../Assets/HnineGroup66.png")}
                    alt=""
                  />

                  <p className=" mt-3">Secure and Convenient Transactions</p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <img
                    className=" w-5 h-5"
                    src={require("../../Assets/HnineGroup66.png")}
                    alt=""
                  />

                  <p className=" mt-3">Secure and Convenient Transactions</p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <img
                    className=" w-5 h-5"
                    src={require("../../Assets/HnineGroup66.png")}
                    alt=""
                  />

                  <p className=" mt-3">Secure and Convenient Transactions</p>
                </div>
              </div>
            </div>

            <div>
              <RouterLink
                to="/login"
                className=" bg-hninecol no-underline grid justify-center items-center w-[157px] h-[42px] text-black font-bold rounded-full"
              >
                Get Sterted
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-hninetest grid md:px-16 py-10 lg:px-28 px-8 lg:mt-14 md:mt35 mt-30 mx-auto w-full">
        <div className=" grid justify-center">
          <div className=" grid justify-start">
            <img
              className=" lg:w-[120px] md:w-[80px] w-[50px] lg:h-[120px] md:h-[80px] h-[50px]"
              src={require("../../Assets/Hninequoteup.png")}
              alt=""
            />
          </div>
          <div>
            <p className=" text-white  lg:w-[723px] md:w-[522px] lg:text-[30px] md:text-[24px] text-center">
              I was hesitant to switch to an online platform for my
              subscriptions initially, but DataWebsiteName has exceeded my
              expectations.
            </p>
          </div>
          <div className=" grid justify-end">
            <img
              className="lg:w-[120px] md:w-[80px] w-[50px] lg:h-[120px] md:h-[80px] h-[50px]"
              src={require("../../Assets/Hninequotedown.png")}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div>
            <img
              className=" w-[76px] h-[76px ]"
              src={require("../../Assets/Ellipse 10.png")}
              alt=""
            />
          </div>
          <div className="grid text-white">
            <div>
              <p className=" font-bold">Joe Samuel</p>
            </div>
            <div>
              <p>Fin Tech</p>
            </div>
          </div>
        </div>
        <div className="flex mt-10 space-x-5 justify-center items-center">
          <div>
            <img
              className="w-[44px] h-[44px]"
              src={require("../../Assets/Hninescrolleft.png")}
              alt=""
            />
          </div>
          <div className="">
            <img
              className=" w-[44px] h-[44px]"
              src={require("../../Assets/Hninescrollright.png")}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid md:px-16 lg:px-28 lg:h-[255px] md:h-[150px] h-[150px] px-8 lg:mt-14 md:mt35 mt-30 mx-auto w-full">
        <div className=" text-black mt-10">
          <p className=" lg:text-[20px] md:text-[14px] text-[12px] text-center font-bold">
            Trusted by 4,000+ companies
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-marquee items-center">
            <img
              className=" lg:h-[48px] lg:w-[110px] md:h-[30px] md:w-[70px] h-[20px] w-[60px] text-white"
              src={require("../../Assets/Netflix.png")}
              alt=""
            />
            <img
              className=" lg:h-[48px] lg:w-[110px] md:h-[38px] md:w-[100px] h-[28px] w-[80px]"
              src={require("../../Assets/Canva.png")}
              alt=""
            />
            <img
              className=" lg:h-[48px] lg:w-[110px] md:h-[38px] md:w-[100px] h-[28px] w-[80px]"
              src={require("../../Assets/Adobe.png")}
              alt=""
            />
            <img
              className=" lg:h-[48px] lg:w-[110px] md:h-[38px] md:w-[100px] h-[28px] w-[80px]"
              src={require("../../Assets/Grammaly.png")}
              alt=""
            />
            <img
              className=" lg:h-[48px] lg:w-[110px] md:h-[38px] md:w-[100px] h-[28px] w-[80px]"
              src={require("../../Assets/Airbnb.png")}
              alt=""
            />
            <img
              className=" lg:h-[48px] lg:w-[110px] md:h-[38px] md:w-[100px] h-[28px] w-[80px]"
              src={require("../../Assets/Amazon.png")}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* footer */}

      <div
        name="contact"
        className="grid md:px-16 lg:px-28 px-8 lg:mt-14  md:mt35 mt-30 mx-auto w-full bg-hninefooter"
      >
        <div className=" grid justify-center space-y-8 items-center text-white py-10">
          <div className=" grid justify-center">
            <p className=" lg:text-[40px] md:text-[36px] text-[24px] font-bold">
              Subscribe to Our Newsletter
            </p>
          </div>
          <div className=" grid justify-center">
            <p>To join the worldwide community</p>
          </div>
          <div className=" flex justify-center items-center relative lg:left-[65px] md:left-[57px] left-[45px]">
            <div>
              <input
                className=" lg:w-[613px] md:w-[420px] w-[230px] lg:h-[67px] md:h-[47px] h-[37px] lg:px-2 rounded-md"
                type="text"
              />
            </div>
            <div className=" relative lg:right-[155px] md:right-[107px] right-[85px] ">
              <RouterLink
                to="/login"
                className=" lg:w-[150px] grid justify-center items-center no-underline md:w-[100px] w-[80px]   lg:h-[57px] md:h-[37px] h-[29px] bg-homeSixCol rounded-md text-white"
              >
                Join Now
              </RouterLink>
            </div>
          </div>
          <ul className=" flex justify-center lg:space-x-10 space-x-5 items-center">
            <li name="about">About</li>
            <li name="contact">Contact</li>
            <li name="product">Service</li>
          </ul>
          <div className=" flex justify-center space-x-5 items-center">
            <img
              className=" w-[24px] h-[23.64px]"
              src={require("../../Assets/HnineGroupinsta.png")}
              alt=""
            />
            <img
              className=" w-[24px] h-[23.64px]"
              src={require("../../Assets/HnineGrouptwit.png")}
              alt=""
            />
            <img
              className=" w-[24px] h-[23.64px]"
              src={require("../../Assets/HnineGroupface.png")}
              alt=""
            />
          </div>
        </div>
        <div className=" w-full">
          <hr className=" text-white w-full" />
        </div>
        <div className=" grid justify-center items-center">
          <p className=" text-white">Copyright © 2023. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNine;
