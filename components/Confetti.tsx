"use client"
import { useEffect, useState } from "react";

export default function Confetti({ trigger }: { trigger: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (trigger) {
      setShow(true);
      const t = setTimeout(() => setShow(false), 2200);
      return () => clearTimeout(t);
    }
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div className="absolute left-1/2 top-20 -translate-x-1/2 space-x-2">
        <span className="animate-fall inline-block text-2xl">🎉</span>
        <span className="animate-fall inline-block text-2xl">✨</span>
        <span className="animate-fall inline-block text-2xl">🌟</span>
      </div>
    </div>
  );
}
