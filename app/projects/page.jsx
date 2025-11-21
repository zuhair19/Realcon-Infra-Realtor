'use client'
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Mob_contact from '@/components/Mob_contact';
import EnquiryModal from '@/components/EnquiryModal';

export default function Page() {


  return (
    <>
      <Navbar />
      <Projects />
      <Mob_contact />
      <EnquiryModal />
      <Footer />
    </>
  )
}