import { Lato } from "next/font/google";
import "./globals.css";

const getLato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    style: ["normal", "italic"],
});

export const metadata = {
  title: "Camilo Jiménez",
  description: "Portfolio by Camilo Jiménez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${getLato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
