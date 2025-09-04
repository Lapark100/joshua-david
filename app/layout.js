import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})



export const metadata = {
  title: {
    template: '%s | Joshua David',
    default: 'Joshua David',
  },
  other: {
    'p:domain_verify': '3353a8126c52ba49b1b7973b6ee2890c',
  },
};


export default function RootLayout({ children }) {
  const theme = useServerDarkMode()
  return (
    <html lang="en" className={theme}>
      <body className={roboto.className}>
       <Header />
        <main className="mt-12">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
