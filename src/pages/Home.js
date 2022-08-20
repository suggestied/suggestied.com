import { useState } from "react";
import Vector1 from "../assets/vector";
import Vector2 from "../assets/vector2";
import Contact from "../components/dialogs/contact";
import Features from "../components/features";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PortfolioList from "../components/portfolio";
import Pricing from "../components/pricing";
import Stats from "../components/stats";

function Home() {
  let [isOpen, setisOpen] = useState(false);

  return (
    <div className="w-full snap-y scroll-smooth">
      <Contact isOpen={isOpen} setisOpen={setisOpen} />
      <div className="inset-0 absolute">
        <Navbar />
      </div>
      <div className="relative w-full flex h-screen -my-12 snap-center">
        <div className="inset-0 absolute">
          <Vector1></Vector1>
        </div>

        <div className="absolute w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-[0.37%] right-[70.86%] top-[25.65%] bottom-[-152.65%] -rotate-6 blur-3xl opacity-20">
            <div
              className="w-full rounded-2xl h-full rounded-full"
              style={{
                background:
                  "linear-gradient(269deg, rgba(255, 82, 113, 1), rgba(255, 122, 0, 1))",
              }}
            />
          </div>
          <div className="absolute right-[0.37%] left-[60.86%] top-[-100.65%] bottom-[70.65%] rotate-2 blur-3xl opacity-20">
            <div
              className="w-full rounded-2xl h-full rounded-full"
              style={{
                background:
                  "linear-gradient(269deg, rgba(255, 82, 113, 1), rgba(255, 122, 0, 1))",
              }}
            />
          </div>
          <div className="inset-0 relative text-center w-full mx-auto text-center">
            <p className="text-md inline leading-[normal] font-mono text-gray-500 mix-blend-difference">
              FREELANCER Ui/UX DESiGNER &amp; DEVELOPER
              <br />
            </p>
            <p className="overflow-hidden mix-blend-color justify-items-center w-full md:w-2/3 text-center mx-auto flex justify-center flex-wrap break-normal font-medium text-black text-[40px] leading-[normal]">
              Building&#160;
              <span
                style={{
                  background:
                    "linear-gradient(269deg, rgba(255, 82, 113, 1), rgba(255, 122, 0, 1))",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                }}
                className="font-semibold text-[40px] leading-[normal]"
              >
                thoughtful&#160;
              </span>
              intuitive interfaces.
            </p>
          </div>
        </div>
      </div>
      <div className="h-min snap-center bg-gradient-to-r from-[rgba(255,123,1,1)] to-[rgba(255,83,112,1)] relative">
        <div className="py-8">
          <div className="relative flex overflow-x-hidden w-full text-white font-mono uppercase">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-4xl mx-4">Front-end developer</span>
              <span className="text-4xl mx-4">Ui / UX Designer</span>
              <span className="text-4xl mx-4">Back-end developer</span>
              <span className="text-4xl mx-4">System Administrator</span>
              <span className="text-4xl mx-4">Web3 Developer</span>
            </div>

            <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
              <span className="text-4xl mx-4">Front-end developer</span>
              <span className="text-4xl mx-4">Ui / UX Designer</span>
              <span className="text-4xl mx-4">Back-end developer</span>
              <span className="text-4xl mx-4">System Administrator</span>
              <span className="text-4xl mx-4">Web3 Developer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="inset-0 absolute h-full">
          <Vector2></Vector2>
        </div>
        <Features />
        <Stats />
      </div>

      <div className="w-full">
        <div className="bg-gray-50 p-12 ">
          <Pricing setisOpen={setisOpen} />
          <PortfolioList />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
