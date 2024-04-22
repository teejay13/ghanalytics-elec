import { FC } from "react";
interface BackgroundCircleProps {
  radius: number;
  strokeWidth?: number;
}

export const BackgroundCircle: FC<BackgroundCircleProps> = ({
  radius,
  strokeWidth,
}) => (
  <circle r={radius} fill="yellow" stroke="black" strokeWidth={strokeWidth} />
);
