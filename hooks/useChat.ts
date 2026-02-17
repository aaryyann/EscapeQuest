"use client";

import { useState, useCallback } from "react";

export interface ChatMessage {
  id: string;
  player_id: string | null;
  player_name: string;
  player_language: string;
  original_text: string;
  source_locale: string;
  translations: Record<string, string>;
  is_system: boolean;
  translation_failed: boolean;
  created_at: string;
}

export function useChat(roomId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sending, setSending] = useState(false);

  const sendMessage = useCallback(
    async (text: string, playerId: string, sourceLang: string) => {
      setSending(true);
      const newMsg: ChatMessage = {
        id: crypto.randomUUID(),
        player_id: playerId,
        player_name: "You",
        player_language: sourceLang,
        original_text: text,
        source_locale: sourceLang,
        translations: { [sourceLang]: text },
        is_system: false,
        translation_failed: false,
        created_at: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, newMsg]);
      setSending(false);
    },
    []
  );

  const addSystemMessage = useCallback((text: string) => {
    const sysMsg: ChatMessage = {
      id: crypto.randomUUID(),
      player_id: null,
      player_name: "System",
      player_language: "en",
      original_text: text,
      source_locale: "en",
      translations: { en: text },
      is_system: true,
      translation_failed: false,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, sysMsg]);
  }, []);

  return { messages, sending, sendMessage, addSystemMessage, setMessages };
}
