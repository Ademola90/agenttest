import React from "react";
import HomeTenNav from "../../Components/home-ten/HomeTenNav";
import HomefiveArrow from "../../Assets/HomefiveArrow.png";
import HomeTenCard from "../../Components/home-ten/HomeTenCard";
import Icon1 from "../../Assets/Icon1.png";
import HomefiveLine from "../../Assets/HomefiveLine.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const HomeTen = () => {
  const cards = [
    {
      image: Icon1,
      title: "Data Service",
      description:
        "is a reliable and affordable platform for purchasing affordable data bundles and airtime top-ups for any Nigerian network. We offer competitive pricing for data plans from Airtel, MTN, 9mobile, and Glo.",
    },
    {
      image: Icon1,
      title: "Airtime Service",
      description:
        "offers convenient and rapid airtime top-up services at competitive rates. Our low charges and quick recharge services make it easy for customers to top up their airtime.",
    },
    {
      image: Icon1,
      title: "Electricity",
      description:
        "is a reliable and affordable platform for purchasing affordable data bundles and airtime top-ups for any Nigerian network. We offer competitive pricing for data plans from Airtel, MTN, 9mobile, and Glo.",
    },
    {
      image: Icon1,
      title: "Education",
      description:
        "Do you want to stay on top of your finances, then make you can make use of  our pocket-friendly electricity payment feature. It saves more time and money with our streamlined payment tools.",
    },
    {
      image: Icon1,
      title: "TV Subscription",
      description:
        "we offer discounted rates for renewing your DSTV, GOTV, and Startimes subscriptions, allowing you to save money on your cable service. Our convenient access to subscription renewal saves you time and effort in obtaining your cable service.",
    },
    {
      image: Icon1,
      title: "Airtime Service",
      description:
        "is your go-to source for various examination scratch cards, including those for Waec, Neco, and Nabteb. We take pride in providing top-quality service and aim to make our website your go-to destination after your first experience with us.",
    },
  ];
  return (
    <div>
      <HomeTenNav />
      <div className=" lg:flex md:flex grid gap-5 md:px-16 lg:px-28 px-8 items-center lg:mt-32  md:mt35 mt-28 justify-center mx-auto w-full">
        <div className="lg:w-1/2 md:w-1/2 w-full grid ">
          <div>
            <p className="  text-[64px]">
              Never run out of data. Stay Connected!
            </p>
          </div>
          <div>
            <p className="lg:py-0 md:py-0 py-4">
              You can now buy data, airtime, pay electricity bills, Cable TV and
              other payments with ease using HonorWorld.
            </p>
          </div>
          <div>
            <RouterLink
              to="/login"
              className="flex no-underline items-center space-x-5"
            >
              <button className=" transition-transform hover:scale-110 duration-300 ease-in text-white bg-btncol lg:w-[170px] lg:h-[42px] md:w-[130px] md:h-[38px] w-[120px] h-[30px] rounded-3xl text-decoration-none">
                Get Started
              </button>
              <img
                className="lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-4 h-4"
                src={HomefiveArrow}
                alt=""
              />
            </RouterLink>
          </div>
        </div>
        <div className=" lg:w-1/2 md:w-1/2 w-full grid">
          <div>
            <img src={require("../../Assets/HtenHero.png")} alt="" />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        name="product"
        className=" lg:flex md:grid grid gap-5 md:px-16 lg:px-28 px-8 lg:mt-32  md:mt-36 mt-28 justify-center mx-auto w-full"
      >
        <div className=" grid gap-5 justify-center lg:w-3/5 md:w-full w-full">
          <div className=" grid justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center mx-auto">
              {cards.map((card, index) => (
                <HomeTenCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>

        <div className=" lg:w-2/5 md:w-full w-full md:grid grid lg:space-y-[-250px]">
          <div>
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className=" text-btncol"
            >
              OUR SERVICES
            </p>
            <div>
              <p className=" lg:text-[48px] md:text-[25px] text-[22px]">
                What We Do
              </p>
              <img
                className=" lg:w-[170.11px] md:w-[100px] w-[75px]"
                src={HomefiveLine}
                alt=""
              />
            </div>
          </div>

          <div className=" grid">
            <p>
              Yes, we got you covered, With Enjoy a easy and fast data delivery
              with Optimal security and also enjoy the best offers and discount
              sales on all our products periodically.
            </p>
          </div>

          <RouterLink
            to="/login"
            className=" transition-transform hover:scale-110 duration-300 ease-in text-white grid justify-center items-center no-underline bg-btncol lg:w-[170px] lg:h-[42px] md:w-[130px] md:h-[38px] w-[120px] h-[30px] rounded-3xl"
          >
            Get Started
          </RouterLink>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="grid md:px-16 lg:px-28 px-8 items-center lg:mt-32  md:mt35 mt-12 justify-center mx-auto w-full"
      >
        <div className="grid mt-10">
          <p className=" lg:text-[45px] md:text-[30px] text-[25px] text-center">
            Optimize Your Business Fast And Secured!
          </p>
          <p className=" text-center py-4 text-[16px]">
            Embracing A Brighter Financial Life
          </p>

          <div className="flex items-center justify-center">
            <RouterLink
              to="/login"
              className=" transition-transform grid justify-center items-center no-underline hover:scale-110 duration-300 ease-in text-white bg-btncol lg:w-[170px] lg:h-[42px] md:w-[130px] md:h-[38px] w-[120px] h-[30px] rounded-3xl"
            >
              Get Started
            </RouterLink>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        name="about"
        className=" lg:flex md:grid grid lg:space-x-8 md:space-y-8 space-y-8 md:px-16 lg:px-28 px-8 items-center lg:mt-20  md:mt35 mt-12 justify-center mx-auto w-full"
      >
        <div className=" grid lg:w-1/2 md:w-full w-full">
          <p className=" text-btncol text-[13px] pb-3 font-bold">
            WE ARE THE BEST SUBSCRIPTION PLATFORM
          </p>
          <p className="font-bold lg:text-[20px] py-4 md:text-[15px] text-[12px]">
            We have the BEST Features For Your Subscriptions. You can trust us
            with your subscriptions.
          </p>
          <p>
            Empower Your Financial Journey with the Ultimate Solution for
            Convenience and experience the ease and security of managing your
            finances with our innovative and comprehensive solution.
          </p>
          <img
            className="mx-auto"
            src={require("../../Assets/HomefiveFrame.png")}
            alt=""
          />
        </div>
        {/* Transactions */}
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center gap-3 lg:w-1/2 md:w-full w-full">
          <div className=" shadow-md grid justify-center p-3 transition-transform hover:scale-105 duration-300 ease-in">
            <div className=" grid justify-center">
              <img
                className=" h-auto w-10"
                src={require("../../Assets/Tranc1.png")}
                alt=""
              />
            </div>
            <div className=" grid justify-center">
              <p className=" text-[20px] lg:py-0 md:py-0 py-4 font-bold">
                Secure Transactions
              </p>
            </div>
            <div className=" grid justify-center">
              <p>
                We take the security of your account seriously, we are committed
                to preventing data loss or leak.
              </p>
            </div>
          </div>
          <div className=" shadow-md grid justify-center p-3 transition-transform hover:scale-105 duration-300 ease-in">
            <div className=" grid justify-center">
              <img
                className=" h-auto w-10"
                src={require("../../Assets/Tranc2.png")}
                alt=""
              />
            </div>
            <div className=" grid justify-center">
              <p className=" text-[20px] lg:py-0 md:py-0 py-4 font-bold">
                24/7 Customer Support
              </p>
            </div>
            <div className=" grid justify-center">
              <p>
                has a team of well-trained customer support agents available
                24/7 to assist you with any issues you may have. We offer
                multiple channels of communication to ensure that you can easily
                reach us and receive prompt assistance.
              </p>
            </div>
          </div>
          <div className=" shadow-md grid justify-center p-3 transition-transform hover:scale-105 duration-300 ease-in">
            <div className=" grid justify-center">
              <img
                className=" h-auto w-10"
                src={require("../../Assets/Tranc1.png")}
                alt=""
              />
            </div>
            <div className=" grid justify-center">
              <p className=" text-[20px] lg:py-0 md:py-0 py-4 font-bold">
                Safe and Convenient
              </p>
            </div>
            <div className=" grid justify-center">
              <p>
                Periodically, offers the best discounts and special deals on all
                of our services, including data, airtime, and cable
                subscriptions. Stay tuned for updates on our special offers and
                take advantage of the opportunity to save on these services.
              </p>
            </div>
          </div>
          <div className=" shadow-md grid justify-center p-3 transition-transform hover:scale-105 duration-300 ease-in">
            <div className=" grid justify-center">
              <img
                className=" h-auto w-10"
                src={require("../../Assets/Tranc2.png")}
                alt=""
              />
            </div>
            <div className=" grid justify-center">
              <p className=" text-[20px] lg:py-0 md:py-0 py-4 font-bold">
                Awesome Service
              </p>
            </div>
            <div className=" grid justify-center">
              <p>
                Yes, we got you covered, With Enjoy a easy and fast data
                delivery with Optimal security and also enjoy the best offers
                and discount sales on all our products periodically.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial */}

      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className=" bg-htentest py-3"
      >
        <div className=" lg:flex md:grid grid md:px-16 lg:px-28 px-8 items-center lg:mt-32  md:mt35 mt-24 justify-center mx-auto w-full">
          <div className=" lg:w-2/5 md:w-full w-full grid justify-center items-center p-5">
            <img src={require("../../Assets/HomefiveTimg.png")} alt="" />
          </div>
          <div className=" grid lg:w-3/5 md:w-full w-full">
            <div className=" grid">
              <div className=" flex justify-between items-center ">
                <div>
                  <p className=" font-sansation text-[40px] text-white">
                    Testimonials
                  </p>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <img
                    className="lg:w-10 lg:h-10 md:w-8 w-6"
                    src={require("../../Assets/ArrowLeft.png")}
                    alt=""
                  />
                  <img
                    className="lg:w-10 lg:h-10 md:w-8 w-6"
                    src={require("../../Assets/ArrowRight.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    className=" w-6 h-[250px]"
                    src={require("../../Assets/LeftBorder.png")}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className=" relative lg:z-10 bg-white w-full p-10 rounded-2xl space-y-10">
                    <div className=" flex justify-between">
                      <div className="grid">
                        <p className=" lg:text-[24px] md:text-[20px] text-[12px] font-bold">
                          Mide Chike
                        </p>
                        <p className=" font-bold">Data Vendor</p>
                      </div>

                      <div className="">
                        <img
                          className=" w-20 h-20 object-cover"
                          src={require("../../Assets/HomefiveTestimg.png")}
                          alt=""
                        />
                      </div>
                    </div>

                    <p>
                      I enjoy excellent customer service and affordable telecom
                      services with swift delivery daily while using this
                      platform. If you ever think of making more profits in your
                      data reselling business, think of
                    </p>
                  </div>
                </div>
                <div className=" items-end relative left-[-30px] lg:grid md:hidden hidden">
                  <img
                    className=" object-cover lg:w-32 lg:h-32 md:w-10 md:h-32 w-10 h-32"
                    src={require("../../Assets/RectangleT.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="md:px-16 lg:px-28 px-8 items-center lg:mt-32 md:mt35 mt-24 justify-center mx-auto w-full"
      >
        <div className="space-y-3 grid justify-center items-center">
          <p className=" font-sansation lg:text-[28px] md:text-[20] text-[12px] text-center">
            Trusted by 4,000+ companies
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-5 items-center">
              <img
                className=" lg:h-[48px] lg:w-[110px] md:h-[30px] md:w-[70px] h-[20px] w-[60px]"
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
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="md:px-16 lg:px-28 px-8 items-center lg:mt-32 md:mt35 mt-24 justify-center mx-auto w-full"
      >
        <div className=" text-white bg-btncol lg:p-16 md-p-10 p-8 gap-4 rounded-2xl  ">
          <div className=" grid justify-center items-center">
            <p className=" lg:text-[45px] md:text-[30px] text-[15px] lg:w-[700px] text-center">
              Subscribe to Our Newsletter to stay updated!
            </p>
          </div>

          <div className="flex items-center justify-center">
            <RouterLink
              to="/login"
              className=" transition-transform hover:scale-110 duration-300 ease-in text-btncol bg-white grid justify-center items-center no-underline lg:w-[170px] lg:h-[42px] md:w-[130px] md:h-[38px] w-[120px] h-[30px] rounded-3xl"
            >
              Get Started
            </RouterLink>
          </div>
        </div>
      </div>

      {/* footer */}
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        name="contact"
        className="md:px-16 lg:px-28 px-8 items-center lg:mt-32 md:mt35 mt-24 justify-center mx-auto w-full"
      >
        <div className=" lg:flex md:grid grid lg:space-y-0 md:space-y-10 space-y-10">
          <div className=" lg:w-1/3 grid">
            <p className=" lg:text-[22px] md:text-[20px] text-[20px] font-bold text-btncol">
              Business Name
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
            <div className="flex items-center space-x-5">
              <img
                className=" object-cover w-6 h-6"
                src={require("../../Assets/HFlinkedin.png")}
                alt=""
              />
              <img
                className=" object-cover w-6 h-6"
                src={require("../../Assets/HFmessenger.png")}
                alt=""
              />
              <img
                className=" object-cover w-6 h-6"
                src={require("../../Assets/HFtwitter.png")}
                alt=""
              />
              <img
                className=" object-cover w-6 h-6"
                src={require("../../Assets/HFfacebook.png")}
                alt=""
              />
            </div>
          </div>

          <div className=" lg:w-1/5 grid lg:space-y-0 md:space-y-0 space-y-5">
            <p className="lg:text-[22px] md:text-[20px] text-[20px] font-bold">
              Company
            </p>
            <Link
              to="about"
              duration={500}
              className=" cursor-pointer no-underline text-black"
            >
              About us
            </Link>
            <Link
              to="Product"
              duration={500}
              className=" cursor-pointer no-underline text-black"
            >
              Product
            </Link>

            <Link
              to="contact"
              duration={500}
              className=" cursor-pointer no-underline text-black"
            >
              Contact Us
            </Link>
            <Link
              to=""
              duration={500}
              className=" cursor-pointer no-underline text-black"
            >
              Pricing
            </Link>
          </div>

          <div className=" lg:w-1/5 grid">
            <p className="lg:text-[22px] md:text-[20px] text-[20px] font-bold">
              Terms of Service
            </p>
            <p>Policy</p>
            <p>Terms and Conditions</p>
            <p>Terms of Agreement</p>
            <p>Privacy Policy</p>
          </div>

          <div className=" lg:w-1/3 grid">
            <p className="lg:text-[22px] md:text-[20px] text-[20px] font-bold">
              Join Our Newsletter
            </p>
            <div className="flex">
              <div className="">
                <input
                  className="h-[52px] border-none bg-slate-900 text-white px-2"
                  placeholder="Your email address"
                  type="text"
                />
              </div>
              <div className="">
                <button className="bg-btncol w-[100px] h-[52px] font-bold">
                  Subscribe
                </button>
              </div>
            </div>
            <p className=" text-slate-900">
              * Will send you weekly updates for your better finance management.
            </p>
          </div>
        </div>

        <hr className="text-3xl" />
        <div className="text-center lg:text-[18px] md:text-[15px] text-[10px]">
          Copyright @ 2023. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default HomeTen;
