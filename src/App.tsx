//import Navbar from "./components/NavBar";
import { useRef } from "react";
import Navbar from "./components/NavBar";
import { BackgroundCircle } from "./components/BackgroundCircle";
import { Eyes } from "./components/Eyes";
import { Mouth } from "./components/Mouth";
import { FaceContainer } from "./components/FaceContainer";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 140;




function App() {
  const ref = useRef();

  return (
    <>
      <Navbar />
      <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY} ref={ref}>
          <BackgroundCircle
            radius={centerY - strokeWidth / 2}
            strokeWidth={strokeWidth}
          />
          <Eyes
            eyeOffsetX={eyeOffsetX}
            eyeOffsetY={eyeOffsetY}
            eyeRadius={eyeRadius}
          />
          <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
      </FaceContainer>
      {/* <div className="flex flex-col md:flex-row min-h-screen">
        <div className="md:flex-1 md:w-7/10 flex">
          <img
            src="https://www.brookings.edu/wp-content/uploads/2018/07/Global_PollingStation_Ghana.jpg"
            alt="Sample"
            className="max-w-full h-auto  shadow-lg"
          />
        </div>
        <div className="md:flex-1 md:w-3/10 flex items-center justify-center p-8 bg-gray-100">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Service</h2>
            <p className="mb-6 text-gray-700">
              Discover all the amazing features that our service offers.
              Explore, create, and innovate with our cutting-edge tools designed
              to enhance your productivity.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
