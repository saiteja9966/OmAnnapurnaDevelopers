import Image from "next/image";
import Testimonials from "./Testimonials";
import ProjectsGallery from "./ProjectsGallery";
import ContactForm from "./ContactForm";
import omannapurnabg from "../public/omannapurna-bg.png";
import front from "../public/front.png"
import logo from "../public/logo.png"

const amenities = [
  ["/icons/golf-club.png", "Club house"], ["/icons/lounge.png", "Rooftop lounge"], ["/icons/playing.png", "Children's play area"],
  ["/icons/gym.png", "Gym & fitness"], ["/icons/power-supply.png", "Power backup"], ["/icons/cctv-camera.png", "24/7 security"],
  ["/icons/cctv.png", "CCTV security"], ["/icons/rain-water-harvesting.png", "Rainwater harvesting"], ["/icons/elevator.png", "High-speed elevators"],
];

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="OmAnnaPurna Developers home">
      <Image src={logo} alt="OmAnnaPurna Developers" width={280} height={156} priority />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <Image
          className="heroImage"
          src={omannapurnabg}
          alt="Luxury OmAnnaPurna apartment overlooking the Visakhapatnam coast"
          fill
          preload
          sizes="100vw"
        />
        <div className="heroShade" />
        <header className="nav shell">
          <Logo />
          <nav aria-label="Main navigation">
            <a href="#home">Home</a><a href="#about">About us</a><a href="#projects">Projects</a>
            <a href="#amenities">Amenities</a><a href="#testimonials">Stories</a><a href="#contact">Contact</a>
          </nav>
          <a className="phone" href="tel:+919640012345">☎ &nbsp;+91 9030998129  
</a>
          <details className="mobileMenu">
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <div>
              <a href="#home">Home</a><a href="#about">About us</a><a href="#projects">Projects</a>
              <a href="#amenities">Amenities</a><a href="#testimonials">Stories</a><a href="#contact">Contact</a>
              <a className="mobilePhone" href="tel:+919640012345">☎ +91 9030998129  ,
+91 9666610077</a>
            </div>
          </details>
        </header>
        <div className="heroContent shell">
          <p className="eyebrow light">Trusted builders in and around Visakhapatnam</p>
          <h1>Building Dreams.<br /><em>Creating Landmarks.</em></h1>
          <p className="heroCopy">Premium residential spaces crafted with trust, quality and commitment in and around Visakhapatnam.</p>
          <div className="actions"><a className="btn gold" href="#projects">Explore current project <span>→</span></a><a className="btn glass" href="#contact">Contact us <span>→</span></a></div>
        </div>
        <div className="projectDock specDock shell">
          <div className="dockStats">
            <div><span className="dockIcon">₹</span><strong>₹35 Lakhs</strong><small>Starting from</small></div>
            <div><span className="dockIcon">▱</span><strong>2 BHK</strong><small>Premium homes</small></div>
            <div><span className="dockIcon">↗</span><strong>1080 Sft</strong><small>Unit size</small></div>
            <div><span className="dockIcon">✦</span><strong>East Facing</strong><small>Vastu compliant</small></div>
            <div><span className="dockIcon">⚿</span><strong>Ready to Move</strong><small>Possession</small></div>
            <div><span className="dockIcon">▦</span><strong>Premium Interiors</strong><small>Quality finish</small></div>
          </div>
          <a href="#contact" className="dockAction"><i /> Explore</a>
        </div>
      </section>

      <section className="amenities section shell" id="amenities">
        <div className="sectionIntro"><div><p className="eyebrow">Crafting spaces that inspire</p><h2>Thoughtful Amenities<br />for a Better Lifestyle</h2></div><p>We believe a home is more than just four walls. It&apos;s a lifestyle. Enjoy world-class amenities designed for comfort, convenience and community.</p></div>
        <div className="amenityGrid">{amenities.map(([icon, label]) => <div key={label}><span><Image className="amenityIcon" src={icon} alt="" width={32} height={32} /></span><p>{label}</p></div>)}</div>
      </section>

      <section className="feature shell" id="projects">
        <div className="featureImage"><Image src={front} alt="Bhargav Nivas apartment" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div className="featureCopy"><p className="eyebrow light">Ongoing project</p><h2>Bhargav Nivas</h2><p>⌖ Sujathanagar, Visakhapatnam</p><p>A premium residential development offering spacious 2 BHK homes with modern architecture, excellent ventilation and top-class amenities.</p><ul><li>Stilt + 8 floors</li><li>2 BHK premium apartments</li><li>East & north facing options</li><li>90% UDS</li></ul></div>
        <aside><p>Project highlights</p><dl><div><dt>Land area</dt><dd>12,000 sq. yds.</dd></div><div><dt>Total units</dt><dd>60+</dd></div><div><dt>Unit sizes</dt><dd>1200–1650 sft.</dd></div><div><dt>Possession</dt><dd>Dec 2026</dd></div></dl><a className="btn gold" href="#contact">View floor plans →</a></aside>
      </section>

      <ProjectsGallery />

      <section className="trust" id="about"><div className="shell trustInner"><div className="trustCopy"><p className="eyebrow light">Why choose us?</p><h2>Built on Trust.<br />Focused on You.</h2><p>With a legacy of quality construction and timely delivery, we transform your dreams into addresses you&apos;ll be proud of.</p></div><div className="statGrid"><div><b>6+</b><span>Years of experience</span></div><div><b>6+</b><span>Projects completed</span></div><div><b>33+</b><span>Happy families</span></div><div><b>100%</b><span>Quality Construction</span></div></div></div></section>

      <Testimonials />

      <section className="contactWrap" id="contact"><div className="contact shell"><div><h2>Let&apos;s Build Your Dream Home</h2><p>Have a question or want to know more about our projects? We&apos;re here to help!</p><a href="tel:+919640012345">☎ +91 9030998129 , 
+91 9666610077</a><a href="mailto:ask@omannapurnadevelopers.com">✉ ask@omannapurnadevelopers.com</a><span>⌖ BC Colony ,Vepagunta, Visakhapatnam</span></div><ContactForm /></div></section>

      <footer className="footer"><div className="shell footerGrid"><div><Logo /><p>Building quality homes and strong relationships in and around Visakhapatnam.</p></div><div><h4>Quick links</h4><a href="#home">Home</a><a href="#about">About us</a><a href="#projects">Projects</a><a href="#amenities">Amenities</a></div><div><h4>Our projects</h4><span>Bhargav Nivas I</span><span>Bhargav Nivas II</span><span>Bhargav Nivas III</span></div><div><h4>Contact us</h4><a href="tel:+919640012345">+91 9030998129 , 
+91 9666610077 </a><a href="mailto:ask@omannapurnadevelopers.com">ask@omannapurnadevelopers.com</a><span>Visakhapatnam, Andhra Pradesh</span></div></div><div className="copyright shell">© 2026 OmAnnaPurna Developers. All rights reserved. <span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span></div></footer>
    </main>
  );
}
