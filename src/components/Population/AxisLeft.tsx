export const AxisLeft = ({ yscale }) => {
  return yscale.domain().map((tickvalue) => (
    <g className="tick">
      <text
        key={tickvalue}
        style={{ textAnchor: "end" }}
        dy=".32em"
        x={-3}
        y={yscale(tickvalue) + yscale.bandwidth() / 2}
      >
        {tickvalue}
      </text>
    </g>
  ));
};
