import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mob_contact from '@/components/Mob_contact';
import Counters from '@/components/Counters';
import EnquiryModal from '@/components/EnquiryModal';

export const metadata = {
    title: 'About Us | Realcon Infra Realtor',
    description: 'Learn more about Realcon Infra Realtor, a leading real estate company offering luxury villas, apartments, furnished flats, and commercial properties in Noida and Greater Noida. Discover our commitment to quality, customer satisfaction, and innovative real estate solutions.',
};

export default function Page() {


    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 py-12">
                <section className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url('/images/about.jpg')` }}>
                    <div className="bg-black/50 p-20">
                        <h1 className="text-3xl md:text-5xl font-bold text-white">About Us</h1>
                    </div>
                </section>
                <div className="container-app grid md:grid-cols-2 gap-6 py-16" >
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">Realcon Infra Realtor</h1>
                        <p className="mt-2">
                            We at Realcon Infra Realtor's believe in turning dreams into live experiences. Our Developments are thoughtful creations of places where life, work, and leisure come together in perfect harmony. From luxury villas with smart home automation to master-planned communities incorporating nature and connectivity, these projects have taken modern living to a new seamlessly integrated place.Inspired by a desire to improve lifestyles, our creations merge innovative design and technological enhancement with elegance and sophistication. We create places that fulfill your dreams, enrich your lives, and create long-term value. At Realcon, we don't just develop residences; we develop living.
                        </p>
                        <p className="mt-2">
                            Our portfolio includes freehold villas, residential communities, and lifestyle-centric developments that embody our commitment to fine living. Each Realcon property is surrounded by essential conveniences such as healthcare, schools, and major urban hubs, complemented by open green spaces and contemporary clubhouses. We design neighborhoods where families grow, connections strengthen, and memories last a lifetime. Every detail — from architecture to landscaping — is planned with your lifestyle and aspirations in mind. Discover a new standard of sophisticated living, crafted for those who seek not just a home, but a legacy for generations.
                        </p>
                    </div>
                    <Counters />
                </div>
            </main>
            <Mob_contact />
            <EnquiryModal />
            <Footer />
        </>
    )
}