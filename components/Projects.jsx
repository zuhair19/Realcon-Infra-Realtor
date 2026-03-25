'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const ongoing = [
  { title: 'Silver Oak Tower', img: '/images/silver-3.jpg' },
  { title: 'Antilla Tower 1', img: '/images/antilla-1.jpg' },
  { title: 'RS Residency', img: '/images/rs-residency.jpg' },
];

const delivered = [
  { title: 'Dream Heights 1', img: '/images/dream-1.jpg' },
  { title: 'Dream Heights 2', img: '/images/dream-2.jpg' },
  { title: 'Dream Heights 3', img: '/images/dream-3.jpg' },
];

export default function Projects() {
  useEffect(() => { AOS.init({ once: true, duration: 700 }); }, []);

  return (
    <section id="projects" className="section py-16 mb-16">
      <div className="container-app">

        {/* Heading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Find Your Dream Space</h3>
          <p className="mt-1 text-gray-600">Discover a world of possibilities.</p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-2 mb-6 rounded-full" />
        </div>

        {/* Ongoing Projects */}
        <h4 className="text-lg font-semibold mb-4">Ongoing Projects</h4>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {ongoing.map((item, idx) => (
            // <Link
            //   key={idx}
            //   href={`/projects/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
            //   className="relative rounded-xl overflow-hidden shadow-md h-72 block"

            //   data-aos="fade-up"
            //   data-aos-delay={idx * 100}
            // >
            //   <img
            //     src={item.img}
            //     alt={item.title}
            //     className="w-full h-full object-cover"
            //   />

            //   {/* Label using Tailwind only */}
            //   <div className="absolute left-4 right-4 bottom-3">
            //     <div className="bg-white/50 rounded-full shadow-lg px-5 py-3">
            //       <h5 className="text-lg font-semibold text-center">{item.title}</h5>
            //     </div>
            //   </div>
            // </Link>

            <Link
              key={idx}
              href={`/projects/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="relative rounded-2xl overflow-hidden shadow-lg h-72 block group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-80" />

              {/* Label */}
              {/* <div className="absolute left-4 right-4 bottom-4">
                <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-full shadow-xl px-5 py-3">
                  <h5 className="text-lg font-semibold text-center text-gray-900 drop-shadow-md">
                    {item.title}
                  </h5>
                </div>
              </div> */}
              {/* <div className="absolute left-4 right-4 bottom-4 flex justify-center">
                <div className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none antialiased">
                  <h5 className="text-lg font-semibold text-center text-white/70 drop-shadow-md">
                    {item.title}
                  </h5>
                </div>
              </div> */}
              <div className="absolute left-4 right-4 bottom-4 flex justify-center">
                <button
                  className="relative inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none antialiased"
                >
                  <h5 className="text-lg font-semibold text-center text-white/70 drop-shadow-md">
                    {item.title}
                  </h5>
                </button>
              </div>
            </Link>

          ))}
        </div>

        {/* Delivered Projects */}
        <h4 className="text-lg font-semibold mb-4">Delivered Projects</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {delivered.map((item, idx) => (
            // <div
            //   key={idx}
            //   className="relative rounded-xl overflow-hidden shadow-md h-64"
            //   data-aos="fade-up"
            //   data-aos-delay={idx * 100}
            // >
            //   <img
            //     src={item.img}
            //     alt={item.title}
            //     className="w-full h-full object-cover"
            //   />

            //   {/* Label */}
            //   <div className="absolute left-4 right-4 bottom-3">
            //     <div className="bg-white/50 rounded-full shadow-md px-4 py-2 text-center">
            //       <h6 className="text-md font-medium">{item.title}</h6>
            //     </div>
            //   </div>
            // </div>

            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg h-64 group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-80" />

              {/* Label */}
              <div className="absolute left-4 right-4 bottom-4 flex justify-center">
                <button
                  className="relative inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none antialiased"
                >
                  <h5 className="text-lg font-semibold text-center text-white/70 drop-shadow-md">
                    {item.title}
                  </h5>
                </button>
              </div>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
}
