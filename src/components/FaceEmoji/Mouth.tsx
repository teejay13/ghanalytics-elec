import { FC } from "react";
import { arc } from "d3-shape";

interface MouthProp {
  mouthRadius: number;
  mouthWidth: number;
}

export const Mouth: FC<MouthProp> = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
  return <path d={mouthArc()} />;
};
