"use client"
import { User, Trophy } from "lucide-react";
import { useScore } from "./ScoreProvider";

export default function ScorePanel() {
  const { score, level, addPoints } = useScore();

  return (
    <div className="rounded-2xl bg-white/70 p-4 backdrop-blur-md shadow-lg border border-white/40">
      <div className="flex items-center gap-3">
        <div className="grid h-14 w-14 place-items-center rounded-xl bg-emerald-700 text-white shadow-inner">
          <User size={28} />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-semibold">{level}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Trophy size={16} className="text-yellow-400" />
              <span className="font-mono text-base">{score}</span>
            </div>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/40">
            <div
              className="h-2 rounded-full bg-emerald-600 transition-all duration-500"
              style={{ width: `${Math.min(100, (score % 200) / 2)}%` }}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          className="ml-auto rounded-lg bg-yellow-400 px-3 py-1 text-sm font-semibold transition-transform hover:scale-102"
          onClick={() => addPoints(10)}
          aria-label="Gagner 10 points"
        >
          +10 pts
        </button>
      </div>
    </div>
  );
}
