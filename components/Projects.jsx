
'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [
  { title:'Luxurious Villas', text:'Luxurious 3 & 4 BHK Villas Designed for Connoisseurs of Luxury', img:'/images/luxurious-villas.jpg' },
  { title:'Plots', text:'Premium integrated township plots', img:'/images/plots.jpg' },
  { title:'Commercial', text:"City’s first commercial complex for the convenience of residents", img:'/images/commercial.jpg' },
];

export default function Projects(){
  useEffect(()=>{ AOS.init({ once:true, duration:700 }); },[]);
  return (
    <section id="projects" className="section">
      <div className="container-app">
        <div className="text-center mb-4">
          <h3 className="text-2xl md:text-3xl font-bold">Find Your Dream Space</h3>
          <p>Discover a world of possibilities.</p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-2 mb-6 rounded-full" />
        </div>
        <div className="grid-3">
          {cards.map((c,i)=>(
            <div className="card" data-aos="fade-up" key={i}>
              <img className="w-full h-64 object-cover" src={c.img} alt={c.title} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm opacity-80">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
