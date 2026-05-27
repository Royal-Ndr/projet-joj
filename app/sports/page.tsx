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
  {
    id: 'breakdance',
    label: 'Breakdance sur la plage de Saly',
    tags: ['plage', 'style'],
    desc: 'Expression, rythme et show sur la plage de Saly.',
    venue: 'Plage de Saly',
    icon: '🕺',
  },
  {
    id: 'lutte',
    label: 'Lutte Sénégalaise au Stade Iba Mar Diop',
    tags: ['stade', 'duel'],
    desc: 'Combat tactique et spectacle au cœur de Dakar.',
    venue: 'Stade Iba Mar Diop',
    icon: '🤼',
  },
  {
    id: 'basket',
    label: 'Basket 3x3 sur la Corniche',
    tags: ['stade', 'equipe'],
    desc: 'Rapide, collectif et urbain.',
    venue: 'Corniche Ouest',
    icon: '🏀',
  },
  {
    id: 'surf',
    label: 'Surf aux Almadies',
    tags: ['plage', 'vitesse'],
    desc: 'Glisse et maîtrise des vagues dans un décor mythique.',
    venue: 'Almadies',
    icon: '🏄',
  },
];

export default function SportsPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [calendarStatus, setCalendarStatus] = useState('');

  const currentStep = Object.keys(answers).length;
  const progress = Math.round((currentStep / questions.length) * 100);
  const stepLabel = currentStep === 0 ? 'Commence ta découverte' : currentStep === questions.length ? 'Résultat trouvé' : 'Question suivante';

  function selectAnswer(key: string, value: string) {
    setAnswers((s) => ({ ...s, [key]: value }));
  }

  function resetQuiz() {
    setAnswers({});
    setCalendarStatus('');
  }

  const result = useMemo(() => {
    if (currentStep < questions.length) return null;
    const selected = Object.values(answers);
    const scored = profiles.map((profile) => ({
      profile,
      match: profile.tags.reduce((count, tag) => (selected.includes(tag) ? count + 1 : count), 0),
    }));
    scored.sort((a, b) => b.match - a.match);
    return scored[0].profile;
  }, [answers, currentStep]);

  function addToCalendar() {
    if (!result) return;
    const title = result.label;
    const description = `JOJ Dakar 2026 – ${result.venue}`;
    const start = '20261031T090000';
    const end = '20261113T230000';
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${title}\nDESCRIPTION:${description}\nDTSTART:${start}\nDTEND:${end}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}.ics`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 3000);
    setCalendarStatus('Événement ajouté à ton calendrier !');
  }

  function shareResult() {
    if (!result) return;
    const text = `J'ai découvert mon sport idéal: ${result.label} aux JOJ Dakar 2026 (31 oct - 13 nov).`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    if (navigator.share) {
      navigator.share({ title: 'Mon Sport JOJ', text }).catch(() => window.open(whatsappUrl, '_blank'));
      return;
    }

    window.open(whatsappUrl, '_blank');
  }

  return (
    <div className="space-y-8 pb-28 md:pb-0">
      <section className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Sport-Matcher</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Quel sport incarne ton énergie ?</h1>
            <p className="mt-3 text-slate-600">Trois questions rapides pour trouver le sport fait pour toi aux JOJ (31 oct - 13 nov 2026).</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm uppercase text-slate-500">Progression</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-semibold text-slate-900">{currentStep} / {questions.length}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{progress}%</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-emerald-600 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-3 text-sm text-slate-500">{stepLabel}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg">
          {result ? (
            <div className="space-y-6">
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">Ayo l'athlète</p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-900">{result.label}</h2>
                  </div>
                  <div className="text-5xl">🦁</div>
                </div>
                <p className="mt-4 text-slate-700">{result.desc}</p>
                <p className="mt-3 text-sm text-slate-600">Lieu : {result.venue}</p>
                <p className="text-sm text-slate-600">Dates des épreuves : 31 oct - 13 nov 2026</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Style</p>
                  <p className="mt-2 font-semibold text-slate-900">{answers.q2 === 'equipe' ? 'En équipe' : answers.q2 === 'duel' ? 'Face à face' : 'Expression'}</p>
                </div>
                <div className="rounded-3xl border bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Terrain</p>
                  <p className="mt-2 font-semibold text-slate-900">{answers.q1 === 'plage' ? 'Plage' : answers.q1 === 'stade' ? 'Stade' : 'Salle'}</p>
                </div>
                <div className="rounded-3xl border bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Super-pouvoir</p>
                  <p className="mt-2 font-semibold text-slate-900">{answers.q3}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button onClick={addToCalendar} className="rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> Ajouter à mon calendrier
                </button>
                <button onClick={shareResult} className="rounded-3xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 inline-flex items-center gap-2">
                  <Share2 className="h-4 w-4" /> Partager sur WhatsApp
                </button>
                <button onClick={resetQuiz} className="rounded-3xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Recommencer</button>
              </div>

              {calendarStatus && <p className="rounded-3xl bg-emerald-100 px-4 py-3 text-sm text-emerald-800">{calendarStatus}</p>}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Question {currentStep + 1} / {questions.length}</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">{questions[currentStep]?.question}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {questions[currentStep]?.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => selectAnswer(questions[currentStep].key, option.value)}
                    className="rounded-3xl border border-slate-200 bg-white p-6 text-left text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="rounded-3xl border bg-white p-6 shadow-sm">
          <h4 className="font-semibold text-slate-900">Tendance Dakar</h4>
          <p className="mt-3 text-sm text-slate-600">Le Sport‑Matcher aide à choisir un sport aligné avec ton caractère et l'ambiance des JOJ.</p>
        </aside>
      </section>
    </div>
  );
}
