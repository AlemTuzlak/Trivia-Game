import React, { FC } from "react";

interface ProgressBarProps {
  width?: number;
  size: "large" | "medium" | "small";
  color?: "green";
  progressString: string;
  className?: string;
  testId?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({
  width = 0,
  size,
  color = "green",
  progressString,
  className,
  testId,
}) => {
  return (
    <div
      data-testid={`${testId}`}
      className={`progress-bar ${className ?? ""} progress-bar--${size}`}
    >
      <div
        data-testid={`${testId}-bar`}
        style={{ width: `${width}%` }}
        className={`progress-bar__main progress-bar__main--${color} progress-bar__main--${size}`}
      >
        <div
          className={`progress-bar__main__tracker progress-bar__main__tracker--${size}`}
        />
        <div
          data-testid={`${testId}-string`}
          className={`progress-bar__main__progress progress-bar__main__progress--${size}`}
        >
          {progressString}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
