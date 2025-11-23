'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mob_contact from '@/components/Mob_contact';
import Counters from '@/components/Counters';
import EnquiryModal from '@/components/EnquiryModal';
import Link from 'next/link';

// export const metadata = {
//   title: 'Thank You | Realcon Infra Realtor',
//   description: 'Thank you — we received your request. Realcon Infra Realtor will contact you shortly.',
// };

export default function Page() {
  const openEnquiry = () => {
    // Dispatch the same event your modal listens to
    if (typeof window !== 'undefined') {
      document.dispatchEvent(new Event('open-enquiry'));
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section
          className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundImage: `url('/images/opengraph-image.png')` }}
        >
          <div className="bg-black/50 p-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Thank You</h1>
          </div>
        </section>

        {/* CONTENT */}
        <div className="container-app grid md:grid-cols-2 gap-6 py-16 items-center">
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
                  {/* check icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Thanks! Your request is received.</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    We have received your callback request. Our sales team will contact you within 24-48 hours.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <p className="text-sm text-gray-700">
                  If you need immediate assistance, call us:
                  <a href="tel:+911204553111" className="font-medium ml-2 text-indigo-700">+91 120 455 3111</a>
                </p>

                <p className="text-sm text-gray-700">
                  Or write to:
                  <a href="mailto:info@realconinfra.in" className="font-medium ml-2 text-indigo-700">info@realconinfra.in</a>
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Link href="/" className="inline-block btn btn-outline px-4 py-2 rounded-lg">Home</Link>
                  <Link href="/projects" className="inline-block btn px-4 py-2 rounded-lg bg-slate-800 text-white">View Projects</Link>

                  {/* Button to re-open enquiry modal */}
                  <button
                    onClick={openEnquiry}
                    className="inline-block btn btn-warning px-4 py-2 rounded-lg"
                    type="button"
                  >
                    Request Another Call
                  </button>
                </div>
              </div>
            </div>

            {/* Optional small note */}
            <p className="text-xs text-gray-500 mt-4">
              Your details are safe with us. We do not share your information with third parties.
            </p>
          </div>

          {/* Counters or image */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4">What makes Realcon different</h3>
              <p className="text-sm text-gray-600 mb-6">
                With meticulously planned designs, strategically selected locations, and a promise of lasting value, Realcon continues to earn the trust of discerning homebuyers. Every project reflects a commitment to quality and attention to detail, ensuring that residents experience comfort, convenience, and long-term appreciation. Our developments are crafted not just as living spaces but as thoughtfully curated environments that elevate everyday life.
              </p>

            </div>
          </div>
        </div>
      </main>

      <Mob_contact />
      <EnquiryModal />
      <Footer />
    </>
  );
}
