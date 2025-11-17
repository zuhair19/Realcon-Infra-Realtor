
export default function WhyUs(){
  const items = [
    { img:'/images/wide-range-of-properties.webp', title:'Wide Range Of Properties', text:'Choose from a diverse portfolio of property in Noida, Greater Noida and Greater Noida West for every lifestyle and preference. Find Flats & Plots in your budget from upscale villas to strategic commercial property for sale, our wide range of properties ensures that there\'s a perfect match for every dream.'},
    { img:'/images/trusted-by-thousands.webp', title:'Trusted By Thousands', text:'Our reputation is built on trust. Join the ranks of thousands of satisfied clients who have chosen Realcon Infra Realtor for browsing Noida, Greater Noida and Greater Noida West property. We take pride in being a trusted partner on your journey to finding Residential & Commercial Projects.'},
    { img:'/images/financing-made-easy.webp', title:'Financing Made Easy', text:'Navigating the financial aspects of real estate can be daunting, but not with Realcon Infra Realtor. We simplify the financing process, making it easy for you to realize your dreams. Our team is dedicated to providing easy financial solutions to our clients.'},
  ];
  return (
    <section className="bg-[#0a3a65] text-white section">
      <div className="container-app">
        <div className="text-center mb-6">
          <h2 className="uppercase tracking-wide">Realcon Infra Realtor</h2>
          <h4 className="text-xl md:text-2xl font-bold mb-2">Luxurious Villas in Noida and Greater Noida</h4>
          <p className="opacity-90">We are a team of professionals working in this field for 15+ years. We deal in Residential & Commercial Projects in Noida, Greater Noida and Greater Noida West.<br />We offer our clients unmatched, smarter, faster, and reliable Real Estate Services. We'll always have an expert local with the proper knowledge to help.<br />We provide in-depth knowledge and expert advice across all property sectors.</p>
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
