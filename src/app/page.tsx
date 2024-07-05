"use client";
import { Timer } from "../components/Timer";
import { Header } from "../components/Header";
import { useGame } from "@/hooks/useGame";
import Game from "@/components/Game";

export default function Home() {
  const { time, text, isPlaying, startGame } = useGame();
  return (
    <div>
      <Header />
      {isPlaying ? (
        <div className="px-10 py-5">
          <Timer time={time} />
          <Game text={text} />
        </div>
      ) : (
        <div className="px-10 py-5">
          <button onClick={startGame}>Start Game</button>
        </div>
      )}
    </div>
  );
}
