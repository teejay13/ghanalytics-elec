/* eslint-disable @typescript-eslint/no-explicit-any */
import { csv } from "d3";
import { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/teejay13/b9acd5fe0db96c9a2137a302c7fc34ee/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";


export const UseData = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d: { [key: string]: any }) => {
      d.population = +d["2020"] * 1000;
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);
  
  return data
}