import { FC } from "react";

interface EyesProp {
    eyeOffsetX: number,
    eyeOffsetY: number,
    eyeRadius:number
}

export const Eyes:FC<EyesProp> = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    <>
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    </>
  );