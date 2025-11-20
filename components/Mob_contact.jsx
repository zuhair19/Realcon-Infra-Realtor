'use client';

export default function Mob_contact() {
  return (
    <div className="fixed md:hidden left-0 bottom-0 w-full flex gap-1 p-1 bg-accent z-50">
        <a className="btn btn-warning flex-1" >WhatsApp</a>
        <a className="btn btn-warning flex-1" href="tel:+911204553111">Tap To Call</a>
        <button className="btn btn-primary flex-1" onClick={() => document.dispatchEvent(new CustomEvent('open-enquiry'))}>Enquire Now</button>
      </div>
  );
}
// href="https://api.whatsapp.com/send?phone=1234567890&text=Hi"