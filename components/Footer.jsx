"use client";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope,FaMapMarkedAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b2743] text-white py-10 md:py-12 mb-16 md:mb-0">
      <div className="container-app">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="[&>li]:leading-7">
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Useful Links</h4>
            <ul className="[&>li]:leading-7">
              {/* <li><a href="#blogs">Blogs</a></li> */}
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Ongoing Projects</h4>
            <ul className="[&>li]:leading-7">
              <li><a href="#projects">Antilla Tower 1</a></li>
              <li><a href="#projects">Silver Oak Tower</a></li>
            </ul>
            <h4 className="font-bold mt-3 mb-2">Delivered Projects</h4>
            <ul className="[&>li]:leading-7">
              <li><a href="#projects">Dream Height 1</a></li>
              <li><a href="#projects">Dream Height 2</a></li>
              <li><a href="#projects">Dream Height 3</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Head Office</h4>
            <p className="inline-flex items-center gap-2"><FaMapMarkedAlt className="text-lg shrink-0" />
              Realcon Infra Realtor<br />
              B-47, 3rd floor<br />
              Sector-64, Noida<br />
            </p>
            <p className="mt-2">
              <a href="tel:+911204553111" className="inline-flex items-center gap-2 hover:text-blue-500">
                <FaPhoneAlt className="text-lg shrink-0" />
                +91 120 455 3111
              </a><br />
              <a href="mailto:info@realconinfrarealtors.com" className="inline-flex items-center gap-2 hover:text-blue-500 break-all">
                <FaEnvelope className="text-lg shrink-0" />
                info@realconinfrarealtors.com
              </a>
            </p>
          </div>
        </div>

        <hr className="opacity-20 my-6" />

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Realcon Infra Realtor. All Rights Reserved.
          </p>

          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition hover:scale-110"
            >
              <FaFacebookF className="text-lg" />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition hover:scale-110"
            >
              <FaLinkedinIn className="text-lg" />
            </a>

            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition hover:scale-110"
            >
              <FaInstagram className="text-lg" />
            </a>

            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-red-600 transition hover:scale-110"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
