'use client';

import { useEffect, useMemo, useState } from 'react';
import { Clock3, MapPin } from 'lucide-react';

const PLACES = [
  {
    id: 'dakar1',
    zone: 'Dakar',
    category: 'Fan Zones',
    title: "Stade Iba Mar Diop - Fan Zone",
    schedule: '16h00 - 23h00',
    location: 'Stade Iba Mar Diop',
    specialties: ['Thieboudienne', 'Pastels'],
    transport: ['À pied', 'TER express'],
    points: 80,
  },
  {
    id: 'diam1',
    zone: 'Diamniadio',
    category: 'Fan Zones',
    title: 'Dakar Arena - Village sportif',
    schedule: '10h00 - 22h00',
    location: 'Diamniadio',
    specialties: ['Cafés locaux', 'Artisanat'],
    transport: ['Navette propre', 'TER express'],
    points: 100,
  },
  {
    id: 'saly1',
    zone: 'Saly',
    category: 'Sports de Plage',
    title: 'Saly Beach Activities',
    schedule: '09h00 - 18h00',
    location: 'Saly Beach',
    specialties: ['Fruits de mer', 'Grillades'],
    transport: ['Navette propre'],
    points: 120,
  },
  {
    id: 'food1',
    zone: 'Dakar',
    category: 'Street Food',
    title: 'Corniche Ouest - Pastels & Café Touba',
    schedule: '08h00 - 20h00',
    location: 'Corniche Ouest',
    specialties: ['Pastels', 'Café Touba'],
    transport: ['À pied'],
    points: 60,
  },
];

const ZONES = ['Tous', 'Dakar', 'Diamniadio', 'Saly'];
const CATEGORIES = ['Fan Zones', 'Street Food', 'Sports de Plage', 'Artisanat'];

const MAP_POINTS = [
  { id: 'Dakar', x: 180, y: 175 },
  { id: 'Diamniadio', x: 470, y: 105 },
  { id: 'Saly', x: 650, y: 200 },
];

export default function CartePage() {
  const [zone, setZone] = useState('Tous');
  const [category, setCategory] = useState('Toutes catégories');
  const [selected, setSelected] = useState<typeof PLACES[0] | null>(null);
  const [visible, setVisible] = useState(true);

  const filtered = useMemo(() => {
    return PLACES.filter((place) => (zone === 'Tous' ? true : place.zone === zone)).filter(
      (place) => (category === 'Toutes catégories' ? true : place.category === category)
    );
  }, [zone, category]);

  useEffect(() => {
    setVisible(false);
    const timer = window.setTimeout(() => setVisible(true), 50);
    return () => window.clearTimeout(timer);
  }, [zone, category]);

  return (
    <div className="space-y-8 pb-28 md:pb-0">
      <section className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Carte découverte</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Explore les zones officielles JOJ</h1>
            <p className="mt-3 text-slate-600">Filtre par zone officielle et catégorie pour trouver ton prochain lieu à visiter.</p>
          </div>

          <div className="mt-3 grid gap-2 sm:flex sm:items-center">
            <div className="flex flex-wrap gap-2">
              {ZONES.map((z) => (
                <button
                  key={z}
                  onClick={() => setZone(z)}
                  className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                    zone === z ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  {z}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('Toutes catégories')}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  category === 'Toutes catégories' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Toutes catégories
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                    category === c ? 'bg-yellow-400 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-yellow-50'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 space-y-4">
            <div className="h-64 rounded-[28px] border border-slate-200 bg-gradient-to-b from-sky-50 to-white p-4 shadow-inner">
              <div className="relative h-full overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-100 via-white to-slate-50 p-4">
                <svg viewBox="0 0 820 320" className="h-full w-full">
                  <defs>
                    <linearGradient id="coastline" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#d8f1ff" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M30 270 C120 230 220 250 340 210 C380 195 470 145 520 155 C600 175 700 100 780 120"
                    fill="none"
                    stroke="url(#coastline)"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 280 C120 250 220 270 340 230 C380 215 470 165 520 175 C600 195 700 130 780 150"
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <g>
                    {MAP_POINTS.map((point) => (
                      <g key={point.id} className="cursor-pointer" onClick={() => setZone(point.id)}>
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="14"
                          fill={zone === point.id ? '#16a34a' : '#0f766e'}
                          opacity="0.95"
                        />
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="22"
                          fill="none"
                          stroke={zone === point.id ? '#a7f3d0' : '#6ee7b7'}
                          strokeWidth="2"
                          className="animate-ping"
                        />
                        <text x={point.x + 28} y={point.y + 6} className="text-[14px] font-semibold fill-slate-800">
                          {point.id}
                        </text>
                      </g>
                    ))}
                  </g>
                </svg>
                <div className="pointer-events-none absolute inset-x-0 bottom-4 mx-auto flex w-full max-w-md items-center justify-between px-6 text-xs text-slate-500">
                  <span>Tap sur une zone pour filtrer</span>
                  <span>{zone === 'Tous' ? 'Toutes les zones' : zone}</span>
                </div>
              </div>
            </div>

            <div className={`grid gap-4 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              {filtered.map((p) => (
                <article key={p.id} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{p.category} · {p.zone}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{p.location} · {p.schedule}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">+{p.points} pts</div>
                    <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20" onClick={() => setSelected(p)}>
                      Détails
                    </button>
                  </div>
                </article>
              ))}
              {filtered.length === 0 && (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-600">
                  Aucun lieu ne correspond à ce filtre. Essaie une autre zone ou catégorie.
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold">Zones officielles</h4>
              </div>
              <p className="mt-3 text-sm text-slate-600">Dakar, Diamniadio et Saly sont les hubs du programme JOJ. Clique sur une zone ou sélectionne une catégorie.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-slate-500" />
                <h4 className="font-semibold">Horaires & transport</h4>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Navette propre disponible à Diamniadio.</li>
                <li>Stade Iba Mar Diop propose des Fan Zones nocturnes.</li>
                <li>Saly reste le meilleur spot plage & sports de plage.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-40 flex items-end justify-center md:items-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setSelected(null)} />
          <div className="relative m-4 w-full max-w-2xl rounded-[26px] bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{selected.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{selected.location} — {selected.schedule}</p>
              </div>
              <button className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700" onClick={() => setSelected(null)}>
                Fermer
              </button>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Spécialités</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.specialties.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">{item}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Transport</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.transport.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1 text-sm text-slate-700">{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 rounded-3xl bg-emerald-600/10 p-4 text-sm text-emerald-800">
              Recommandé pour les visiteurs cherchant une expérience authentique et durable.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
