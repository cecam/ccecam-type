import { useEffect, useState } from "react";
import { texts } from "../utils/texts";

const MAX_TIME = 30;

export const useGame = () => {
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");

  const startGame = () => {
    setTime(MAX_TIME);
    setText(texts[Math.floor(Math.random() * texts.length)]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);
  }, []);
};
