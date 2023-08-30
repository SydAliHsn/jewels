import { Josefin_Sans, Roboto } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--ff-josefin-sans',
  display: 'swap'
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--ff-roboto',
  display: 'swap',
});

export const metadata = {
  title: { default: 'BeJeweled | Your Jewellery Store', template: '%s | BeJeweled' },
  description: 'Your own Jewellery Store',
  keywords: ['Jewellery', 'Pakistan Jewellery Store', 'Affordable Jewellery'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`overflow-hidden ${roboto.variable} ${josefin_sans.variable}`}
    >
      <body>
        <ToastContainer position="top-center" />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
