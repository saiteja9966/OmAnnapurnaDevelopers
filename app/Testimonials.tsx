"use client";

import { useState } from "react";

const reviews = [
  {
    quote: "OmAnnaPurna Developers delivered our dream home beyond expectations. Excellent quality, complete transparency and on-time delivery.",
    name: "Ramesh Kumar",
    project: "Bhargav Nivas",
  },
  {
    quote: "From the first site visit to handing over the keys, the entire experience was smooth and professional. We truly felt valued throughout.",
    name: "Priya & Arun",
    project: "Annapurna Enclave",
  },
  {
    quote: "Beautiful planning, excellent ventilation and thoughtful amenities make this a wonderful place for our family to call home.",
    name: "Srinivas Rao",
    project: "Annapurna Paradise",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const previous = () => setActive((active - 1 + reviews.length) % reviews.length);
  const next = () => setActive((active + 1) % reviews.length);
  const review = reviews[active];

  return (
    <section className="testimonials section" id="testimonials">
      <p className="eyebrow">Happy families</p>
      <h2>What Our Customers Say</h2>
      <div className="testimonialCarousel">
        <button className="carouselArrow previous" onClick={previous} aria-label="Show previous review">←</button>
        <blockquote key={active} aria-live="polite">
          <span>“</span>
          <p>{review.quote}</p>
          <footer><b>{review.name}</b><small>{review.project}</small></footer>
        </blockquote>
        <button className="carouselArrow next" onClick={next} aria-label="Show next review">→</button>
      </div>
      <div className="dots" aria-label={`Review ${active + 1} of ${reviews.length}`}>
        {reviews.map((item, index) => (
          <button key={item.name} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show review ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
