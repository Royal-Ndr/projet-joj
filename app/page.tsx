"use client";
import ScorePanel from "../components/ScorePanel";
import ChallengeCard from "../components/ChallengeCard";
import Confetti from "../components/Confetti";
import { Sparkles } from "lucide-react";
import { useScore } from "../components/ScoreProvider";
import { useState } from "react";

const challenges = [
  { title: "Nettoyage de la plage de Ngor", points: 150 },
  { title: "S'initier à la lutte sénégalaise au Stade Iba Mar Diop", points: 100 },
  { title: "Tri sélectif à la Fan Zone de la Corniche Ouest", points: 120 },
];

export default function HomePage() {
  const { addPoints } = useScore();
  const [celebrate, setCelebrate] = useState(false);

  function handleValidate(points: number) {
    addPoints(points);
    setCelebrate(true);
  }

  return (
    <div className="space-y-8 pb-28 md:pb-0">
      <section className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-yellow-600">
              <Sparkles className="h-4 w-4" /> Dakar 2026
            </p>
            <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">Deviens le Gaindé des JOJ 2026</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-700">Engage-toi dans des défis citoyens, découvre la culture et récupère des points pour ton profil Gaindé.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/60 p-4 shadow-sm">
              <ScorePanel />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-1">
        <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">Défis interactifs Sénégalais</p>
              <h2 className="mt-2 text-2xl font-semibold">Accomplis un défi aujourd'hui</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {challenges.map((c) => (
              <ChallengeCard key={c.title} title={c.title} points={c.points} onValidate={handleValidate} />
            ))}
          </div>
        </div>
      </section>

      <Confetti trigger={celebrate} />
    </div>
  );
}
