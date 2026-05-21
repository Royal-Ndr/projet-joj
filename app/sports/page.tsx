'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, Share2 } from 'lucide-react';

const questions = [
  {
    key: 'q1',
    question: "Ton terrain d'expression préféré ?",
    options: [
      { value: 'plage', label: 'Plage et Océan 🌊' },
      { value: 'stade', label: 'Stade et Piste 🏃‍♂️' },
      { value: 'salle', label: 'Salle et Ambiance 🏀' },
    ],
  },
  {
    key: 'q2',
    question: "Ton style d'effort ?",
    options: [
      { value: 'equipe', label: 'En équipe soudée 🤝' },
      { value: 'duel', label: 'Face à face tactique 🤺' },
      { value: 'style', label: 'Expression et style 🕺' },
    ],
  },
  {
    key: 'q3',
    question: "Ton super-pouvoir ?",
    options: [
      { value: 'endurance', label: "L'endurance du désert 🐪" },
      { value: 'vitesse', label: 'La vitesse du vent 💨' },
      { value: 'force', label: 'La force sacrée 🦁' },
    ],
  },
];

const profiles = [
  { id: 'surf', label: 'Surf aux Almadies', tags: ['plage', 'duel', 'vitesse'], desc: 'Glisse et maîtrise des vagues.', icon: '🏄' },
  { id: 'basket', label: 'Basket 3x3', tags: ['stade', 'equipe', 'vitesse'], desc: 'Rapide, urbain et collectif.', icon: '🏀' },
  { id: 'break', label: 'Breakdance', tags: ['salle', 'style', 'vitesse'], desc: 'Expression et show pour les fans.', icon: '🕺' },
  { id: 'wrestle', label: 'Beach Wrestling', tags: ['plage', 'duel', 'force'], desc: 'Combat de plage traditionnel et spectaculaire.', icon: '🤼' },
];

export default function SportsPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const idx = Object.keys(answers).length;

  function selectAnswer(key: string, value: string) {
    setAnswers((s) => ({ ...s, [key]: value }));
  }

  function resetQuiz() {
    setAnswers({});
  }

  const result = useMemo(() => {
    if (Object.keys(answers).length < questions.length) return null;
    const selected = Object.values(answers);
    const score = profiles.map((p) => {
      const match = p.tags.reduce((c, t) => (selected.includes(t) ? c + 1 : c), 0);
      return { p, match };
    });
    score.sort((a, b) => b.match - a.match);
    return score[0].p;
  }, [answers]);

  function addToCalendar() {
    // Provide event info; minimal ICS download
    const title = result?.label ?? 'Évènement JOJ';
    const start = '20261031T090000';
    const end = '20261113T230000';
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${title}\nDTSTART:${start}\nDTEND:${end}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function shareResult() {
    const text = `J'ai découvert mon sport idéal: ${result?.label} aux JOJ Dakar 2026 (31 oct - 13 nov).`;
    try {
      if ((navigator as any).share) {
        await (navigator as any).share({ title: 'Mon Sport JOJ', text });
      } else {
        await navigator.clipboard.writeText(text);
        alert('Texte copié pour partager sur TikTok/WhatsApp');
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="space-y-8 pb-28 md:pb-0">
      <section className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">Sport-Matcher</p>
            <h1 className="mt-3 text-3xl font-semibold">Quel sport incarne ton énergie ?</h1>
            <p className="mt-3 text-gray-700">Trois questions rapides pour trouver le sport fait pour toi aux JOJ (31 oct - 13 nov 2026).</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-sm uppercase text-gray-500">Progression</p>
            <p className="mt-2 text-xl font-semibold">{Object.keys(answers).length} / {questions.length}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg">
          {result ? (
            <div className="space-y-6">
              <div className="rounded-2xl p-6">
                <h2 className="text-2xl font-semibold">Ayo l'athlète — {result.label}</h2>
                <p className="mt-2 text-sm text-gray-700">{result.desc}</p>
                <p className="mt-2 text-sm text-gray-600">Période des JOJ: 31 oct - 13 nov 2026</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border bg-white p-4">
                  <p className="text-xs uppercase text-gray-500">Style</p>
                  <p className="mt-2 font-semibold">{answers.q2 === 'equipe' ? 'En équipe' : answers.q2 === 'duel' ? 'Face à face' : 'Expression'}</p>
                </div>
                <div className="rounded-lg border bg-white p-4">
                  <p className="text-xs uppercase text-gray-500">Terrain</p>
                  <p className="mt-2 font-semibold">{answers.q1 === 'plage' ? 'Plage' : answers.q1 === 'stade' ? 'Stade' : 'Salle'}</p>
                </div>
                <div className="rounded-lg border bg-white p-4">
                  <p className="text-xs uppercase text-gray-500">Super-pouvoir</p>
                  <p className="mt-2 font-semibold">{answers.q3}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={addToCalendar} className="ml-auto rounded-md bg-emerald-600 px-4 py-2 text-white">Ajouter à l'agenda</button>
                <button onClick={shareResult} className="rounded-md border px-4 py-2 inline-flex items-center gap-2"><Share2 /> Partager</button>
                <button onClick={resetQuiz} className="rounded-md border px-4 py-2">Recommencer</button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-2xl p-6">
                <p className="text-sm uppercase text-gray-500">Question {idx + 1} / {questions.length}</p>
                <h2 className="mt-2 text-2xl font-semibold">{questions[idx]?.question}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {questions[idx]?.options.map((opt) => (
                  <button key={opt.value} onClick={() => selectAnswer(questions[idx].key, opt.value)} className="rounded-2xl border bg-white p-4 text-left font-semibold hover:scale-102 transition">
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="rounded-2xl border bg-white p-6">
          <h4 className="font-semibold">Tendance Dakar</h4>
          <p className="mt-3 text-sm text-gray-600">Le Sport‑Matcher aide à choisir un sport aligné avec ton caractère et l'ambiance des JOJ.</p>
        </aside>
      </section>
    </div>
  );
}
