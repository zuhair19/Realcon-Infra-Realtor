
'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero(){
  useEffect(()=>{ AOS.init({ once:true, duration:700 }); },[]);
  return (
    <section className="relative">
      <video autoPlay playsInline loop muted className="w-full h-[55vh] md:h-[70vh] object-cover block">
        <source src="/videos/realcon_infra_video.mp4" type="video/mp4" />
      </video>
      <span className="absolute left-5 bottom-5 bg-black/50 text-white px-3 py-1 rounded">Realconn Infra Realtors</span>
    </section>
  );
}
