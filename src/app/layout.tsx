import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/common.css";
import "./styles/mg_pd.css";
import "./styles/flex.css";
import "./styles/font.css";
import ReduxProvider from "../../store/ReduxProvider";
import Header from "@/app/components/Header/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div style={{marginBottom: 48}}>
            <Header />
          </div>
          <div style={{width: '100%'}}>
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
