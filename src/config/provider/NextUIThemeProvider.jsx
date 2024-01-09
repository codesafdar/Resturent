"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function NextUIThemeProvider({ children }) {
  return (
    <NextUIProvider>
      {children}
      {/* <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider> */}
    </NextUIProvider>
  );
}
