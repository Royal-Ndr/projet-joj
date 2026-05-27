"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SCORE_KEY = "gainde:score";

type ScoreContextValue = {
  score: number;
  level: string;
  addPoints: (points: number) => void;
};

const ScoreContext = createContext<ScoreContextValue | undefined>(undefined);

export function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState<number>(10);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SCORE_KEY);
      const parsed = raw ? Number(raw) : NaN;
      const initial = Number.isNaN(parsed) ? 10 : parsed;
      setScore(initial);
      if (Number.isNaN(parsed)) {
        localStorage.setItem(SCORE_KEY, "10");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(SCORE_KEY, String(score));
    } catch (error) {
      console.error(error);
    }
  }, [score]);

  const level = useMemo(() => {
    if (score >= 400) return "Super Gaindé";
    if (score >= 200) return "Grand Gaindé";
    return "Lionceau Éco-Citoyen";
  }, [score]);

  const addPoints = (points: number) => {
    setScore((current) => current + points);
  };

  return <ScoreContext.Provider value={{ score, level, addPoints }}>{children}</ScoreContext.Provider>;
}

export function useScore() {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScore must be used within ScoreProvider");
  }
  return context;
}
