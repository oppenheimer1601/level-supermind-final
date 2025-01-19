import { Geist, Geist_Mono, Signika } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const signika = Signika({
  subsets: ["latin"],
  weight: ["400","700"]
})

export const metadata = {
  title: "LunaVista",
  description: "The all in one astrology website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${signika.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
