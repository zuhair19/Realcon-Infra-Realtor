'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mob_contact from '@/components/Mob_contact';
import EnquiryModal from '@/components/EnquiryModal';

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url('/images/silver-3.jpg')` }}>
          <div className="bg-black/50 p-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Silver Oak Tower — Tower III</h1>
            <p className="mt-3 text-white/90 max-w-3xl">
              Premium residential tower in Sector-104, Noida (M-10, near Sterling Mall). 1, 2, 3 & 4 BHK style layouts (multiple unit sizes).
              Full brochure and detailed floor plans are available for download.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/downloads/silver-oak-tower.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-accent hover:bg-yellow-600 text-black font-semibold py-3 px-5 rounded-md shadow"
              >
                Download Brochure
              </a>

              <a href="tel:+911204553111" className="inline-block bg-brand hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-md shadow">
                Connect With Us
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Silver Oak — Tower III is a residential building in Sector-104, Noida offering thoughtfully planned flats.
            It includes multiple unit configurations across 3BHK and 4BHK layouts with super areas such as <strong>1965 sq.ft</strong>, <strong>1950 sq.ft</strong>, <strong>1600 sq.ft</strong> and <strong>1595 sq.ft</strong>.
            See the floor plans section of the brochure for unit layouts and 3D visuals.
          </p>
        </section>

        {/* AMENITIES */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Project Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded shadow-sm text-center">
              <img src="/images/parking.png" alt="parking" className="mx-auto mb-2 w-14 h-14" />
              <h4 className="font-medium">Car Parking</h4>
            </div>
            <div className="p-4 border rounded shadow-sm text-center">
              <img src="/images/kitchen.png" alt="kitchen" className="mx-auto mb-2 w-14 h-14" />
              <h4 className="font-medium">Modular Kitchen</h4>
            </div>
            <div className="p-4 border rounded shadow-sm text-center">
              <img src="/images/security.png" alt="security" className="mx-auto mb-2 w-14 h-14" />
              <h4 className="font-medium">24×7 Security</h4>
            </div>
            <div className="p-4 border rounded shadow-sm text-center">
              <img src="/images/lift.png" alt="lift" className="mx-auto mb-2 w-14 h-14" />
              <h4 className="font-medium">Lift Available</h4>
            </div>
            <div className="p-4 border rounded shadow-sm text-center">
              <img src="/images/terrace.png" alt="terrace" className="mx-auto mb-2 w-14 h-14" />
              <h4 className="font-medium">Terrace Garden & Party Space</h4>
            </div>
            <div className="p-4 border rounded shadow-sm text-center">
              <img src="/images/purifier.png" alt="purifier" className="mx-auto mb-2 w-14 h-14" />
              <h4 className="font-medium">Includes Sand Purifier & Water Softener</h4>
            </div>
          </div>
        </section>

        {/* PRICING / CONFIGURATIONS */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Configurations & Sizes</h2>
          <div className="overflow-x-auto rounded">
            <table className="w-full divide-y">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Configuration</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Super Area (sq.ft.)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                <tr>
                  <td className="px-4 py-3">4 BHK</td>
                  <td className="px-4 py-3">1965</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">4 BHK</td>
                  <td className="px-4 py-3">1950</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">3 BHK</td>
                  <td className="px-4 py-3">1595</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">3 BHK</td>
                  <td className="px-4 py-3">1600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Note: Connect with us to request current pricing and availability.
          </p>
        </section>

        {/* FLOOR PLANS (reference) */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Floor Plans & 3D Views</h2>
          <p className="text-gray-700">
            The brochure contains detailed 2D and 3D layout visuals for each unit (see pages 3–7). Download the brochure to view the floor plan's high-resolution images and unit annotations.
          </p>
          <a
            href="/downloads/silver-oak-tower.pdf"
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
            <li>Earthquake resistant RCC frame structure.</li>
            <li>Vitrified tiles in bathroom, drawing room & dining; granite in stairs/corridors.</li>
            <li>Modular kitchen with HDMR board and granite top counter.</li>
            <li>CP fittings, chrome plated fixtures; Marandi wood doors/windows (as brochure).</li>
            <li>Oil bound distemper paint; electrical wiring in copper with ISI-approved accessories.</li>
            <li>1 lift, 24-hr security, power backup, CCTV, passcode access at stilt parking.</li>
            <li>Terrace garden, kids play area and party space; sand purifier & water softener included.</li>
          </ul>
        </section>
      </main>

      <Mob_contact />
      <EnquiryModal />
      <Footer />
    </>
  );
}
