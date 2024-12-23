import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const chakraFont = Chakra_Petch({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ekansh Dubey",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={chakraFont.className}>
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
