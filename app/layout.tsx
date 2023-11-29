import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Address Search",
  description: "Search any location",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry options={{ key: "mui" }}>
        <body className={roboto.className}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
