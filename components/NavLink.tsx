import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function NavLink({ href, label, icon: IconComponent, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition-colors ${
        active ? 'bg-gainde-emerald text-white shadow-lg shadow-gainde-emerald/20' : 'text-slate-700 hover:bg-slate-100'
      }`}
    >
      <IconComponent className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}
