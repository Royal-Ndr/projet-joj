"use client"
import { useState } from "react";
import ChallengeModal from "./ChallengeModal";

type Props = {
  title: string;
  points: number;
  onValidate: (points: number) => void;
};

export default function ChallengeCard({ title, points, onValidate }: Props) {
  const [open, setOpen] = useState(false);

  function handleConfirm() {
    onValidate(points);
    setOpen(false);
  }

  return (
    <article className="rounded-lg border border-white/40 bg-white/60 p-4 shadow-sm backdrop-blur-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">Points : <strong>{points}</strong></p>
      <div className="mt-3 flex items-center gap-2">
        <button className="rounded-md bg-emerald-600 px-3 py-1 text-white" onClick={() => setOpen(true)}>Valider mon défi</button>
      </div>
      <ChallengeModal open={open} title={title} points={points} onConfirm={handleConfirm} onClose={() => setOpen(false)} />
    </article>
  );
}
