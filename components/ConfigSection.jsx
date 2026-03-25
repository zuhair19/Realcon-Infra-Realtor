// "use client";

// import { useState } from "react";

// export default function ConfigSection({ configs }) {
//     const [selectedPlan, setSelectedPlan] = useState(null);

//     return (
//         <section className="mt-10">
//             <h2 className="text-2xl font-semibold mb-6">Explore Our Apartments</h2>

//             <div className="grid md:grid-cols-2 gap-6">

//                 {configs.map((item, index) => (
//                     <div
//                         key={index}
//                         className="border rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition duration-300"
//                     >
//                         {/* Image */}
//                         <div className="w-full h-56 flex items-center justify-center bg-gray-50">
//                             <img
//                                 src={item.image}
//                                 className="w-full h-auto" alt={item.title}
//                             />
//                         </div>

//                         {/* Content */}
//                         <div className="p-5">
//                             <h3 className="text-lg font-semibold">{item.title}</h3>
//                             <p className="text-sm text-gray-500 mt-1"><br />{item.unit}</p>

//                             <ul className="text-sm text-gray-600 mt-3 space-y-1">
//                                 {item.features.map((f, i) => (
//                                     <li key={i}>• {f}</li>
//                                 ))}
//                             </ul>

//                             <button
//                                 onClick={() => setSelectedPlan(item.image)}
//                                 className="mt-4 w-full bg-brand text-white py-2 rounded-md"
//                             >
//                                 View Floor Plan
//                             </button>
//                         </div>
//                     </div>
//                 ))}

//             </div>

//             {/* MODAL */}
//             {selectedPlan && (
//                 <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-lg max-w-3xl w-full p-4 relative">

//                         <button
//                             onClick={() => setSelectedPlan(null)}
//                             className="absolute top-2 right-3 text-xl font-bold"
//                         >
//                             ✕
//                         </button>

//                         <img
//                             src={selectedPlan}
//                             className="w-full max-h-[80vh] object-contain"
//                             alt="Floor Plan"
//                         />
//                     </div>
//                 </div>
//             )}

//         </section>
//     );
// }
"use client";

import { useState, useEffect } from "react";

export default function ConfigSection({ configs }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // 🔒 Lock scroll when modal open
  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPlan]);

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-6">
        Explore Our Apartments
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {configs.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition duration-300"
          >
            {/* IMAGE (PNG SAFE) */}
            <div className="w-full bg-gray-100 border-b p-4">
              <img
                src={item.image}
                className="h-auto w-full object-contain"
                alt={item.title}
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.unit}</p>

              <ul className="text-sm text-gray-600 mt-3 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(item.image)}
                className="mt-4 w-full bg-brand hover:bg-blue-700 text-white py-2 rounded-md"
              >
                View Floor Plan
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] p-4">
          
          <div className="bg-white rounded-lg w-full max-w-4xl p-4 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={selectedPlan}
              className="w-full max-h-[80vh] object-contain"
              alt="Floor Plan"
            />

          </div>
        </div>
      )}

    </section>
  );
}