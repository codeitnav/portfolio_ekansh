"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Importing the type for Attribute
import { Attribute } from "next-themes";

interface ProviderProps {
  children: React.ReactNode;
  attribute: Attribute | Attribute[] | undefined; // Correcting the type here
  defaultTheme: string;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
}

export function Provider({
  children,
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
}: ProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
}
