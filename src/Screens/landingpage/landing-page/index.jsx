import React from "react";
import Navbar from "../navbar/[navbar]";
import NavContact from "../navbar/[navcontact]";
import Heroimg from "../../../Assets/Heroimg.png";
import Testimonialbg from "../../../Assets/Testimonialbg.jpg";
import Cardimg1 from "../../../Assets/Cardimg1.png";
import Cardimg2 from "../../../Assets/Cardimg2.png";
import Cardimg3 from "../../../Assets/Cardimg3.png";
import Cardimg4 from "../../../Assets/Cardimg4.png";

const Card = ({ imageSrc, text, buttonText }) => {
  return (
    <div className="w-[220px] h-auto rounded overflow-hidden shadow-lg m-4">
      <img src={imageSrc} alt={text} className="w-full" />
      <div className="px-6 py-4">
        <div className="text-[14px] font-Poppins">{text}</div>
      </div>
      <div className=" text-[16px]">
        <button className=" text-navbtncol font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const cardData = [
    {
      imageSrc: Cardimg1,
      text: "JAMB QUESTONS",
      buttonText: "GET STARTED",
    },
    {
      imageSrc: Cardimg2,
      text: "NECO QUESTIONS",
      buttonText: "GET STARTED",
    },
    {
      imageSrc: Cardimg3,
      text: "WAEC QUESTIONS",
      buttonText: "GET STARTED",
    },
    {
      imageSrc: Cardimg4,
      text: "GENERAL QUESTIONS",
      buttonText: "GET STARTED",
    },
    {
      imageSrc: Cardimg1,
      text: "JAMB QUESTONS",
      buttonText: "GET STARTED",
    },
    {
      imageSrc: Cardimg2,
      text: "NECO QUESTIONS",
      buttonText: "GET STARTED",
    },
    {
      imageSrc: Cardimg3,
      text: "WAEC QUESTIONS",
      buttonText: "GET STARTED",
    },
    {
      imageSrc: Cardimg4,
      text: "GENERAL QUESTIONS",
      buttonText: "GET STARTED",
    },
  ];

  return (
    <div className=" grid mx-auto ">
      <NavContact />
      <div
        className=" bg-cover bg-no-repeat bg-center justify-center items-center w-full h-full "
        style={{
          backgroundImage: `url(${Heroimg})`,
        }}
      >
        <Navbar />

        {/* Hero */}
        <div className=" grid px-8 md:px-12 lg:px-20 justify-center items-center space-y-20 py-[70px] mx-auto">
          <div className=" grid justify-center items-center space-y-11">
            <div className="  text-white grid justify-center items-center">
              <div className=" lg:w-[700px]">
                <p className=" lg:text-[48px] md:text-[38px] text-[38px] text-center font-segoe">
                  Explore The World Of Learning{" "}
                  <span className="lg:text-[48px] md:text-[38px] text-[38px]  text-center font-bold font-segoe">
                    Screenclass Exams Solutions
                  </span>
                </p>
              </div>
            </div>
            <div className="  text-white grid justify-center items-center">
              <div className=" lg:w-[770px] justify-center items-center">
                <p className=" font-Poppins text-center">
                  Lorem ipsum dolor sit amet consectetur. Vitae duis nibh sed
                  commodo. Fames odio sed quis venenatis. Senectus bibendum.
                </p>
              </div>
            </div>
          </div>
          {/* button */}
          <div className=" flex justify-center items-center space-x-10">
            <button className=" w-[188px] h-[50px] font-segoe text-[18px] rounded-full text-white bg-navbtncol">
              GET STARTED
            </button>
            <button className=" flex items-center justify-center font-segoe text-white space-x-3">
              <p>READ MORE</p>
              <img
                className=" w-[16px] h-[12px]"
                src={require("../../../Assets/Landingarrow.png")}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      {/* section1 */}
      <div className=" grid px-8 md:px-12 lg:px-20 space-y-10 py-10 mx-auto">
        <div className=" grid justify-center items-center">
          <p className=" text-[16px] text-navbtncol font-Public+Sans font-bold">
            WELCOME TO SCREENCLASS CBT SOLUTIONS
          </p>
        </div>
        <div className="grid justify-center items-center ">
          <div className="">
            <p className=" text-[24px] text-center lg:w-[637px] ">
              We Are Ready To Give You A New Experience Through Exams Prep{" "}
              <span className="text-[24px] font-bold">Solutions</span>
            </p>
          </div>
        </div>

        <div className=" lg:flex md:grid grid justify-center items-center gap-3">
          <div className=" lg:w-1/2 md:w-full w-full grid justify-center items-center lg:p-3">
            <div>
              <img src={require("../../../Assets/Firstimg.png")} alt="" />
            </div>
          </div>
          <div className=" lg:w-1/2 md:w-full w-full grid justify-center items-center gap-3">
            <div>
              <img src={require("../../../Assets/Frametwo.png")} alt="" />
            </div>
            <div className=" flex justify-center items-center gap-3">
              <div>
                <img src={require("../../../Assets/Frame3.png")} alt="" />
              </div>
              <div>
                <img src={require("../../../Assets/Frame4.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="lg:flex gap-10 justify-center items-center md:grid grid px-8 md:px-12 lg:px-20 mx-auto">
        <div className=" lg:w-1/2 md:w-full w-full grid space-y-20  justify-center items-center">
          <div className=" grid justify-center items-center space-y-5">
            <div>
              <p className=" font-Alata font-semibold lg:text-[32px] md:text-[26] text-[24px]">
                100, 000+ PRACTICE QUESTIONS
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quisque id semper
                elementum donec. Id in faucibus ornare suspendisse porttitor
                diam. Quis pulvinar enim suscipit ut. Tincidunt risus egestas
                rhoncus habitasse. Rhoncus justo condimentum orci feugiat.
                Libero aliquet lectus egestas nisl nam varius aliquet id
              </p>
            </div>
          </div>

          {/* button */}
          <div>
            <button className=" font-Segoe text-navbtncol border-4 border-navbtncol rounded-md w-[188px] h-[50px]">
              READ MORE
            </button>
          </div>
        </div>
        <div className=" lg:w-1/2 md:w-full grid justify-center items-center w-full">
          <div className=" lg:p-3">
            <img src={require("../../../Assets/Frame6.png")} alt="" />
          </div>
        </div>
      </div>

      {/* section3 */}

      <div className="lg:flex md:grid grid justify-center items-center gap-10 px-8 md:px-12 lg:px-20 py-10 mx-auto">
        <div className=" lg:w-1/2 md:w-full w-full grid justify-center items-center">
          <div className=" p-3">
            <img src={require("../../../Assets/Frame7.png")} alt="" />
          </div>
        </div>
        <div className=" lg:w-1/2 md:w-full w-full space-y-20">
          <div className="grid justify-center items-center space-y-5">
            <div>
              <p className=" font-Alata text-[32px]">30 SUBJECTS COVERED</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quisque id semper
                elementum donec. Id in faucibus ornare suspendisse porttitor
                diam. Quis pulvinar enim suscipit ut. Tincidunt risus egestas
                rhoncus habitasse. Rhoncus justo condimentum orci feugiat.
                Libero aliquet lectus egestas nisl nam varius aliquet id
                egestas. Tellus purus vitae risus leo viverra lectus mauris
                venenatis.{" "}
              </p>
            </div>
          </div>
          {/* button */}
          <div>
            <button className=" font-Segoe text-navbtncol border-4 border-navbtncol rounded-md w-[188px] h-[50px]">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* section4 */}

      <div className=" lg:flex md:grid grid gap-10 justify-center items-center px-8 md:px-12 lg:px-20 py-10 mx-auto">
        <div className=" lg:w-1/2 md:full h-full grid space-y-16 justify-center items-center">
          <div className=" flex justify-center items-center space-x-10">
            <div>
              <img src={require("../../../Assets/Line24.png")} alt="" />
            </div>
            <div className="grid space-y-5">
              <div>
                <p className=" text-[32px]">40 YEARS QUESTION</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quisque id semper
                  elementum donec. Id in faucibus ornare suspendisse porttitor
                  diam. Quis pulvinar enim suscipit ut. Tincidunt risus egestas
                  rhoncus habitasse. Rhoncus justo condimentum orci feugiat.
                  Libero aliquet lectus egestas nisl nam varius aliquet id
                  egestas. Tellus purus vitae risus leo viverra lectus mauris
                  venenatis.{" "}
                </p>
              </div>
            </div>
          </div>

          {/* button */}
          <div>
            <button className=" font-Segoe text-navbtncol border-4 border-navbtncol rounded-md w-[188px] h-[50px]">
              READ MORE
            </button>
          </div>
        </div>
        <div className=" lg:w-1/2 md:full full">
          <img src={require("../../../Assets/Frame8.png")} alt="" />
        </div>
      </div>

      {/* section5 Testimonial */}

      <div>
        <div
          className="bg-cover bg-no-repeat bg-center h-full w-full"
          style={{ backgroundImage: `url(${Testimonialbg})` }}
        >
          <div className=" bg-blue-500 opacity-90">
            <div className=" text-white px-8 md:px-12 lg:px-20 py-20 space-y-20 mx-auto">
              <div className="grid justify-center items-center space-y-5">
                <div>
                  <p className=" text-[16px] text-navbtncol font-public text-center">
                    TESTIMONIALS
                  </p>
                </div>
                <div>
                  <p className=" text-[32px] font-public text-center">
                    Hear Our Customers Speak
                  </p>
                </div>
              </div>
              <div className=" grid justify-center space-y-4">
                <div className="flex bg-black opacity-75 w-[1004px] gap-10 p-5 h-auto">
                  <div className=" w-2/5 flex justify-between items-center">
                    <div className=" flex items-center space-x-5">
                      <div>
                        <img
                          className=" w-[100px] h-[100px]"
                          src={require("../../../Assets/Testimonialimg.png")}
                          alt=""
                        />
                      </div>
                      <div className="grid">
                        <p className=" text-[16px] font-nunito">Jhon Smith</p>
                        <p className=" text-[16px] font-nunito">FinTech</p>
                      </div>
                    </div>

                    <div>
                      <img
                        className=" w-auto h-[70px]"
                        src={require("../../../Assets/TestimonialLine.png")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" w-3/5">
                    <p className=" font-nunito">
                      Lorem ipsum dolor sit amet consectetur. Nisl egestas in
                      morbi vel. Potenti magna eleifend risus bibendum id
                      quisque. Cursus tellus gravida vulputate ac diam. Ultrices
                      risus ut justo justo dolor ultrices sit vitae nisl. Cum
                      duis at vulputate blandit tincidunt quis ornare. Lacus in
                      erat lacus congue.
                    </p>
                  </div>
                </div>
                {/* slide dots */}
                <div className=" flex justify-center gap-3 items-center">
                  <img
                    className=" w-[10px] h-[10px]"
                    src={require("../../../Assets/Ellipse3.png")}
                    alt=""
                  />
                  <img
                    className="w-[10px] h-[10px]"
                    src={require("../../../Assets/Ellipse4.png")}
                    alt=""
                  />
                  <img
                    className="w-[10px] h-[10px]"
                    src={require("../../../Assets/Ellipse5.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section6 Wide range service */}

      <div className=" grid px-8 md:px-12 lg:px-20 gap-10 py-10 mx-auto">
        <div className=" flex justify-center items-center gap-5">
          <div className=" w-2/5 flex items-center justify-between">
            <div className=" grid items-center space-y-5">
              <div>
                <p className=" text-[20px] text-navbtncol font-public">
                  OUR WIDE RANGE OF SERVICES
                </p>
              </div>
              <div>
                <p className=" text-[32px] font-public">
                  We Are Ready To Give You A New Experience{" "}
                </p>
              </div>
            </div>
            <div className=" grid">
              <img
                className=" h-[170px] w-auto"
                src={require("../../../Assets/line.png")}
                alt=""
              />
            </div>
          </div>
          <div className=" w-3/5">
            <p className=" text-[20px] font-public">
              Lorem ipsum dolor sit amet consectetur. Id in tempor dui non nunc
              leo. Imperdiet mi arcu ornare vehicula elit ullamcorper duis. Odio
              egestas ut est aliquet nullam tempus. Pretium donec euismod
              rhoncus est fusce. Mattis nibh scelerisque vel nisl nulla eget
              nunc orci. Tellus elit ut dui.
            </p>
          </div>
        </div>

        {/* cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 justify-center items-center">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
