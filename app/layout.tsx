import type { Metadata } from "next";
import { Cairo, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";
import Providers from "@/context/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

// Editorial display serif for Latin headings.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Naskh-style Arabic serif so headings stay editorial in RTL too.
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "زينة للهدايا | Zeina Gift Shop",
  description:
    "هدايا وتذكارات راقية للمواليد، الزواج، الحج والعمرة، والتخرّج. | Elegant gifts & keepsakes for newborns, anniversaries, Hajj & Umrah, and graduations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${playfair.variable} ${amiri.variable}`}
    >
      <body className="font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <AnnouncementBanner
              textKey="pilgrim_banner"
              icon="🕋"
              bgClass="bg-red-600 animate-flash-bg"
            />
            <AnnouncementBanner
              textKey="newproducts_banner"
              icon="🕯️"
              bgClass="bg-navy-700 animate-flash-bg-navy"
            />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
