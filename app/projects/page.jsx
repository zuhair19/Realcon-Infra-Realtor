import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Mob_contact from '@/components/Mob_contact';
import EnquiryModal from '@/components/EnquiryModal';

export const metadata = {
  title: 'Our Projects | Realcon Infra Realtor',
  description: 'Explore the diverse range of real estate projects by Realcon Infra Realtor, including luxury villas, furnished flats, apartments, and commercial properties in Noida and Greater Noida. Discover high-quality developments with modern amenities and prime locations.',
};

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