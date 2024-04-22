import { FC, ReactNode, Ref } from "react"

interface FaceContainerProps {
    width: number,
    height: number,
    centerX: number,
    centerY: number,
    ref: Ref<SVGSVGElement>;
    children: ReactNode;
}

export const FaceContainer:FC<FaceContainerProps> = ({children,width,height,centerX,centerY,ref}) => (
    <svg ref={ref} width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
        {children}
        </g>
    </svg>
  )