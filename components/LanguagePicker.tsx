"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { LANGUAGES, type Language } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LanguagePickerProps {
  value: string;
  onChange: (code: string) => void;
  disabledCodes?: string[];
  compact?: boolean;
}

export default function LanguagePicker({
  value,
  onChange,
  disabledCodes = [],
  compact = false,
}: LanguagePickerProps) {
  const [open, setOpen] = useState(false);
  const selected = LANGUAGES.find((l) => l.code === value);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-overlay bg-surface/80 text-ghost-100 transition-all",
          "hover:border-neon-cyan/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]",
          compact && "px-3 py-1.5 text-sm"
        )}
      >
        {selected ? (
          <>
            <span className="text-lg">{selected.flag}</span>
            {!compact && <span className="font-medium">{selected.nativeName}</span>}
          </>
        ) : (
          <>
            <Globe className="w-4 h-4" />
            <span>Select Language</span>
          </>
        )}
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-72 max-h-80 overflow-y-auto rounded-xl bg-deep border-2 border-overlay shadow-2xl"
          >
            {LANGUAGES.map((lang) => {
              const isDisabled = disabledCodes.includes(lang.code);
              const isSelected = value === lang.code;

              return (
                <button
                  key={lang.code}
                  disabled={isDisabled}
                  onClick={() => {
                    onChange(lang.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all",
                    "hover:bg-elevated/80",
                    isSelected && "bg-neon-cyan/10 border-l-2 border-l-neon-cyan",
                    isDisabled && "opacity-30 cursor-not-allowed"
                  )}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-ghost-100 text-sm">{lang.nativeName}</div>
                    <div className="text-xs text-ghost-400">{lang.name} · {lang.region}</div>
                  </div>
                  {isDisabled && (
                    <span className="text-xs text-neon-red font-medium">TAKEN</span>
                  )}
                  {isSelected && (
                    <span className="text-neon-cyan text-sm">●</span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
