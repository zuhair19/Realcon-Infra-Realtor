'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/next"
import Mob_contact from '@/components/Mob_contact';
import Counters from '@/components/Counters';

export default function Page() {


    return (
        <>
            <Analytics />
            <Navbar />
            <div className="container-app grid md:grid-cols-2 gap-6 py-16" style={{
                backgroundImage: "url('/images/logo.png')",
                backgroundSize: "cover",            // makes image fit Y-axis
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",        // optional, keeps image centered
            }}>
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
            <Mob_contact />
            <Footer />
        </>
    )
}