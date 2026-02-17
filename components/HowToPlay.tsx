"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Users, MessageSquare, Puzzle, Globe } from "lucide-react";

interface HowToPlayProps {
  open: boolean;
  onClose: () => void;
}

const steps = [
  {
    icon: Users,
    title: "Create or Join",
    description:
      "Create a room and share the 6-character code, or join with a code. Each player picks a different language.",
    color: "text-neon-cyan",
  },
  {
    icon: Globe,
    title: "Explore the Room",
    description:
      "Click on objects in the haunted mansion. Each player sees unique clues in their own language.",
    color: "text-neon-green",
  },
  {
    icon: MessageSquare,
    title: "Chat & Collaborate",
    description:
      "Share what you find via chat. Messages are auto-translated to every player's language in real-time.",
    color: "text-neon-purple",
  },
  {
    icon: Puzzle,
    title: "Solve & Escape",
    description:
      "Combine clues from all players to solve 4 puzzles. Escape the mansion before the 5-minute timer runs out!",
    color: "text-neon-amber",
  },
];

export default function HowToPlay({ open, onClose }: HowToPlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative w-full max-w-lg card-gaming p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-ghost-400 hover:text-ghost-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2
              className="text-xl font-bold text-neon-cyan text-glow-cyan mb-6 text-center"
              style={{ fontFamily: "var(--font-display)", fontSize: "14px" }}
            >
              HOW TO PLAY
            </h2>

            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-elevated flex items-center justify-center ${step.color}`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ghost-100 mb-1">{step.title}</h3>
                    <p className="text-sm text-ghost-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="btn-gaming btn-primary w-full mt-6 text-sm"
            >
              Got it!
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
