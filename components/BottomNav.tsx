'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MapPin, Cpu } from 'lucide-react';

const iconMap = {
  Home,
  MapPin,
  Cpu,
};

interface NavItem {
  href: string;
  label: string;
  icon: keyof typeof iconMap;
}

export default function BottomNav({ links }: { links: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-lg items-center justify-between rounded-3xl bg-white/95 px-4 py-3 shadow-lg shadow-slate-200">
      {links.map((item) => {
        const Icon = iconMap[item.icon];
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-2 text-[11px] font-semibold transition ${
              active ? 'text-gainde-emerald' : 'text-slate-500 hover:text-gainde-emerald'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
