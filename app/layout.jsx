
import './globals.css';

// export const metadata = {
//   title: 'Realcon Infra Realtor | Villas | Flats | Commercial',
//   description: 'Luxurious Villas / Apartments / Commercial',
//   metadataBase: new URL('https://realconinfra.in')
// };

export const metadata = {
  title: 'Realcon Infra Realtor | Luxury Villas, Apartments, Flats & Commercial Properties in Noida',
  description: 'Realcon Infra Realtor offers premium villas, luxury apartments, furnished flats, and top commercial properties in Noida and Greater Noida. Explore high-end real estate projects, modern amenities, and investment-friendly locations.',
  keywords: [
    'Realcon Infra Realtor',
    'furnished flats in Noida',
    'luxury apartments in Noida',
    'flats in Noida',
    'furnished apartments in Noida',
    'luxury flats in Noida',
    'flats for sale Noida',
    'furnished flats for sale Noida',
    'luxury furnished flats in Noida',
    'Realcon Infra properties',
    'real estate properties Noida',
    'real estate in Noida',
    'luxury villas in Noida',
    'apartments in Noida',
    'commercial properties in Noida',
    'real estate Noida',
    'Noida property dealer',
    'flats in Noida',
    'villas for sale Noida',
    'commercial space Noida'
  ],
  metadataBase: new URL('https://realconinfra.in')
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-neutral-900">{children}</body>
    </html>
  );
}
