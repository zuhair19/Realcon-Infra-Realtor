
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
  useEffect(() => {
    if (!open) return;
    let last = window.scrollY;
    const onScrollClose = () => {
      if (Math.abs(window.scrollY - last) > 10) setOpen(false);
      last = window.scrollY;
    };
    window.addEventListener('scroll', onScrollClose, { passive: true });
    return () => window.removeEventListener('scroll', onScrollClose);
  }, [open]);


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
        <>
          {/* Backdrop (clicking it closes the menu) */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Floating panel on right half */}
          <div
            className="fixed top-16 right-0 z-50 w-2/5 max-w-xs bg-white/50 shadow-lg p-4 md:hidden transition-transform"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="grid gap-3 justify-center">
              <a href="/" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
              <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <button
                className="btn btn-primary"
                onClick={() => {
                  document.dispatchEvent(new CustomEvent('open-enquiry'));
                  setOpen(false);
                }}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </>
      )}

    </header>
  )
}
