'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function Mob_contact() {
  return (
    <div className="fixed md:hidden left-0 bottom-0 w-full flex gap-1 p-1 bg-accent z-50">
        <a className="btn btn-warning flex-1" href="https://api.whatsapp.com/send?phone=+919990378670&text=Hi, I would like to know more about your services." target="_blank"> <FaWhatsapp className='mr-0.5' /> WhatsApp</a>
        <a className="btn btn-warning flex-1" href="tel:+911204553111">Tap To Call</a>
        <button className="btn btn-primary flex-1" onClick={() => document.dispatchEvent(new CustomEvent('open-enquiry'))}>Enquire Now</button>
      </div>
  );
}
