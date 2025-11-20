'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"
import Mob_contact from '@/components/Mob_contact';

export default function Page() {


  return (
    <>
      <Analytics />
      <Navbar />
      <a href="/downloads/silver-oak-tower.pdf" className="block mt-4 text-center text-blue-500 hover:underline">
        Download Brochure
      </a>
      <Mob_contact />
      <Footer />
    </>
  )
}