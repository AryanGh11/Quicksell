import "./globals.css";
import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Hydrate from "./components/Hydrate";
import Nav from "./components/Nav";
import { prisma } from "@/util/prisma";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-zillaSlab",
});

export const metadata: Metadata = {
  title: "Arex",
  description: "A cool e-commers Website!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html className={`${zillaSlab.variable}`} lang="en">
      <Hydrate>
        <Alert />
        <Nav user={session?.user} expires={session?.expires as string} />
        <main>{children}</main>
        {/* <Footer /> */}
      </Hydrate>
    </html>
  );
}
