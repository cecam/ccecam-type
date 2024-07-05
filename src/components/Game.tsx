import { FC } from "react";

interface GameProps {
  text: string;
}

const Game: FC<GameProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Game;
