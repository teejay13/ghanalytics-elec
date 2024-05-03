export const AxisBottom = ({xscale,innerheight,tickFormat}) => {
    return (
    xscale.ticks().map((tickvalue) => (
      <g className="tick" key={tickvalue} transform={`translate(${xscale(tickvalue)},0)`}>
        <line y2={innerheight}  />
        <text
          dy=".71em"
          style={{ textAnchor: "middle" }}
          y={innerheight + 3}
        >
          {tickFormat(tickvalue)}
        </text>
      </g>
    )))
  }