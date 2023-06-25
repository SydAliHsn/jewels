import Head from 'next/head';
import { Josefin_Sans } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Josefin_Sans({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'BeJeweled | Your Jewellery Store', template: '%s | BeJeweled' },
  description: 'Your own Jewellery Store',
  keywords: ['Jewellery', 'Pakistan Jewellery Store', 'Affordable Jewellery'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      // className="overflow-hidden"
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ToastContainer position="top-center" />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
