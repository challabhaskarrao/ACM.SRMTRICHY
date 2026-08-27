import type { Metadata } from 'next';
import './globals.css';
import GradualBlur from '../components/GradualBlur';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'SRMIST Tiruchirappalli ACM Student Chapter',
  description:
    'Official website of the ACM Student Chapter at SRM Institute of Science and Technology, Tiruchirappalli. Advancing computing as a science and profession.',
  keywords: [
    'ACM',
    'SRMIST',
    'SRM Trichy',
    'Computer Science',
    'Student Chapter',
    'Coding',
    'Hackathons',
  ],
  authors: [{ name: 'ACM SRM Trichy Team' }],
  openGraph: {
    title: 'SRMIST Tiruchirappalli ACM Student Chapter',
    description:
      'Advancing computing as a science and profession at SRMIST Trichy.',
    type: 'website',
    url: 'https://srmtrichy.acm.org',
    siteName: 'ACM SRM Trichy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRMIST Tiruchirappalli ACM Student Chapter',
    description:
      'Advancing computing as a science and profession at SRMIST Trichy.',
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
        <JsonLd />
        <GradualBlur preset="page-header" />
        {children}
        <GradualBlur preset="page-footer" />
      </body>
    </html>
  );
}
