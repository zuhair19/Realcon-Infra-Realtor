"use client";
import Image from "next/image";

export default function HomeLoanPartners() {
  const partners = [
    { name: "CanFin Homes", logo: "/images/canfin.png", href: "#" },
    { name: "J&K Bank", logo: "/images/jkbank.png", href: "#" },
    { name: "LIC HFL", logo: "/images/lic.png", href: "#" },
    { name: "Bandhan Bank", logo: "/images/bandhan.png", href: "#" },
    { name: "ICICI Bank", logo: "/images/icici.png", href: "#" },
  ];

  return (
    <section className="py-14 bg-white text-center" id="partners">
      <div className="container-app">
        <h6 className="uppercase text-sm tracking-widest text-gray-500">
          Banking Partners
        </h6>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0b2743] mt-1">
          Home Loan Partners
        </h2>

        <div className="w-20 h-1 bg-green-500 mx-auto mt-2 mb-6 rounded-full" />

        <p className="max-w-3xl mx-auto text-gray-600 mb-8 px-4">
          For the convenience of clients, Realcon Infra Realtor Pvt. Ltd. has its
          own Banking & Financial Assistance team, who assist buyers in planning
          their loan amount and term, and help them choose the right financial
          institution according to their monetary needs.
        </p>

        {/* Responsive logos: use horizontal scroll on small screens, grid on md+ */}
        <div className="mx-2">
          {/* Mobile: horizontal scroller */}
          <div
            className="flex gap-4 overflow-x-auto md:hidden py-2 px-2 snap-x snap-mandatory"
            role="list"
            aria-label="Home loan partners"
          >
            {partners.map((p, i) => (
              <a
                key={i}
                href={p.href}
                className="snap-center flex-shrink-0 w-64 md:w-56 lg:w-48"
                aria-label={p.name}
              >
                <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center h-28">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={220}
                    height={80}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Tablet & Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {partners.map((p, i) => (
              <a
                key={i}
                href={p.href}
                className="flex items-center justify-center"
                aria-label={p.name}
              >
                <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center w-full h-28">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={220}
                    height={80}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
