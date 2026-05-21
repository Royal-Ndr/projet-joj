interface BadgeProps {
  label: string;
  description: string;
}

export default function Badge({ label, description }: BadgeProps) {
  return (
    <div className="rounded-3xl border border-gainde-emerald/20 bg-white/80 px-4 py-3 shadow-sm shadow-slate-200">
      <p className="text-xs uppercase tracking-[0.24em] text-gainde-emerald">Badge</p>
      <h3 className="mt-1 text-sm font-semibold text-slate-900">{label}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </div>
  );
}
