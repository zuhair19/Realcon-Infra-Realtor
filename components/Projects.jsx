'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ongoing = [
  { title: 'Silver Oak Tower', img: '/images/silver-oak.jpg' },
  { title: 'Antilla Tower 1', img: '/images/antilla-1.jpg' },
];

const delivered = [
  { title: 'Dream Heights 1', img: '/images/dream-1.jpg' },
  { title: 'Dream Heights 2', img: '/images/dream-2.jpg' },
  { title: 'Dream Heights 3', img: '/images/dream-3.jpg' },
];

export default function Projects(){
  useEffect(()=>{ AOS.init({ once:true, duration:700 }); },[]);

  return (
    <section id="projects" className="section py-16">
      <div className="container-app">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Find Your Dream Space</h3>
          <p className="mt-1 text-gray-600">Discover a world of possibilities.</p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-2 mb-6 rounded-full" />
        </div>

        {/* Ongoing Projects */}
        <h4 className="text-lg font-semibold mb-4">Ongoing Projects</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ongoing.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md h-72"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Label using Tailwind only */}
              <div className="absolute left-4 right-4 bottom-3">
                <div className="bg-white/50 rounded-full shadow-lg px-5 py-3">
                  <h5 className="text-lg font-semibold text-center">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivered Projects */}
        <h4 className="text-lg font-semibold mb-4">Delivered Projects</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {delivered.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md h-64"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Label */}
              <div className="absolute left-4 right-4 bottom-3">
                <div className="bg-white/50 rounded-full shadow-md px-4 py-2 text-center">
                  <h6 className="text-md font-medium">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
