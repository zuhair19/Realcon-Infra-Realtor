"use client";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b2743] text-white py-10 md:py-12 mb-16 md:mb-0">
      <div className="container-app">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Navigation</h4>
            <ul className="[&>li]:leading-7">
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Useful Links</h4>
            <ul className="[&>li]:leading-7">
              {/* <li><a href="#blogs">Blogs</a></li> */}
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Ongoing Projects</h4>
            <ul className="[&>li]:leading-7">
              <li><a href="#projects">Project 1</a></li>
              <li><a href="#projects">Project 2</a></li>
              <li><a href="#projects">Project 3</a></li>
              <li><a href="#projects">Project 4</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Corporate Office</h4>
            <p>
              Realcon Infra Realtor Pvt. Ltd.<br />
              Address line<br />
              State, Pincode
            </p>
            <p className="mt-2">
              Tel: <a href="tel:+91123456789">+91 123456789</a><br />
              Email: <a href="mailto:123@realconinfra.com">123@realconinfra.com</a>
            </p>
          </div>
        </div>

        <hr className="opacity-20 my-6" />

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Realcon Infra Realtor Pvt. Ltd. All Rights Reserved.
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
