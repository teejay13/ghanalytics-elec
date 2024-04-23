import { FC, ReactNode, useRef } from "react";

interface FaceContainerProps {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  children: ReactNode;
}

export const FaceContainer: FC<FaceContainerProps> = ({
  children,
  width,
  height,
  centerX,
  centerY,
}) => {
    const ref = useRef<SVGSVGElement>(null);
    return (
  <svg ref={ref} width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>{children}</g>
  </svg>
)};
