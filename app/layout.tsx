import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { Poppins } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="Solar Innovio"
          content="Intelligent photovoltaic systems,source of energy, Category:Solar,Electricity"
        />
        <title>Solar Innovio</title>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
