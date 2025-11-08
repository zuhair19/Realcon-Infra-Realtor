
export default function WhyUs(){
  const items = [
    { img:'/images/wide-range-of-properties.webp', title:'Wide Range Of Properties', text:'Choose from a diverse portfolios.'},
    { img:'/images/trusted-by-thousands.webp', title:'Trusted By Thousands', text:'Proud partner to thousands of satisfied clients.'},
    { img:'/images/financing-made-easy.webp', title:'Financing Made Easy', text:'We help simplify loan planning and approvals.'},
  ];
  return (
    <section className="bg-[#0a3a65] text-white section">
      <div className="container-app">
        <div className="text-center mb-6">
          <h2 className="uppercase tracking-wide">Realcon Infra Realtor Pvt. Ltd.</h2>
          <h4 className="text-2xl md:text-3xl font-bold">Luxurious Villas</h4>
          <p className="opacity-90">We offer smarter, faster and reliable real estate services.</p>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-2 mb-6 rounded-full" />
        </div>
        <div className="grid-3">
          {items.map((x,i)=>(
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5" key={i}>
              <img src={x.img} alt={x.title} className="w-20 mb-2"/>
              <h3 className="font-semibold mb-1">{x.title}</h3>
              <p className="opacity-90">{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
