"use client"
import { useEffect } from "react";

type Props = {
  open: boolean;
  title: string;
  points: number;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ChallengeModal({ open, title, points, onConfirm, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative m-4 w-full max-w-xl rounded-2xl bg-white/90 p-6 backdrop-blur-md shadow-xl">
        <h3 className="text-lg font-semibold">Valider : {title}</h3>
        <p className="mt-2 text-sm text-gray-600">Simulez la prise de photo et confirmez votre défi pour gagner <strong>{points} pts</strong>.</p>
        <div className="mt-4 flex gap-3">
          <button className="ml-auto rounded-lg bg-emerald-600 px-4 py-2 text-white" onClick={onConfirm}>Confirmer</button>
          <button className="rounded-lg border px-4 py-2" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </div>
  );
}
