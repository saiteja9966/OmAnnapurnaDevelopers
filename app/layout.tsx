import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmAnnaPurna Developers | Building Dreams in Visakhapatnam",
  description: "Premium residential apartments and trusted real-estate development in Visakhapatnam.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
