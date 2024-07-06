import { useEffect, useState, useRef, useCallback } from "react";
import { texts } from "../utils/texts";

const MAX_TIME = 30;

export const useGame = () => {
  const [time, setTime] = useState(0);
  const wordsRef = useRef<string[][]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = useCallback(() => {
    setIsPlaying(true);
    setTime(MAX_TIME);
    const text = texts[Math.floor(Math.random() * texts.length)];
    handleWords(text);
  }, []);

  const handleWords = (text: string) => {
    const words = text.split(" ").map((word) => word.split(""));
    wordsRef.current = words;
    console.log(wordsRef.current);
  };
  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    if (time === 0) {
      setIsPlaying(false);
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, time]);

  return { time, isPlaying, wordsRef, startGame };
};
