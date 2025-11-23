export const metadata = {
  title: 'Thank You | Realcon Infra Realtor',
  description: 'Thank you — we received your request. Realcon Infra Realtor will contact you shortly.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-neutral-900">{children}</body>
    </html>
  );
}
