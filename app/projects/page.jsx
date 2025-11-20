'use client'
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"
import Mob_contact from '@/components/Mob_contact';

export default function Page() {


  return (
    <>
      <Analytics />
      <Navbar />
      <Projects />
      <Mob_contact />
      <Footer />
    </>
  )
}