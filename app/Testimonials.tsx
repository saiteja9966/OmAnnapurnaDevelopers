"use client";

import { useEffect, useState } from "react";

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
  {
    quote: "The team listened carefully to our requirements and kept us informed at every stage. The quality of the finishing is truly impressive.",
    name: "Lakshmi & Mahesh",
    project: "Bhargav Nivas",
  },
  {
    quote: "We appreciated the honest guidance, clear documentation and responsive support. Buying our first home felt simple and reassuring.",
    name: "Anusha Reddy",
    project: "Annapurna Enclave",
  },
  {
    quote: "A well-designed home in a peaceful location, delivered exactly as promised. Our family is delighted with the entire experience.",
    name: "Venkatesh Naidu",
    project: "Annapurna Paradise",
  },
  {
    quote: "Every detail reflects careful planning and quality workmanship. The team remained approachable even after the handover.",
    name: "Sowmya & Kiran",
    project: "Bhargav Nivas",
  },
  {
    quote: "The spacious layout, natural light and excellent construction quality made this the right home for us.",
    name: "Deepak Varma",
    project: "Annapurna Enclave",
  },
  {
    quote: "The entire process was transparent and professionally managed. We always knew what was happening and received our home on schedule.",
    name: "Rajesh & Kavitha",
    project: "Annapurna Paradise",
  },
  {
    quote: "Our apartment combines smart use of space with excellent ventilation. It is a comfortable home that our whole family enjoys.",
    name: "Naveen Kumar",
    project: "Bhargav Nivas",
  },
  {
    quote: "The construction quality and attention to detail stood out from our very first visit. We are extremely happy with our decision.",
    name: "Padmaja Rao",
    project: "Annapurna Enclave",
  },
  {
    quote: "Prompt communication, helpful staff and a beautifully finished home made our buying journey a memorable one.",
    name: "Harish & Divya",
    project: "Annapurna Paradise",
  },
];

const AUTO_SCROLL_DELAY = 5000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const previous = () => setActive((current) => (current - 1 + reviews.length) % reviews.length);
  const next = () => setActive((current) => (current + 1) % reviews.length);
  const review = reviews[active];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, AUTO_SCROLL_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="testimonials section" id="testimonials">
      <p className="eyebrow">Happy families</p>
      <h2>What Our Customers Say</h2>
      <div
        className="testimonialCarousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
        }}
      >
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
