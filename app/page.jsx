
'use client'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Projects from '@/components/Projects';
import Counters from '@/components/Counters';
import EnquiryModal from '@/components/EnquiryModal';
import Footer from '@/components/Footer';
import HomeLoanPartners from "@/components/HomeLoanPartners";
import { useEffect } from 'react';

export default function Page(){

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
            <h1 className="text-2xl md:text-3xl font-bold">Realcon Infra Realtor Pvt. Ltd.</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatibus laborum delectus praesentium pariatur earum quasi doloremque consequuntur fugiat doloribus?
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam reprehenderit, voluptatem repellendus distinctio quod possimus recusandae saepe officia assumenda! Consequatur!.
            </p>
          </div>
          <Counters />
        </div>
      </section>

      <WhyUs />
      <Projects />

      <div className="fixed md:hidden left-0 bottom-0 w-full flex gap-1 p-1 bg-accent z-50">
        <a className="btn btn-warning flex-1" href="https://api.whatsapp.com/send?phone=1234567890&text=Hi">WhatsApp</a>
        <a className="btn btn-warning flex-1" href="tel:+9112345678">Tap To Call</a>
        <button className="btn btn-primary flex-1" onClick={()=>document.dispatchEvent(new CustomEvent('open-enquiry'))}>Enquire Now</button>
      </div>

      <button className="fixed right-4 bottom-24 md:bottom-6 rounded-full bg-black text-white w-11 h-11 shadow-lg" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>↑</button>
      <HomeLoanPartners />
      <EnquiryModal />
      <Footer />
    </>
  )
}
