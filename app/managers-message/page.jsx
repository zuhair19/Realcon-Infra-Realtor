'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mob_contact from '@/components/Mob_contact';
import EnquiryModal from '@/components/EnquiryModal';

export default function Page() {


    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 py-12">
                <section className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url('/images/message.jpg')` }}>
                    <div className="bg-black/50 p-20">
                        <h1 className="text-3xl md:text-5xl font-bold text-white">Manager's Message</h1>
                    </div>
                </section>
                <div className="container-app py-16" >
                    <div>
                        <p className="mt-2">
                            With over 15+ years of experience in real estate, Mr. Md. Rafeeq Khan believes in using technology to improve customer care, general marketing, and office management.
                        </p>
                        <p className="mt-2">
                            Honesty and integrity, along with determination and dedication, are philosophies that Mr. Md. Rafeeq Khan strives for in all aspects of his life. His background as a business owner for several business ventures has given his real estate business a high level of experience leadership and professionalism.
                        </p>
                        <p className="text-right text-4xl mt-2">
                            <strong>~ Mr. Md. Rafeeq Khan</strong>
                        </p>
                        <div className="flex justify-center">
                            <img src="/images/manager.jpg" alt="Manager" className="mt-4 rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </main>
            <Mob_contact />
            <EnquiryModal />
            <Footer />
        </>
    )
}