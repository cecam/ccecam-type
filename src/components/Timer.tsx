import { FC } from "react";

interface TimerProps {
  time: number;
}

export const Timer: FC<TimerProps> = ({ time }) => {
  return (
    <div className="px-10 py-5">
      <p>{time}</p>
    </div>
  );
};
