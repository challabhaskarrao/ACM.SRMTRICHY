import type { Metadata } from 'next';
import './globals.css';
import GradualBlur from '../components/GradualBlur';

export const metadata: Metadata = {
  title: 'SRMIST Tiruchirappalli ACM Student Chapter',
  description:
    'Official website of the ACM Student Chapter at SRM Institute of Science and Technology, Tiruchirappalli. Advancing computing as a science and profession.',
  openGraph: {
    title: 'SRMIST Tiruchirappalli ACM Student Chapter',
    description:
      'Advancing computing as a science and profession at SRMIST Trichy.',
    type: 'website',
    url: 'https://srmtrichy.acm.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased">
        <GradualBlur preset="page-header" />
        {children}
        <GradualBlur preset="page-footer" />
      </body>
    </html>
  );
}
