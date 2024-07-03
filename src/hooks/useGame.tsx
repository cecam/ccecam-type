import { useEffect, useState } from "react";
import { texts } from "../utils/texts";

const MAX_TIME = 30;

export const useGame = () => {
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    setIsPlaying(true);
    setTime(MAX_TIME);
    setText(texts[Math.floor(Math.random() * texts.length)]);
  };

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    if (isPlaying && time === 0) {
      setIsPlaying(false);
      setText(texts[Math.floor(Math.random() * texts.length)]);
    }

    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, time]);

  return { time, text, isPlaying, startGame };
};
