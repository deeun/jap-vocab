import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/common.css";
import "./styles/mg_pd.css";
import "./styles/flex.css";
import "./styles/font.css";
import ReduxProvider from "../../store/ReduxProvider";
import LayoutWrapper from "@/app/layoutWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "일본어 하나둘셋",
  description: "JLPT 준비 도우미",
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
          <div style={{width: '100%'}}>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
