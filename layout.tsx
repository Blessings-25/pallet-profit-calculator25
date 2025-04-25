import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Pallet Profit Calculator',
  description: 'Calculate your max pallet bid and profit margins',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
