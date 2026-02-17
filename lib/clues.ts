import { Puzzle, PuzzleClue } from "./puzzles";

export interface PlayerClue {
  zone: string;
  textKey: string;
  text: string;
  discovered: boolean;
}

export function getCluesForPlayer(
  puzzle: Puzzle,
  playerIndex: number,
  totalPlayers: number
): PuzzleClue[] {
  const clueKeys = Object.keys(puzzle.clues);
  return clueKeys
    .filter((key) => parseInt(key) % totalPlayers === playerIndex)
    .map((key) => puzzle.clues[key]);
}

export function getZonesWithClues(
  puzzle: Puzzle,
  playerIndex: number,
  totalPlayers: number
): string[] {
  const clues = getCluesForPlayer(puzzle, playerIndex, totalPlayers);
  return clues.map((c) => c.zone);
}
