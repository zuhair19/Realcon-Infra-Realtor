
'use client'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import Counters from '@/components/Counters';
import EnquiryModal from '@/components/EnquiryModal';
import Footer from '@/components/Footer';
import HomeLoanPartners from "@/components/HomeLoanPartners";
import Mob_contact from '@/components/Mob_contact';
import { useEffect } from 'react';

export default function Page() {

  // Opens Enquiry Modal after 25 seconds (only once per session)
  // useEffect(()=>{
  //   if(!sessionStorage.getItem('popupShown')){
  //     setTimeout(()=>{
  //       document.dispatchEvent(new CustomEvent('open-enquiry'));
  //     }, 25000);
  //     sessionStorage.setItem('popupShown','true');
  //   }
  // },[]);

  return (
    <>
      <Navbar />
      <Hero />
      <section id="about" className="section">
        <div className="container-app grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Realcon Infra Realtor</h1>
            <p className="mt-2">
              We at Realcon Infra Realtor's believe in turning dreams into live experiences. Our Developments are thoughtful creations of places where life, work, and leisure come together in perfect harmony. From luxury villas with smart home automation to master-planned communities incorporating nature and connectivity, these projects have taken modern living to a new seamlessly integrated place.Inspired by a desire to improve lifestyles, our creations merge innovative design and technological enhancement with elegance and sophistication. We create places that fulfill your dreams, enrich your lives, and create long-term value. At Realcon, we don't just develop residences; we develop living.
            </p>
            <p className="mt-2">
              Our portfolio includes freehold villas, residential communities, and lifestyle-centric developments that embody our commitment to fine living. Each Realcon property is surrounded by essential conveniences such as healthcare, schools, and major urban hubs, complemented by open green spaces and contemporary clubhouses. We design neighborhoods where families grow, connections strengthen, and memories last a lifetime. Every detail — from architecture to landscaping — is planned with your lifestyle and aspirations in mind. Discover a new standard of sophisticated living, crafted for those who seek not just a home, but a legacy for generations.
            </p>
          </div>
          <Counters />
        </div>
      </section>

      <WhyUs />
      <section id="projects" className="section pb-0">
        <Projects />
      </section>

      <Mob_contact />

      <button className="fixed right-4 bottom-14 md:bottom-6 rounded-full bg-black text-white w-11 h-11 shadow-lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      <section id="loan" className="section">
        <HomeLoanPartners />
      </section>
      <EnquiryModal />
      <Footer />
    </>
  )
}
