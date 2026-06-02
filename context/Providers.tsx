"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import { PluginProvider } from "@/context/PluginContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>
        <PluginProvider>{children}</PluginProvider>
      </CartProvider>
    </LanguageProvider>
  );
}
