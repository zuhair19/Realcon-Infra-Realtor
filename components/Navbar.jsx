
'use client'
import { useEffect, useState } from 'react';

export default function Navbar(){
  const [hide, setHide] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    const onScroll = () => {
      const y = window.scrollY;
      setHide(y > lastY && y > 52);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[lastY]);

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-neutral-200 transition-transform ${hide ? '-translate-y-full':''}`}>
      <div className="container-app flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-2">
          <img className="h-12 md:h-[60px]" src="/images/logo.png" alt="Realcon Infra Realtor Logo" />
        </a>
        <nav className="hidden md:flex items-center gap-4">
          <a className="py-2 hover:text-brand" href="/">Home</a>
          <a className="py-2 hover:text-brand" href="#about">About</a>
          <a className="py-2 hover:text-brand" href="#projects">Projects</a>
          <a className="py-2 hover:text-brand" href="#gallery">Gallery</a>
          <a className="py-2 hover:text-brand" href="#contact">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a className="btn btn-primary" href="tel:+91123456789">📞 +91123456789</a>
          <button className="btn" onClick={()=>document.dispatchEvent(new CustomEvent('open-enquiry'))}>Enquire Now</button>
        </div>
        <button className="btn md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <div className="container-app md:hidden pb-4">
          <div className="grid gap-2">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <button className="btn btn-primary" onClick={()=>document.dispatchEvent(new CustomEvent('open-enquiry'))}>Enquire Now</button>
          </div>
        </div>
      )}
    </header>
  )
}
