export const Marks = ({
  data,
  xscale,
  yscale,
  xValue,
  yValue,
  tooltipFormat,
}) => {
  return data.map((d) => (
    <rect
      className="mark"
      key={xValue(d)}
      x={0}
      y={yscale(yValue(d))}
      width={xscale(xValue(d))}
      height={yscale.bandwidth()}
    >
      <title>{yValue(d) + ": " + tooltipFormat(xValue(d))}</title>
    </rect>
  ));
};
