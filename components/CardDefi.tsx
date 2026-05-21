import { CheckCircle2, Sparkles } from 'lucide-react';

interface CardDefiProps {
  title: string;
  description: string;
  location: string;
  points: number;
}

export default function CardDefi({ title, description, location, points }: CardDefiProps) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-warm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Défi</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">{title}</h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gainde-sun/10 text-gainde-sun">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{location}</span>
        <span className="font-semibold text-gainde-emerald">+{points} pts</span>
      </div>
      <button className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-gainde-emerald px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#04663d]">
        <CheckCircle2 className="h-4 w-4" />
        Valider mon défi
      </button>
    </article>
  );
}
