"use client";

import { useState, useEffect } from "react";

export interface RoomData {
  id: string;
  code: string;
  theme: string;
  status: "waiting" | "playing" | "completed" | "abandoned";
  current_puzzle: number;
  host_id: string;
  started_at: string | null;
  ended_at: string | null;
}

export interface PlayerData {
  id: string;
  name: string;
  language: string;
  player_index: number;
  is_host: boolean;
  clues_found: number;
}

export function useRoom(roomCode: string) {
  const [room, setRoom] = useState<RoomData | null>(null);
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [roomCode]);

  return { room, players, loading, setRoom, setPlayers };
}
