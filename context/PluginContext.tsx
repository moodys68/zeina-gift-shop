"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface PluginContextValue {
  installed: string[];
  isInstalled: (id: string) => boolean;
  install: (id: string) => void;
  uninstall: (id: string) => void;
  hydrated: boolean;
}

const PluginContext = createContext<PluginContextValue | null>(null);

const STORAGE_KEY = "zeina:plugins";

export function PluginProvider({ children }: { children: React.ReactNode }) {
  const [installed, setInstalled] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setInstalled(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(installed));
    }
  }, [installed, hydrated]);

  const isInstalled = (id: string) => installed.includes(id);

  const install = (id: string) => {
    setInstalled((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const uninstall = (id: string) => {
    setInstalled((prev) => prev.filter((p) => p !== id));
  };

  return (
    <PluginContext.Provider value={{ installed, isInstalled, install, uninstall, hydrated }}>
      {children}
    </PluginContext.Provider>
  );
}

export function usePlugins() {
  const ctx = useContext(PluginContext);
  if (!ctx) throw new Error("usePlugins must be used inside PluginProvider");
  return ctx;
}
