"use client";
import { Timer } from "../components/Timer";
import { Header } from "../components/Header";
import { useGame } from "@/hooks/useGame";

export default function Home() {
  const { time, isPlaying, startGame } = useGame();
  return (
    <div>
      <Header />
      {isPlaying ? (
        <div className="px-10 py-5">
          <Timer time={time} />
        </div>
      ) : (
        <div className="px-10 py-5">
          <button onClick={startGame}>Start Game</button>
        </div>
      )}
    </div>
  );
}
