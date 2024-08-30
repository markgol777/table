import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Table",
  description: "Table demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning={true} is used for next not to conflict with different extensions */}
      <body suppressHydrationWarning={true} className={montserrat.className}>{children}</body>
    </html>
  );
}
