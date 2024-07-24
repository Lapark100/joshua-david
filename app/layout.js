import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Chatbot from "@/components/chatbot";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})



export const metadata = {
  title: {
    template: '%s | Joshua David',
    default: 'Joshua David'
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
        </main>
        <Footer />
      </body>
    </html>
  );
}
