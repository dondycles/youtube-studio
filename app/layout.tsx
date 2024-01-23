import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BottomMenuBar from "@/components/bottom-menubar";
import ThemeProvider from "@/components/theme-provider";
import UpperMenuBar from "@/components/upper-menubar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "YouTube Studio",
  description: "YouTube Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} max-h-[100dvh] h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <UpperMenuBar />
          <main className="h-full w-full bg-background overflow-auto">
            {children}
          </main>
          <BottomMenuBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
