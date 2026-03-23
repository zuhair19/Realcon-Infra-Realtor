'use client'
import { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt, FaInfoCircle, FaWhatsapp, FaWhatsappSquare, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [hide, setHide] = useState(false);
  const lastYRef = useRef(0);
  const [open, setOpen] = useState(false);

  const [openProjects, setOpenProjects] = useState(false);
  const [openOngoing, setOpenOngoing] = useState(false);
  const [openDelivered, setOpenDelivered] = useState(false);

  // Header hide/show on scroll — paused while menu is open
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (open) return; // pause header reactions while menu open
  //     const y = window.scrollY;
  //     setHide(y > lastYRef.current && y > 52);
  //     lastYRef.current = y;
  //   };
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [open]);

  // Lock body scroll while menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prev || '';
    }
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [open]);
  const toggleProjects = () => {
    setOpenProjects(v => {
      const next = !v;
      if (!next) {
        setOpenOngoing(false);
        setOpenDelivered(false);
      }
      return next;
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-neutral-200 transition-transform ${hide && !open ? '-translate-y-full' : ''}`}
    >
      <div className="container-app flex items-center justify-between h-20 md:h-24 lg:h-30">
        <a href="/" className="flex items-center gap-2">
          <img className="h-16 md:h-20 object-contain" src="/images/logo.png" alt="Realcon Infra Realtor Logo" />
        </a>

        <nav className="hidden md:flex items-center gap-6 relative">
          <a className="py-2 hover:text-brand" href="/">Home</a>
          <a className="py-2 hover:text-brand" href="/about">About</a>

          <div className="relative group">
            <button
              className="py-2 flex items-center gap-1 hover:text-brand focus:outline-none"
              aria-haspopup="true"
              aria-expanded="false"
              type="button"
            >
              <a href='/projects'>Projects</a>
              <svg className="w-3 h-3 transform transition-transform" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M5 8l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="absolute left-0 top-full mt-0 w-72 bg-white border rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
              <div className="py-3">
                {/* Ongoing section */}
                <div className="px-4 py-2">
                  <div className="font-semibold text-sm mb-2">Ongoing Projects</div>
                  <ul className="space-y-1 text-sm">
                    <li><a className="block px-2 py-1 hover:text-brand" href="/projects/antilla-tower-1">Antilla Tower 1<br />Sector 107 Noida</a></li>
                    <li><a className="block px-2 py-1 hover:text-brand" href="/projects/silver-oak-tower">Silver Oak Tower<br />Sector 104</a></li>
                    <li><a className="block px-2 py-1 hover:text-brand" href="/projects/rs-residency">RS Residency</a></li>
                  </ul>
                </div>

                <hr className="my-2" />

                {/* Delivered section */}
                <div className="px-4 py-2">
                  <div className="font-semibold text-sm mb-2">Delivered Projects</div>
                  <ul className="space-y-1 text-sm">
                    {/* <li><a className="block px-2 py-1 hover:text-brand" href="/projects/dream-height-1">Dream Height 1</a></li>
                    <li><a className="block px-2 py-1 hover:text-brand" href="/projects/dream-height-2">Dream Height 2</a></li>
                    <li><a className="block px-2 py-1 hover:text-brand" href="/projects/dream-height-3">Dream Height 3</a></li> */}


                    <li><p className="block px-2 py-1">Dream Height 1</p></li>
                    <li><p className="block px-2 py-1">Dream Height 2</p></li>
                    <li><p className="block px-2 py-1">Dream Height 3</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* <a className="py-2 hover:text-brand" >Gallery</a> */}
          {/* <a className="py-2 hover:text-brand" href="#contact">Contact Us</a> */}
          <button className="py-2 hover:text-brand" onClick={() => document.dispatchEvent(new CustomEvent('open-enquiry'))}>Enquire Now</button>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a className="text-3xl mr-2" href="https://api.whatsapp.com/send?phone=+919990378670&text=Hi, I would like to know more about your services." target="_blank"><FaWhatsapp /></a>
          <a className="btn btn-primary gap-2" href="tel:+911204553111"><FaPhoneAlt /> +91 120 455 3111</a>
          {/* <button className="btn" onClick={() => document.dispatchEvent(new CustomEvent('open-enquiry'))}>Enquire Now</button> */}
        </div>

        {/* Toggle button — 3 bars that animate to X */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(s => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 my-1 bg-neutral-800 transition-transform duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 my-1 bg-neutral-800 transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 my-1 bg-neutral-800 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* BACKDROP (always mounted so it can fade) */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />

      {/* PANEL (always mounted so it can slide in/out) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {/* inner panel anchored to right — change w-1/2 to desired width */}
        <div className="absolute inset-0 right-0 w-full bg-white shadow-lg overflow-y-auto">
          {/* close button */}
          <div className="flex items-center justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <span className="block w-5 h-0.5 bg-neutral-800 rotate-45 transform origin-center" style={{ display: 'none' }} />
              {/* simple X icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <a href="/" className="flex items-center justify-center mb-10">
            <img
              className="h-32 md:h-[60px] object-contain"
              src="/images/logo.png"
              alt="Realcon Infra Realtor Logo"
            />
          </a>
          {/* Menu content (copy your full UL here if needed) */}
          <nav className="px-6 pb-8">
            <ul className="space-y-4 text-lg">
              <li><a href="/" onClick={() => setOpen(false)}>Home</a></li>
              <li><a href="/about" onClick={() => setOpen(false)}>About</a></li>
              <li>
                <button
                  onClick={toggleProjects}
                  className="w-full flex items-center justify-between py-2"
                  aria-expanded={openProjects}
                >
                  <span>Projects</span>
                  <svg className={`w-4 h-4 transform transition-transform ${openProjects ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M5 8l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Projects submenu container (Ongoing + Delivered) */}
                {openProjects && (
                  <div className="mt-2 pl-3 border-l border-neutral-200">
                    {/* Ongoing */}
                    <div className="mb-2">
                      <button
                        onClick={() => setOpenOngoing(v => !v)}
                        className="w-full flex items-center justify-between py-2"
                        aria-expanded={openOngoing}
                      >
                        <span>Ongoing</span>
                        <svg className={`w-4 h-4 transform transition-transform ${openOngoing ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                          <path d="M5 8l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {openOngoing && (
                        <ul className="mt-2 space-y-2 pl-3 text-sm">
                          <li><a href="/projects/antilla-tower-1" onClick={() => setOpen(false)}>Antilla Tower 1<br />Sector 107 Noida</a></li>
                          <li><a href="/projects/silver-oak-tower" onClick={() => setOpen(false)}>Silver Oak Tower<br />Sector 104</a></li>
                          <li><a href="/projects/rs-residency" onClick={() => setOpen(false)}>RS Residency</a></li>
                        </ul>
                      )}
                    </div>

                    {/* Delivered */}
                    <div>
                      <button
                        onClick={() => setOpenDelivered(v => !v)}
                        className="w-full flex items-center justify-between py-2"
                        aria-expanded={openDelivered}
                      >
                        <span>Delivered</span>
                        <svg className={`w-4 h-4 transform transition-transform ${openDelivered ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
                          <path d="M5 8l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {openDelivered && (
                        <ul className="mt-2 space-y-2 pl-3 text-sm">
                          {/* Put delivered project links here */}
                          {/* <li><a href="/dream-height-1" onClick={() => setOpen(false)}>Dream Height 1</a></li>
                          <li><a href="/dream-height-2" onClick={() => setOpen(false)}>Dream Height 2</a></li>
                          <li><a href="/dream-height-3" onClick={() => setOpen(false)}>Dream Height 3</a></li> */}


                          <li><p className="block px-2 py-1">Dream Height 1</p></li>
                          <li><p className="block px-2 py-1">Dream Height 2</p></li>
                          <li><p className="block px-2 py-1">Dream Height 3</p></li>
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </li>
              {/* <li><a href="#gallery" onClick={() => setOpen(false)}>Gallery</a></li> */}
              {/* <li>Gallery</li> */}
              <li>
                <button
                  className="btn gap-2"
                  onClick={() => { document.dispatchEvent(new CustomEvent('open-enquiry')); setOpen(false); }}
                ><FaInfoCircle />
                  Enquire Now
                </button>
              </li>

              <li>
                <a className="inline-flex items-center gap-2 btn btn-sm" href="tel:+911204553111" onClick={() => setOpen(false)}>
                  <FaPhoneAlt />
                  +91 120 455 3111
                </a>
              </li>

              <li>
                <a className="inline-flex items-center gap-2 btn btn-sm" href="https://api.whatsapp.com/send?phone=+919990378670&text=Hi, I would like to know more about your services." target="_blank" onClick={() => setOpen(false)}>
                  <FaWhatsappSquare />
                  WhatsApp
                </a>
              </li>

              <li>
                <a className="inline-flex items-center gap-2 btn btn-sm" href="mailto:info@realconinfra.in" onClick={() => setOpen(false)}>
                  <FaEnvelope />
                  info@realconinfra.in
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
