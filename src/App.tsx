//import Navbar from "./components/NavBar";
import { useRef, useState, useCallback } from "react";
//import { Face } from "./components/FaceEmoji/Face";
import Navbar from "./components/NavBar";

const width = 960;
const height = 500;
const circleRadius = 30;
const initialMousePosition = {
  x: width / 2,
  y: height / 2,
};

//const array = [1];

const App = () => {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  const handleMouseMove = useCallback((event:MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  },[setMousePosition]);

  return (
    <>
      <Navbar />
      {/* {array.map(() => (
        <Face
          width={width}
          height={height}
          centerX={width / 2}
          centerY={height / 2}
          strokeWidth={6 + Math.random() * 3}
          eyeOffsetX={20 + Math.random() * 9}
          eyeOffsetY={20 + Math.random() * 15}
          eyeRadius={5 + Math.random() * 10}
          mouthWidth={7 + Math.random() * 9}
          mouthRadius={30 + Math.random() * 10}
        />
      ))} */}

      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
      </svg>

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
};

export default App;
