'use client';

import { useMemo, useState } from 'react';
import { Clock3, MapPin, Sparkles } from 'lucide-react';

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
const CATEGORIES = ['Tous', 'Fan Zones', 'Street Food', 'Sports de Plage', 'Artisanat'];

export default function CartePage() {
  const [zone, setZone] = useState('Tous');
  const [category, setCategory] = useState('Tous');
  const [selected, setSelected] = useState<typeof PLACES[0] | null>(null);

  const filtered = useMemo(() => {
    return PLACES.filter((p) => (zone === 'Tous' ? true : p.zone === zone)).filter((p) =>
      category === 'Tous' ? true : p.category === category
    );
  }, [zone, category]);

  return (
    <div className="space-y-8 pb-28 md:pb-0">
      <section className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-md">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">Carte découverte</p>
            <h1 className="mt-3 text-3xl font-semibold">Explore les zones officielles JOJ</h1>
            <p className="mt-3 text-gray-700">Filtre par zone officielle et catégorie pour trouver ton prochain lieu à visiter.</p>
          </div>
          <div className="mt-3 grid gap-2 sm:flex sm:items-center">
            <div className="flex gap-2">
              {ZONES.map((z) => (
                <button key={z} onClick={() => setZone(z)} className={`rounded-full px-3 py-2 text-sm font-semibold transition ${zone===z? 'bg-emerald-600 text-white' : 'bg-white border'}`}>
                  {z}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-3 py-2 text-sm font-semibold transition ${category===c? 'bg-yellow-400 text-white' : 'bg-white border'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 space-y-4">
            <div className="h-64 rounded-xl border bg-gradient-to-b from-blue-50 to-white p-4">
              {/* Simple stylized map placeholder */}
              <svg viewBox="0 0 800 300" className="h-full w-full">
                <rect width="100%" height="100%" fill="#fff" rx="16" />
                <g transform="translate(20,20)">
                  <ellipse cx="120" cy="180" rx="220" ry="80" fill="#f8efdf" />
                  <ellipse cx="620" cy="80" rx="140" ry="60" fill="#e9fdf2" />
                </g>
              </svg>
            </div>

            <div className="grid gap-4">
              {filtered.map((p) => (
                <article key={p.id} className="flex items-center justify-between rounded-lg border bg-white p-4">
                  <div>
                    <p className="text-xs uppercase text-gray-500">{p.category} — {p.zone}</p>
                    <h3 className="mt-1 font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{p.location} • {p.schedule}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold">+{p.points} pts</div>
                    <button className="rounded-md bg-emerald-600 px-3 py-1 text-white" onClick={() => setSelected(p)}>Voir</button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-lg border bg-white p-4">
              <h4 className="font-semibold">Zones officielles</h4>
              <p className="mt-2 text-sm text-gray-600">Dakar, Diamniadio, Saly — consulte les trajets et spécialités locales.</p>
            </div>
            <div className="rounded-lg border bg-white p-4">
              <h4 className="font-semibold">Conseils</h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                <li>Prends la navette propre pour Diamniadio.</li>
                <li>Découvre la street food près de la Corniche.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-40 flex items-end justify-center md:items-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setSelected(null)} />
          <div className="relative m-4 w-full max-w-2xl rounded-2xl bg-white p-6">
            <h3 className="text-lg font-semibold">{selected.title}</h3>
            <p className="mt-2 text-sm text-gray-600">Lieu: {selected.location}</p>
            <p className="mt-2 text-sm text-gray-600">Horaires: {selected.schedule}</p>
            <div className="mt-3 flex gap-2">
              <strong>Spécialités:</strong>
              <div className="flex flex-wrap gap-2">{selected.specialties.map((s) => (<span key={s} className="rounded-full bg-yellow-50 px-3 py-1 text-sm">{s}</span>))}</div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="ml-auto rounded-md bg-emerald-600 px-4 py-2 text-white">Itinéraire (à pied)</button>
              <button className="rounded-md border px-4 py-2">TER express</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
