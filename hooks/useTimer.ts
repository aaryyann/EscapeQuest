"use client";

import { useState, useEffect, useCallback } from "react";
import { GAME_TIME_LIMIT } from "@/lib/constants";

export function useTimer(startedAt: string | null, isPlaying: boolean) {
  const [timeRemaining, setTimeRemaining] = useState(GAME_TIME_LIMIT);

  useEffect(() => {
    if (!startedAt || !isPlaying) return;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - new Date(startedAt).getTime()) / 1000);
      const remaining = Math.max(0, GAME_TIME_LIMIT - elapsed);
      setTimeRemaining(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startedAt, isPlaying]);

  const isExpired = timeRemaining <= 0;

  return { timeRemaining, isExpired };
}

export function useMockTimer(autoStart = false) {
  const [timeRemaining, setTimeRemaining] = useState(GAME_TIME_LIMIT);
  const [isRunning, setIsRunning] = useState(autoStart);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          setIsRunning(false);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setTimeRemaining(GAME_TIME_LIMIT);
    setIsRunning(false);
  }, []);

  return { timeRemaining, isRunning, isExpired: timeRemaining <= 0, start, pause, reset };
}
