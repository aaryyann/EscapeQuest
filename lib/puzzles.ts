import puzzleData from "@/data/haunted-mansion.json";

export interface PuzzleClue {
  zone: string;
  text_key: string;
}

export interface Puzzle {
  number: number;
  name: string;
  type: "code_entry" | "color_sequence" | "text_answer";
  digits?: number;
  answer: string | string[];
  target_zone: string;
  shared_text_key?: string;
  clues: Record<string, PuzzleClue>;
}

export function getPuzzle(puzzleNumber: number): Puzzle | undefined {
  return puzzleData.puzzles.find((p) => p.number === puzzleNumber) as Puzzle | undefined;
}

export function getAllPuzzles(): Puzzle[] {
  return puzzleData.puzzles as Puzzle[];
}

export function getZones(): string[] {
  return puzzleData.zones;
}

export function validateAnswer(puzzle: Puzzle, answer: string): boolean {
  if (puzzle.type === "code_entry") {
    return answer === puzzle.answer;
  }

  if (puzzle.type === "color_sequence") {
    const submitted = answer.toLowerCase().split(",").map((s) => s.trim());
    const correct = puzzle.answer as string[];
    return (
      submitted.length === correct.length &&
      submitted.every((val, i) => val === correct[i])
    );
  }

  if (puzzle.type === "text_answer") {
    return answer.toLowerCase().trim() === (puzzle.answer as string).toLowerCase();
  }

  return false;
}
