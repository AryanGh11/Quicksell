import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Hydrate from "./components/Hydrate";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Quicksell",
  description: "A cool e-commerce Website!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html className={`${inter.variable}`} lang="en">
      <Hydrate>
        <Alert />
        <Nav user={session?.user} expires={session?.expires as string} />
        {children}
        <Footer />
      </Hydrate>
    </html>
  );
}
