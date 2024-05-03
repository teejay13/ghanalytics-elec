import { useState, useEffect } from "react";
//import { Face } from "./components/FaceEmoji/Face";
import Navbar from "./components/NavBar";
import { csv, scaleBand, scaleLinear, max, format } from "d3";
import { UseData } from "./components/Population/UseData";
import { AxisBottom } from "./components/Population/AxisBottom";
import { AxisLeft } from "./components/Population/AxisLeft";
import { Marks } from "./components/Population/Marks";
import "./App.css";

const width = 960;
const height = 500;
const margin = {
  top: 20,
  bottom: 65,
  right: 30,
  left: 220,
};

const xAxisLabelOfsset = 50;

//const array = [1];

const App = () => {
  const data = UseData();

  if (!data) {
    return <pre>Loading..</pre>;
  }

  const innerheight = height - margin.top - margin.bottom;

  const innerwidth = width - margin.left - margin.right;

  const yValue = (d) => d.Country;

  const xValue = (d) => d.population;

  const siFormat = format('.2s')

  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G','B')

  const yscale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerheight])
    .paddingInner(0.2);

  const xscale = scaleLinear()
    .domain([0, max(data, xValue)])
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
        <text className="axis-label" x={innerwidth / 2} y={innerheight + xAxisLabelOfsset} textAnchor="middle">
          Population
        </text>
        <AxisBottom xscale={xscale} innerheight={innerheight} tickFormat={xAxisTickFormat}/>
        <AxisLeft yscale={yscale} />
        <Marks
          xscale={xscale}
          yscale={yscale}
          data={data}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
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
