"use client"

import { Camera, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  title: string;
  points: number;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ChallengeModal({ open, title, points, onConfirm, onClose }: Props) {
  const [stage, setStage] = useState<'ready' | 'capturing' | 'success'>('ready');

  useEffect(() => {
    if (open) {
      setStage('ready');
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (stage !== 'capturing') return;

    const timer = window.setTimeout(() => {
      setStage('success');
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'success') return;

    const timer = window.setTimeout(() => {
      onConfirm();
    }, 700);

    return () => window.clearTimeout(timer);
  }, [stage, onConfirm]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative m-4 w-full max-w-xl overflow-hidden rounded-[28px] bg-white/95 p-6 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Validation photo</p>
            <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
          </div>
          <button className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
          {stage === 'ready' && (
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-black/5 px-4 py-20 text-center">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/70" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/70" />
                <div className="absolute inset-0 rounded-[20px] border border-dashed border-white/50" />
                <div className="relative z-10 flex flex-col items-center gap-3 text-slate-700">
                  <Camera className="h-12 w-12 text-emerald-600" />
                  <p className="text-sm">Cadre de visée prêt. Simule la capture de ton défi.</p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
                    Sélecteur d'image fictif
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-inner">
                <p>Après capture, ton défi sera analysé par notre IA locale.</p>
                <p className="mt-2 font-semibold">Gagne <span className="text-emerald-600">+{points} pts</span> si la photo est validée.</p>
              </div>
            </div>
          )}

          {stage === 'capturing' && (
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
                <div className="h-20 w-20 animate-pulse rounded-full bg-emerald-600/20" />
              </div>
              <p className="text-lg font-semibold text-slate-800">Analyse de la photo par IA...</p>
              <p className="text-sm text-slate-500">Merci de patienter pendant que nous vérifions ton défi citoyen.</p>
            </div>
          )}

          {stage === 'success' && (
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">Succès confirmé !</h4>
              <p className="text-sm text-slate-600">Ton défi a été validé et tes points ont été ajoutés.</p>
              <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-700">+{points} pts gagnés</div>
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700" onClick={onClose}>
            Fermer
          </button>
          <button
            className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            onClick={() => setStage('capturing')}
            disabled={stage !== 'ready'}
          >
            Déclencher
          </button>
        </div>
      </div>
    </div>
  );
}
