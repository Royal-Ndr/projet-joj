import type { Metadata } from 'next';
import './globals.css';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gaindé Zone',
  description:
    'Gaindé Zone — Engagement jeunesse et découverte culturelle JOJ Dakar 2026',
};

const navItems = [
  { href: '/', label: 'Accueil', icon: 'Home' },
  { href: '/carte', label: 'Carte culturelle', icon: 'MapPin' },
  { href: '/sports', label: 'Sport-Matcher', icon: 'Cpu' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Plus+Jakarta+Sans:wght@400;600;700&family=Syne:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-[#FAF8F5] via-white to-[#fffdf8] text-gray-800">
        <div className="relative mx-auto flex min-h-screen max-w-[1400px] overflow-hidden px-4 pb-28 pt-6 md:px-6">
          <aside className="hidden w-72 shrink-0 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-md md:block">
            <div className="mb-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 px-4 py-3 text-white shadow">
              <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center">
                <span className="text-xl font-bold">🦁</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest">Gaindé Zone</p>
                <h1 className="text-lg font-semibold">Jeunesse & Culture</h1>
              </div>
            </div>
            <SideNav links={navItems} />
          </aside>

          <main className="flex-1 md:ml-6">
            <header className="mb-6 flex items-center justify-between gap-4">
              <nav className="hidden items-center gap-4 md:flex">
                <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium transition hover:scale-102">Accueil</Link>
                <Link href="/carte" className="rounded-md px-3 py-2 text-sm font-medium transition hover:scale-102">Carte</Link>
                <Link href="/sports" className="rounded-md px-3 py-2 text-sm font-medium transition hover:scale-102">Sport‑Matcher</Link>
              </nav>
            </header>

            {children}
          </main>

          <div className="fixed inset-x-0 bottom-0 z-50 bg-white/95 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl md:hidden">
            <BottomNav links={navItems} />
          </div>
        </div>
      </body>
    </html>
  );
}
