"use client";

import { useState } from "react";

export interface PresencePlayer {
  playerId: string;
  playerName: string;
  language: string;
  online: boolean;
}

export function usePresence(roomCode: string) {
  const [onlinePlayers, setOnlinePlayers] = useState<PresencePlayer[]>([]);

  return { onlinePlayers, setOnlinePlayers };
}
