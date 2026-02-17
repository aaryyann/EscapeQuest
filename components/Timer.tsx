"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { formatTime, getTimerClass } from "@/lib/utils";

interface TimerProps {
  timeRemaining: number;
}

export default function Timer({ timeRemaining }: TimerProps) {
  const timerClass = getTimerClass(timeRemaining);
  const isUrgent = timeRemaining <= 30;

  return (
    <motion.div
      className="flex items-center gap-2"
      animate={isUrgent ? { scale: [1, 1.05, 1] } : {}}
      transition={{ repeat: Infinity, duration: 0.5 }}
    >
      <Clock className={`w-5 h-5 ${timerClass}`} />
      <span
        className={`font-mono text-2xl font-bold tracking-wider ${timerClass}`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {formatTime(timeRemaining)}
      </span>
    </motion.div>
  );
}
