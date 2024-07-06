import { FC, memo } from "react";

interface GameProps {
  text: string[][];
}

const Game: FC<GameProps> = ({ text }) => {
  if (text.length === 0) return null;
  return (
    <div>
      {text.map((word, index) => (
        <div key={index} className="flex">
          {word.map((letter, index) => (
            <div key={index} className="px-1">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(Game);
