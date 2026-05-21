'use client';

import { usePathname } from 'next/navigation';
import { Home, MapPin, Cpu } from 'lucide-react';
import Link from 'next/link';

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

export default function SideNav({ links }: { links: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {links.map((item) => {
        const Icon = iconMap[item.icon];
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold transition ${
              active ? 'bg-gainde-emerald text-white shadow-lg shadow-gainde-emerald/20' : 'text-slate-700 hover:bg-slate-50'
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
