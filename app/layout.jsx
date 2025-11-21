
import './globals.css';

export const metadata = {
  title: 'Realcon Infra Realtor | Villas | Flats | Commercial',
  description: 'Luxurious Villas / Apartments / Commercial',
  metadataBase: new URL('https://realconinfra.in')
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-neutral-900">{children}</body>
    </html>
  );
}
