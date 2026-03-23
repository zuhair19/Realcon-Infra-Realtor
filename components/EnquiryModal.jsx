
'use client'
import { useEffect, useState } from 'react';

export default function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ name: '', email: '', mobile: '', project: '', message: '' });

  useEffect(() => {
    const onOpen = () => setOpen(true);
    document.addEventListener('open-enquiry', onOpen);
    return () => document.removeEventListener('open-enquiry', onOpen);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit mobile';
    if (!form.project) e.project = 'Select a project';
    if (!form.message.trim()) e.message = 'Please enter your message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    if (res.ok) {
      alert('Thanks! We will contact you shortly.');
      setOpen(false);
      setForm({ name: '', email: '', mobile: '', project: '', message: '' });
      setErrors({});
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setOpen(false)} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <strong>Request A Call Back!</strong>
            <button className="btn" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>
          <div className="p-5">
            {/* <form onSubmit={submit} className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="text-xs mb-1 block">Your Name</label>
                <input className="w-full border rounded-lg px-3 py-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
                {errors.name && <div className="text-red-600 text-xs mt-1">{errors.name}</div>}
              </div>
              <div>
                <label className="text-xs mb-1 block">Your Email</label>
                <input className="w-full border rounded-lg px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
                {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
              </div>
              <div>
                <label className="text-xs mb-1 block">Mobile Number</label>
                <input className="w-full border rounded-lg px-3 py-2" value={form.mobile} maxLength={10} onChange={e=>setForm({...form, mobile:e.target.value.replace(/[^0-9]/g,'')})} />
                {errors.mobile && <div className="text-red-600 text-xs mt-1">{errors.mobile}</div>}
              </div>
              <div>
                <label className="text-xs mb-1 block">Select Project</label>
                <select className="w-full border rounded-lg px-3 py-2" value={form.project} onChange={e=>setForm({...form, project:e.target.value})}>
                  <option value="">-- Select Project --</option>
                  <option value="project1">Antilla Tower</option>
                  <option value="project2">Silver Oak Tower</option>
                </select>
                {errors.project && <div className="text-red-600 text-xs mt-1">{errors.project}</div>}
              </div>
              <div className="md:col-span-2">
                <label className="text-xs mb-1 block">Your Message</label>
                <textarea rows={4} className="w-full border rounded-lg px-3 py-2" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
                {errors.message && <div className="text-red-600 text-xs mt-1">{errors.message}</div>}
              </div>
              <div className="md:col-span-2 flex justify-center mt-2">
                <button className="btn btn-warning min-w-44" type="submit">Request A Call</button>
              </div>
            </form> */}

            <form
              action="https://formsubmit.co/info@realconinfra.in"
              method="POST"
              className="grid md:grid-cols-2 gap-3"
            >

              {/* Hidden settings */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Callback Request from RealconInfra.in" />
              <input type="hidden" name="_next" value="https://realconinfra.in/thank-you/" />

              {/* NAME */}
              <div>
                <label className="text-xs mb-1 block">Your Name</label>
                <input
                  className="w-full border rounded-lg px-3 py-2"
                  name="name"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <div className="text-red-600 text-xs mt-1">{errors.name}</div>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs mb-1 block">Your Email</label>
                <input
                  className="w-full border rounded-lg px-3 py-2"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
              </div>

              {/* MOBILE */}
              <div>
                <label className="text-xs mb-1 block">Mobile Number</label>
                <input
                  className="w-full border rounded-lg px-3 py-2"
                  name="mobile"
                  required
                  maxLength={10}
                  value={form.mobile}
                  onChange={e => setForm({ ...form, mobile: e.target.value.replace(/[^0-9]/g, '') })}
                />
                {errors.mobile && <div className="text-red-600 text-xs mt-1">{errors.mobile}</div>}
              </div>

              {/* PROJECT */}
              <div>
                <label className="text-xs mb-1 block">Select Project</label>
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  name="project"
                  required
                  value={form.project}
                  onChange={e => setForm({ ...form, project: e.target.value })}
                >
                  <option value="">-- Select Project --</option>
                  <option value="Antilla Tower">Antilla Tower</option>
                  <option value="Silver Oak Tower">Silver Oak Tower</option>
                  <option value="RS Residency">RS Residency</option>
                </select>
                {errors.project && <div className="text-red-600 text-xs mt-1">{errors.project}</div>}
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <label className="text-xs mb-1 block">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full border rounded-lg px-3 py-2"
                  name="message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
                {errors.message && <div className="text-red-600 text-xs mt-1">{errors.message}</div>}
              </div>

              {/* BUTTON */}
              <div className="md:col-span-2 flex justify-center mt-2">
                <button className="btn btn-warning min-w-44" type="submit">
                  Request A Call
                </button>
              </div>

            </form>



          </div>
        </div>
      </div>
    </>
  )
}
