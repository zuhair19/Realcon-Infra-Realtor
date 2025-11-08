
import './globals.css';

export const metadata = {
  title: 'Realcon Infra Realtor | Villas | Flats | Plots | Commercial',
  description: 'Luxurious Villas / Residential Plots / Apartments / Commercial',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-neutral-900">{children}</body>
    </html>
  );
}
