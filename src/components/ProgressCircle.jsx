import { useEffect, useRef, useState } from "react";

const ProgressCircle = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
  textSize,
}) => {
  
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  // Getting center of circlle
  const center = size / 2;
  const redius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * redius; 

  // Calculating offset
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    let my = progressOffset - circumference;
    setOffset(my);
    circleRef.current.style = `transition: stroke-dashoffset 805ms ease-in-out`;
  }, [circumference, offset, progress, setOffset]);


  return (
    <div className="my-auto">
      <svg className="mx-auto" width={size} height={size}>
        <circle
          className="svg-circle-bg fill-none"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={redius}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          className="svg-circle fill-none"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={redius}
          strokeWidth={strokeWidth + 0.4}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        ></circle>
        <text
          className="svg-circle-text font-bold"
          style={{ fontSize: `${textSize}`, fill:"#fff"}}
          x={`${center}`}
          y={`${center + 6}`}
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressCircle;
