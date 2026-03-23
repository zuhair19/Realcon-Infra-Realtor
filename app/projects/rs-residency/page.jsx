// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import Mob_contact from '@/components/Mob_contact';
// import EnquiryModal from '@/components/EnquiryModal';

// export const metadata = {
//   title: 'Antilla Tower Sector 107 | 3 & 4 BHK Apartments in Noida',
//   description: 'Discover Antilla Tower in Sector-107, Noida - a premium residential project offering spacious 3 & 4 BHK apartments in Alpha & Beta blocks. Explore modern amenities, quality finishes, and excellent connectivity. Download the brochure for detailed floor plans, specifications, and parking layout.',
// };

// export default function Page() {
//   return (
//     <>
//       <Navbar />

//       <main className="max-w-6xl mx-auto px-6 py-12">
//         {/* HERO */}
//         <section className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url('/images/antilla-1.jpg')` }}>
//           <div className="bg-black/50 p-10">
//             <h1 className="text-3xl md:text-5xl font-bold text-white">Antilla Tower — Sector 107</h1>
//             <p className="mt-3 text-white/90 max-w-3xl">
//               Modern residential project in Sector-107, Noida offering spacious 3BHK and 4BHK apartments across Alpha & Beta blocks.
//               Download the brochure to view detailed floor plans, specs and parking layout.
//             </p>

//             <div className="mt-6 flex flex-col sm:flex-row gap-3">
//               <a
//                 href="/downloads/antilla-tower-1.pdf"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block bg-accent hover:bg-accent-600 text-black font-semibold py-3 px-5 rounded-md shadow"
//               >
//                 Download Brochure
//               </a>

//               <a href="tel:+911204553111" className="inline-block bg-brand hover:bg-brand-700 text-white font-semibold py-3 px-5 rounded-md shadow">
//                 Connect With Us
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* OVERVIEW */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-semibold mb-3">Overview</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Antilla Tower is a thoughtfully designed residential building in Sector-107, Noida (Alpha & Beta blocks).
//             It offers a mix of 3BHK and 4BHK apartments with a variety of super areas to suit family needs. The project emphasizes quality finishes,
//             modern amenities and strong connectivity to local facilities.
//           </p>
//         </section>

//         {/* AMENITIES */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Project Amenities</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//             <div className="p-4 border rounded shadow-sm text-center">
//               <img src="/images/parking.png" alt="parking" className="mx-auto mb-2 w-14 h-14" />
//               <h4 className="font-medium">Ample Parking</h4>
//             </div>
//             <div className="p-4 border rounded shadow-sm text-center">
//               <img src="/images/security.png" alt="security" className="mx-auto mb-2 w-14 h-14" />
//               <h4 className="font-medium">24×7 Security & CCTV</h4>
//             </div>
//             <div className="p-4 border rounded shadow-sm text-center">
//               <img src="/images/lift.png" alt="lift" className="mx-auto mb-2 w-14 h-14" />
//               <h4 className="font-medium">High-speed Elevators</h4>
//             </div>
//             <div className="p-4 border rounded shadow-sm text-center">
//               <img src="/images/kids.png" alt="kids play" className="mx-auto mb-2 w-14 h-14" />
//               <h4 className="font-medium">Kids' Play Zone (Rooftop)</h4>
//             </div>
//             <div className="p-4 border rounded shadow-sm text-center">
//               <img src="/images/track.png" alt="running track" className="mx-auto mb-2 w-14 h-14" />
//               <h4 className="font-medium">Rooftop Running Track</h4>
//             </div>
//             <div className="p-4 border rounded shadow-sm text-center">
//               <img src="/images/gym.png" alt="gym" className="mx-auto mb-2 w-14 h-14" />
//               <h4 className="font-medium">Rooftop Gym & Club</h4>
//             </div>
//           </div>
//         </section>

//         {/* CONFIGURATIONS & SIZES */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-semibold mb-4">Configurations & Sizes</h2>
//           <div className="overflow-x-auto rounded">
//             <table className="w-full min-w-[640px] divide-y">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-sm font-medium">Configuration</th>
//                   <th className="px-4 py-3 text-left text-sm font-medium">Typical Super Area (sq.ft.)</th>
//                   <th className="px-4 py-3 text-left text-sm font-medium">Block / Example</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y">
//                 <tr>
//                   <td className="px-4 py-3">4 BHK</td>
//                   <td className="px-4 py-3">1850 / 1950</td>
//                   <td className="px-4 py-3">Alpha-201 / Beta-201</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-3">4 BHK (ground)</td>
//                   <td className="px-4 py-3">1700 / 1750</td>
//                   <td className="px-4 py-3">Alpha-001 / Beta-001</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-3">3 BHK</td>
//                   <td className="px-4 py-3">1425 / 1550</td>
//                   <td className="px-4 py-3">Alpha-205 / Beta-205</td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-3">3 BHK (typical)</td>
//                   <td className="px-4 py-3">1250 / 1300</td>
//                   <td className="px-4 py-3">Alpha-002 / Beta-002 / Alpha-203 etc.</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <p className="mt-3 text-sm text-gray-600">
//             Note: Connect with us to request current pricing, availability and detailed floor plans.
//           </p>
//         </section>

//         {/* FLOOR PLANS */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-semibold mb-3">Floor Plans & Parking</h2>
//           <p className="text-gray-700">
//             The brochure contains detailed 2D and 3D layout visuals for each unit. Download the brochure to view the floor plan's high-resolution images and unit annotations.
//           </p>

//           <a
//             href="/downloads/antilla-tower-1.pdf"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-block bg-accent hover:bg-accent-600 text-black font-semibold my-4 py-3 px-5 rounded-md shadow"
//           >
//             Download Brochure
//           </a>
//         </section>

//         {/* SPECIFICATIONS */}
//         <section className="mt-10 mb-12">
//           <h2 className="text-2xl font-semibold mb-3">Specifications</h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             <li>UPVC sliding doors / UPVC windows (slider doors) with sound protection glass.</li>
//             <li>Vitrified tiles, false ceilings, branded paint (Asian Paints).</li>
//             <li>Modular kitchen: HOB, chimney, RO — fully modular fittings.</li>
//             <li>Bathrooms: CP fittings (Hindware), geyser, exhaust fan.</li>
//             <li>AC provisions, lights & fans; wooden wardrobes & quality fixtures.</li>
//             <li>Dedicated parking layout and stilt/parking shown in brochure.</li>
//           </ul>
//         </section>
//       </main>

//       <Mob_contact />
//       <EnquiryModal />
//       <Footer />
//     </>
//   );
// }


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mob_contact from '@/components/Mob_contact';
import EnquiryModal from '@/components/EnquiryModal';

export const metadata = {
  title: 'RS Residency | 1 & 2 BHK Apartments by Realcon',
  description:
    'Discover RS Residency by Realcon Infra Realtors offering well-designed 1 & 2 BHK apartments with smart layouts and modern living. Explore floor plans, configurations and download brochure.',
};

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* HERO */}
        <section
          className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundImage: `url('/images/rs-residency.jpg')` }}
        >
          <div className="bg-black/50 p-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              RS Residency
            </h1>

            <p className="mt-3 text-white/90 max-w-3xl">
              A thoughtfully designed residential project by Realcon Infra Realtors offering efficient 1 & 2 BHK apartments.
              Smart layouts, multiple unit options and practical living spaces for modern families.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/downloads/rs-residency.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-accent hover:bg-yellow-600 text-black font-semibold py-3 px-5 rounded-md shadow"
              >
                Download Brochure
              </a>

              <a
                href="tel:+911204553111"
                className="inline-block bg-brand hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow"
              >
                Connect With Us
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            RS Residency offers a mix of compact and spacious apartments designed for efficient urban living.
            The project includes 1BHK and 2BHK units with optimized layouts, wide balconies, and practical room planning.
            With only 5 units per floor, it ensures better privacy and ventilation.
          </p>
        </section>

        {/* AMENITIES */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">

            <div className="p-4 border rounded text-center">
              <img src="/images/lift.png" className="mx-auto w-14 h-14 mb-2" />
              <h4>Lift Access</h4>
            </div>

            <div className="p-4 border rounded text-center">
              <img src="/images/parking.png" className="mx-auto w-14 h-14 mb-2" />
              <h4>Stilt Parking</h4>
            </div>

            <div className="p-4 border rounded text-center">
              <img src="/images/security.png" className="mx-auto w-14 h-14 mb-2" />
              <h4>Secure Entry</h4>
            </div>

            <div className="p-4 border rounded text-center">
              <img src="/images/road.png" className="mx-auto w-14 h-14 mb-2" />
              <h4>10-12 ft Road Access</h4>
            </div>

            <div className="p-4 border rounded text-center">
              <img src="/images/metro.png" className="mx-auto w-14 h-14 mb-2" />
              <h4>Metro Connectivity</h4>
            </div>

            <div className="p-4 border rounded text-center">
              <img src="/images/school.png" className="mx-auto w-14 h-14 mb-2" />
              <h4>Nearby School</h4>
            </div>

          </div>
        </section>

        {/* CONFIGURATIONS */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Configurations & Sizes</h2>

          <div className="overflow-x-auto rounded">
            <table className="w-full divide-y">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Configuration</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Unit</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Super Area (sq.ft.)</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y">
                <tr>
                  <td className="px-4 py-3">1 BHK</td>
                  <td className="px-4 py-3">Unit 1</td>
                  <td className="px-4 py-3">640</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">1 BHK</td>
                  <td className="px-4 py-3">Unit 2 & 3</td>
                  <td className="px-4 py-3">560</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">2 BHK</td>
                  <td className="px-4 py-3">Unit 4</td>
                  <td className="px-4 py-3">1040</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">2 BHK</td>
                  <td className="px-4 py-3">Unit 5</td>
                  <td className="px-4 py-3">950</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Note: Contact us for pricing and availability.
          </p>
        </section>

        {/* FLOOR PLANS */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Floor Plans</h2>
          <p className="text-gray-700">
            Detailed 2D and 3D layouts are available for each unit configuration.
            Download the brochure to explore all unit designs and cluster planning.
          </p>

          <a
            href="/downloads/rs-residency.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-accent hover:bg-yellow-600 text-black font-semibold my-4 py-3 px-5 rounded-md shadow"
          >
            Download Brochure
          </a>
        </section>

        {/* SPECIFICATIONS */}
        <section className="mt-10 mb-12">
          <h2 className="text-2xl font-semibold mb-3">Specifications</h2>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Efficient layout design with optimal space utilization.</li>
            <li>Wide balconies for ventilation and light.</li>
            <li>Stilt parking with controlled entry.</li>
            <li>Lift and common access areas.</li>
            <li>Well-planned cluster layout with 5 units per floor.</li>
          </ul>
        </section>

      </main>

      <Mob_contact />
      <EnquiryModal />
      <Footer />
    </>
  );
}