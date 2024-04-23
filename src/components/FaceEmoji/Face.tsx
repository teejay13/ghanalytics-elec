import { FC } from "react";
import { FaceContainer } from "./FaceContainer";
import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";

interface FaceProp {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  strokeWidth: number;
  eyeOffsetX: number;
  eyeOffsetY: number;
  eyeRadius: number;
  mouthRadius: number;
  mouthWidth: number;
}

export const Face: FC<FaceProp> = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthRadius,
  mouthWidth,
}) => {
  

  return (
    <>
      <FaceContainer
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
      >
        <BackgroundCircle
          radius={centerY - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />
        <Eyes
          eyeOffsetX={eyeOffsetX}
          eyeOffsetY={eyeOffsetY}
          eyeRadius={eyeRadius}
        />
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
      </FaceContainer>
    </>
  );
};
