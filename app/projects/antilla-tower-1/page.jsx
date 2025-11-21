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
      <p>upcoming...., check silver oak</p>
      <Mob_contact />
      <Footer />
    </>
  )
}