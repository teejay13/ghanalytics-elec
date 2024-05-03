import { useState, useEffect, useRef } from "react";
//import { Face } from "./components/FaceEmoji/Face";
import Navbar from "./components/NavBar";
import { csv, scaleBand, scaleLinear, max } from "d3";
import { bottom, right } from "@popperjs/core";

const width = 960;
const height = 500;
const margin = {
  top: 20,
  bottom: 20,
  right: 20,
  left: 200,
};

const csvUrl =
  "https://gist.githubusercontent.com/teejay13/b9acd5fe0db96c9a2137a302c7fc34ee/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

//const array = [1];

const App = () => {
  const [data, setData] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    const row = (d) => {
      d.population = +d["2020"];
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  if (!data) {
    return <pre>Loading..</pre>;
  }

  const innerheight = height - margin.top - margin.bottom;

  const innerwidth = width - margin.left - margin.right;

  const yscale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerheight]);

  const xscale = scaleLinear()
    .domain([0, max(data, (d) => d.population)])
    .range([0, innerwidth]);

  return (
    //   <>
    //     <Navbar />
    //     {/* {array.map(() => (
    //       <Face
    //         width={width}
    //         height={height}
    //         centerX={width / 2}
    //         centerY={height / 2}
    //         strokeWidth={6 + Math.random() * 3}
    //         eyeOffsetX={20 + Math.random() * 9}
    //         eyeOffsetY={20 + Math.random() * 15}
    //         eyeRadius={5 + Math.random() * 10}
    //         mouthWidth={7 + Math.random() * 9}
    //         mouthRadius={30 + Math.random() * 10}
    //       />
    //     ))} */}

    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xscale.ticks().map((tickvalue) => (
          <g key={tickvalue} transform={`translate(${xscale(tickvalue)},0)`}>
            <line y2={innerheight} stroke="black" />
            <text
              dy=".71em"
              style={{ textAnchor: "middle" }}
              y={innerheight + 3}
            >
              {tickvalue}
            </text>
          </g>
        ))}

        {yscale.domain().map((tickvalue) => (
          <text
            key={tickvalue}
            style={{ textAnchor: "end" }}
            dy=".32em"
            x={-3}
            y={yscale(tickvalue) + yscale.bandwidth() / 2}
          >
            {tickvalue}
          </text>
        ))}
        {data.map((d) => (
          <rect
            key={d.Country}
            x={0}
            y={yscale(d.Country)}
            width={xscale(d.population)}
            height={yscale.bandwidth()}
          />
        ))}
      </g>
    </svg>

    //     {/* <div className="flex flex-col md:flex-row min-h-screen">
    //       <div className="md:flex-1 md:w-7/10 flex">
    //         <img
    //           src="https://www.brookings.edu/wp-content/uploads/2018/07/Global_PollingStation_Ghana.jpg"
    //           alt="Sample"
    //           className="max-w-full h-auto  shadow-lg"
    //         />
    //       </div>
    //       <div className="md:flex-1 md:w-3/10 flex items-center justify-center p-8 bg-gray-100">
    //         <div>
    //           <h2 className="text-3xl font-bold mb-4">Welcome to Our Service</h2>
    //           <p className="mb-6 text-gray-700">
    //             Discover all the amazing features that our service offers.
    //             Explore, create, and innovate with our cutting-edge tools designed
    //             to enhance your productivity.
    //           </p>
    //           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //             Get Started
    //           </button>
    //         </div>
    //       </div>
    //     </div> */}
    //   </>
  );
};

export default App;
