"use client";

import { useState, useCallback } from "react";

export interface GameEvent {
  type: "puzzle_solved" | "typing" | "game_start" | "game_over";
  payload: Record<string, unknown>;
  timestamp: string;
}

export function useGameEvents(roomCode: string) {
  const [events, setEvents] = useState<GameEvent[]>([]);
  const [typingPlayers, setTypingPlayers] = useState<string[]>([]);

  const sendEvent = useCallback((type: GameEvent["type"], payload: Record<string, unknown>) => {
    const event: GameEvent = {
      type,
      payload,
      timestamp: new Date().toISOString(),
    };
    setEvents((prev) => [...prev, event]);
  }, []);

  return { events, typingPlayers, sendEvent, setTypingPlayers };
}
