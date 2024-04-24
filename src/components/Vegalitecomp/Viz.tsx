import { vl } from "vega-lite-api";

export const viz = vl
  .markLine()
  .encode(vl.x().feildQ("acceleration"), vl.y().feildQ("horsepower"));
