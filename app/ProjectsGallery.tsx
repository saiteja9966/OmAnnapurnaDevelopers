"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const projects = [
  ["Bhargav Nivas I", "Vepagunta, Vizag", "Completed 2019", "/bn1.png"],
  ["Bhargav Nivas II", "Sujathanagar, Vizag", "Completed 2020", "/bn2.jpeg"],
  ["Bhargav Nivas III", "Sujathanagar, Vizag", "Completed 2021", "/bn3.png"],
  ["Bhargav Nivas IV", "Sujathanagar, Vizag", "Completed 2022", "/bn4.png"],
  ["Bhargav Nivas V", "Sujathanagar, Vizag", "Completed 2023", "/bn5.jpeg"],
  ["Bhargav Nivas VI", "Sujathanagar, Vizag", "Completed 2024", "/bn6.jpeg"],
  ["Bhargav Nivas VII", "Sujathanagar, Vizag", "Completed 2025", "/bn7.jpeg"],
] as const;

type GalleryPhoto = { src: string; label: string };

const defaultGallery: GalleryPhoto[] = [
  { src: "/interior-living.png", label: "Living & dining" },
  { src: "/interior-bedroom.png", label: "Master bedroom" },
  { src: "/front.png", label: "Building exterior" },
];

const bhargavNivasOneFiles = [
  ["1CpIbtkJ3lwceB2T73EdAeydLgeEn_q9g", "IMG_6904.JPG"], ["1RT_4nvF6dAI2qSi7gmIDad2UeOjUYOX-", "IMG_6905.JPG"],
  ["1vfsFTzw9TJbJpGnx97eJ-9IGhLDADA-M", "IMG_6347.jpg"], ["1x8yH2eCxWOeV6G8XVn02jkX0e_aps4kM", "IMG_6345.JPG"],
  ["1NxHq7dbaQ8UgqtaZa9l7O9lTNvUzdRyE", "IMG_6327.jpg"], ["1YbiJV0L6W1Z7GB--H3n3ks9Y-ZvSoSf-", "IMG_6326.jpg"],
  ["1Mq8i7MCNnmzaXwwC9SS-1qXzlpZ26kXX", "IMG_6325.jpg"], ["1dAgM-EGLUGYQ75VYRK-3BvWfS6a4s7o8", "IMG_6324.jpg"],
  ["1W44rvJUubNZmfvZjXQrKZ5WgRCeh6zj4", "IMG_6323.jpg"], ["1WsL5__0k4FHVVqTb0CJzAouP5wtB692T", "IMG_6322.jpg"],
  ["1XEJvlspQi_USDJBMsnEhDlWlDwPdqvni", "IMG_6321.jpg"], ["14ApK2F_Cn6r67UAQhUgHNSqWBAXiyunI", "IMG_6319.jpg"],
  ["17TfiXnw9BRgkz0IbreYbDXC_FZ8G-j70", "IMG_6318.jpg"], ["1JoUvFAf4YVSEtzZ-CS2AVoS3fNSkRdCY", "IMG_6316.jpg"],
  ["1olDyADbg3yNlNlQX1EysTTCfqloofx3i", "IMG_6315.jpg"], ["1xHJ1bafpjJ5sjZ_HSiVQdl2X6T2E1DFg", "IMG_6314.jpg"],
  ["1i6JQZn-aGSihfmWELSog7hZdzlhFwgHR", "IMG_6313.jpg"], ["13GZ0lG0ozEpxcoqUwVVOQFEuv9MPVFeL", "IMG_6312.jpg"],
  ["1ZYQLjyO5q2Ayo2NGapOTDbV4MmnJ9qbZ", "IMG_6311.jpg"], ["1u6CR6CC8PfvIP4P-x54UvXJz6iZNFCsV", "IMG_6310.jpg"],
  ["1mEJmVFcn3-Utq-t0gCOIw3U_4Bq_9Z4A", "IMG_6309.jpg"], ["1WPP2THsUVYNkHjnOuhG3sp0UOjSAz8b2", "IMG_6308.jpg"],
  ["1b0ZZ5dpzy1CNFTOj8QKUQQ9_LDfqiDOX", "IMG_6307.jpg"], ["1miT00h0K4cQ_eMTvaaV6KHS0zt1692Fu", "IMG_6306.jpg"],
  ["11RPtLf8gXwHfJQxNwDuUeKL7RcNqFxw2", "IMG_6305.jpg"], ["1c_iWXye7TDUselZ7u7orUJ5r-1BM7aL_", "IMG_6304.jpg"],
  ["1F8yr_4QiCTLXqm21BZNUelZfxq1leDi1", "IMG_6303.jpg"], ["15Mitp4_MKQkgQ_YYBZZY8u0sLAUJx7Q0", "IMG_6302.jpg"],
  ["13W_xscU33ozx3K7Z3SJwQDREHZSLvnH9", "IMG_6301.jpg"], ["1jPMrnuKbLRcBpLjp2kxpRoMrOCukbeQs", "IMG_6300.jpg"],
  ["1GQj37zTzWzoEsPmzoZal0pEOFkI43Fmc", "IMG_6299.jpg"], ["14zZT7y3rwmxmDSvIo0qsgosNmwHp66oM", "IMG_6298.jpg"],
  ["19CaiY_hxCbTdKTgYETJI3CkDJkcFLJBq", "IMG_6297.jpg"], ["115Ea6cgw7SuqvMCQDo0iFLVAisGoRuHv", "IMG_6296.jpg"],
  ["10VAhlpFrcg2cEtkSw2m5v96YOsprYczB", "IMG_6295.jpg"], ["1TCp7HUGloWBMkL8__OcaudYL15jjHa8U", "IMG_6294.jpg"],
  ["1g-VE8PTUcq1x8OM1oaaJyMxuj-PBDh-C", "IMG_6293.jpg"], ["1tpXcDmI9TnXJNdOLdpkFixOz148Gi6qF", "IMG_6292.jpg"],
  ["1y8dtHJEM7YDzKFThgNC_2VdQPwtWP2tO", "IMG_6291.jpg"], ["1S5bUdydRw2cDa_zS_yOZzaH6MyENRiTC", "IMG_6290.jpg"],
] as const;

const bhargavNivasOneGallery: GalleryPhoto[] = bhargavNivasOneFiles.map(([id, name]) => ({
  src: `https://drive.google.com/thumbnail?id=${id}&sz=w1600`,
  label: name,
}));

const bhargavNivasTwoFiles = [
  ["1S2UD0yO9Kg82e6qm73JZb4b8s5DGu-_t", "IMG_5911.jpg"], ["1oh7XIqgFSlK627Gb3rtu7MGreDhdmYBF", "IMG_5913.jpg"],
  ["1naSXy-g-4Fk8zDkVVnpDX4wcDnTeJxu7", "IMG_5909.jpg"], ["1a2Ozyo8A2qkGKkg_3vGmZPJOEDC5r45x", "IMG_5910.jpg"],
  ["1eJdQ-p59Pnn_ZH-HxhreRofmdftXgq_6", "IMG_5908.jpg"], ["1FSh2UYIqIuHbVAD8SPQtlVveyFT5jvhd", "IMG_5907.jpg"],
  ["13-Wj3ZwGRHQRrHNxnuaoqVHT4aN8lWQ5", "IMG_5906.jpg"], ["19fojHOIvgZVQO_-YNuxWHnYx7n3ouBwQ", "IMG_5905.jpg"],
  ["1W677ju42VP5OB5R3v8cs4DZUZG3ZYvLE", "IMG_5904.jpg"], ["1-GfFDYCIoiF9WpxwcQ1aqlzZpnasxwEt", "IMG_5903.jpg"],
  ["1zeCVps1rns18M1jWOdtZEy9-I1MGC64e", "IMG_5902.jpg"], ["1N43h0Os2Je5jmeuWQdMRf5VuCWsmwr9Y", "IMG_5901.jpg"],
  ["1XBEnp3WZB4zoTB3iLrHXeiUywG4VAZj1", "IMG_5899.jpg"], ["1VweWehjeRE1PoR-CjmxsRc6u3BvvN4VW", "IMG_5898.jpg"],
  ["1-ClH0inR_J_8zDY2Jnw1pupW_MQOs1TB", "IMG_5897.jpg"], ["19M21tLo27Oyou23ZxCfZHWd0vcV4YCNJ", "IMG_5896.jpg"],
  ["1gsJcCQqKpUMbRXzHklchGl6ifFTSTP3a", "IMG_5895.jpg"], ["1SKx3-8gjRzGiU5kbs4Bbi5YtlN0-BK48", "IMG_5894.jpg"],
  ["1Qxlk8JcnnDbiFaIG6YAlequmJOD-C2N6", "IMG_5893.jpg"],
] as const;

const bhargavNivasTwoGallery: GalleryPhoto[] = bhargavNivasTwoFiles.map(([id, name]) => ({
  src: `https://drive.google.com/thumbnail?id=${id}&sz=w1600`,
  label: name,
}));

const bhargavNivasThreeFiles = [
  ["1QizSe9yrmynB_r8L3hVVGv68Px85tBeU", "IMG_7633.jpg"], ["1r3jEApIcoCZ4lwZ0QP5gUGF67wbNiKW9", "IMG_7634.jpg"],
  ["1xmbsMpM-vYsH-zOiPDiKxtmdZ1xaMfx5", "IMG_7630.jpg"], ["1lGti_WEjwMQmio7ayn1GZXa3UWl3gOYn", "IMG_7632.jpg"],
  ["1riLYtkJRLTt5fVaEjHRnjAh5cfMVWMcu", "IMG_7629.jpg"], ["1X40iTLKh2_i_wp5fj71FQhriKuJCBVOo", "IMG_7628.jpg"],
  ["11qCTvGvP2djFbah_906G0DCi_eakw41u", "IMG_7627.JPG"], ["135yAw5MYGjLI4-xFjK6LPziUm3alr7y5", "IMG_7626.JPG"],
  ["1hJ79GX5fTgzeJgmmFqqCm6dAKQFCM9NH", "IMG_7625.jpg"], ["1r-pqiF0pi-3Gy2SJwd-qT-JOydXQLF6l", "IMG_7624.jpg"],
  ["1t2Lfh8bbQQcAbql2zpcDXDXArvK_IjRw", "IMG_7623.jpg"], ["13_jr7OKl8wih4yneNGle4gO2bgZ7zq_g", "IMG_7622.jpg"],
  ["13c9armHswhR7F7Xkf_DPvrIF3IIU1fE2", "IMG_7619.JPG"], ["1glvIAfgs_BcP9PtC5F4D7mt8CePhu6Nr", "IMG_7618.jpg"],
  ["1QaXbBAdB8ylvye1-QsFr2-uAAeDGh210", "IMG_7617.JPG"], ["1Sq6OpcKLf4ocnfGaMsQEsRBqz30Tlita", "IMG_7616.jpg"],
  ["11Iuh1ujv5dBDT-PofbTAloJlQv1MEAho", "IMG_7615.jpg"], ["1yWYyG--kHAmoCu1fUaNDHJB_LGEWvWgj", "IMG_7614.jpg"],
  ["12nuKdzuqNGYoBpFp788A0Nu2VhYa8g8v", "IMG_7613.jpg"], ["1YMpvmuyd_UaalowHcTdQe6t8bpXOSGMR", "IMG_7612.jpg"],
  ["19b1S_pnVQNYqgUmDnXkNVZxDmEysPqep", "IMG_7611.jpg"], ["1VDS-7dITU5Ep9xgBvSGQ1N76KNpF489v", "IMG_7610.jpg"],
  ["1NB9dmitEa1V9VTetpBejtyfnHESXDw_X", "IMG_7609.jpg"], ["1fbSI6PBD-nKkyDqmz-C3uLmSn5XbeC8N", "IMG_7608.jpg"],
  ["1nBGdCFlZk_zWY60FUbd7woqz8i6Bpgde", "IMG_7607.jpg"], ["1l6K8TY0qbA2IGe7_iX8cwGc2zBSdY4gv", "IMG_7605.jpg"],
  ["1e1xhhiXcXnc2s-aR3X3Q7Z_xlkBGOM3S", "IMG_7603.jpg"], ["16FMZ2j1tl0oFSSkoVgdDz1OdO8bb4b9O", "IMG_7602.jpg"],
  ["1HPbDVW3xO55o6NbOl1kYTLsOeHgfQwmd", "IMG_7601.jpg"], ["1nSz8dOBoMPMOkeg2T7iGjZWHfFHtIiWR", "IMG_7600.jpg"],
  ["1uMHjcV5vi0ltaeeQn0G6JvNSftSdSGcD", "IMG_7599.jpg"], ["1czXJdFzIH0UTK-suFFAHktjsnKBNvmof", "IMG_7598.jpg"],
  ["1zVXlNgTI-P3nLID66jFbIkLKXWiyKsaf", "IMG_7597.jpg"], ["1idBW7ULlFQ59mRmb2F9m0qfrJCBYo2iS", "IMG_7596.jpg"],
  ["1R2eF7SnsTKo2t1e6KRtttgQa-5ivRrPL", "IMG_7595.jpg"], ["1tWsNhq-XOq5D3mgmr-hhLf7ldZlyfUpd", "IMG_7594.jpg"],
  ["15JXWHIj8OEJnTyT-7xoPZG1R4yJVT074", "IMG_7593.jpg"], ["1MSDKCTOKDcbmhXFbwn77YQOyWX_a7Twz", "IMG_7592.jpg"],
  ["1TqeA1ifhCZuAmJNctuHOl6XpLrpzET7G", "IMG_7591.jpg"], ["1pzVC8iQJx7GOJR7Ka7mrGOL75PQdUDqv", "IMG_7590.jpg"],
  ["1dUY_RdwVYHCz8lCxQjUsOZ3d1vrhsPvD", "IMG_7589.jpg"], ["1MPyWm8K6UWaHKnPY8NoPzaM82KKRSFw-", "IMG_7588.jpg"],
  ["1TtyAeaPhMVmH9q1z4K8x1EE6rViE3nxM", "IMG_7587.jpg"],
] as const;

const bhargavNivasThreeGallery: GalleryPhoto[] = bhargavNivasThreeFiles.map(([id, name]) => ({
  src: `https://drive.google.com/thumbnail?id=${id}&sz=w1600`,
  label: name,
}));

const bhargavNivasFourToSevenFiles = [
  ["1_CEoX3oKoSOszh2nRKHL38xfOmWuAIh3", "IMG_7657.jpg"], ["10l3Woufvy7IFDyVQAQ21ShuBGYz1_SOy", "IMG_7658.jpg"],
  ["1WICAAwuX6hZRC3PrsHHrdtB_5BLtRkNn", "IMG_7656.jpg"], ["1Wz5qwOvCWMgcu5QpYC2GPg6S7EMfQLlf", "IMG_7655.jpg"],
  ["1AEoh5FRgKfTeBFHYFF4GqD3tYtc4Lpl8", "IMG_7654.jpg"], ["16ZdEoHESOYEQ3GZm7AwjhB4JE8biimqc", "IMG_7653.jpg"],
  ["1szeXgmwP6R0INiFqCZxayc6DV7E6WlCH", "IMG_7652.JPG"], ["1IPKjDcg_Fav6jGDvI9cFZFR4lZpsy9tF", "IMG_7651.jpg"],
  ["1TAcUZBjBi8yDgkh_xVC0cA5nzauch5F1", "IMG_7650.JPG"], ["1yN0UGIRcImKKtf6orchOsAC4KJQpv1Bo", "IMG_7649.jpg"],
  ["1a3s_9DPXoHDGXriySjHq4JKzQCo2Od9D", "IMG_7648.jpg"], ["12PUyvFJzcseNByvBZSkIpGZTtxvKjCPw", "IMG_7647.jpg"],
  ["1o9gDw_EFuDhFN61He4BDk-cvZiqoVNlU", "IMG_7646.jpg"], ["1dowBPCXtwpbmVxeP83X6ahCLEDM12qsv", "IMG_7645.jpg"],
  ["1wG9CgBflIv6EO_tTDrULi6rtQfjnvILn", "IMG_7644.jpg"], ["1SUFVLNzQ39HlmN-ItbhbWlHRVkdNojvI", "IMG_7643.jpg"],
  ["19sSDtRTFFQ_7C8grkkwcXPDZkE2mGTSe", "IMG_7642.jpg"], ["14oDfSVG8r3wv0ee7pwrrjw42TseZK87U", "IMG_7641.jpg"],
  ["13w9ZMsGNwk1Usww-SLmN9ntnAEkfJEYW", "IMG_7640.jpg"], ["1Sjv8dgTzZ7OVRUjhjUvRvqddRnLd3e97", "IMG_7639.jpg"],
  ["1ztvQg7YSzIBhxL--R7ydxDKbysCcbagi", "IMG_7638.jpg"], ["1x_dU6vj12yam746kESfKKAvQrNrW4LRI", "IMG_7637.jpg"],
  ["12zaIJ7OpauDHwdA6KyqIuFyd2ck4KHs9", "IMG_7636.jpg"], ["1_4TiyK15Zztzh3O3Z40Erczt-V3LzETj", "IMG_7635.jpg"],
] as const;

const bhargavNivasFourToSevenGallery: GalleryPhoto[] = bhargavNivasFourToSevenFiles.map(([id, name]) => ({
  src: `https://drive.google.com/thumbnail?id=${id}&sz=w1600`,
  label: name,
}));

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const gallery = useMemo(() => {
    if (selectedProject === 0) return bhargavNivasOneGallery;
    if (selectedProject === 1) return bhargavNivasTwoGallery;
    if (selectedProject === 2) return bhargavNivasThreeGallery;
    if (selectedProject !== null && selectedProject >= 3) return bhargavNivasFourToSevenGallery;
    return defaultGallery;
  }, [selectedProject]);

  const close = () => setSelectedProject(null);
  const showPhoto = (index: number) => setActivePhoto((index + gallery.length) % gallery.length);
  const open = (index: number) => { setSelectedProject(index); setActivePhoto(0); };

  useEffect(() => {
    if (selectedProject === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") setActivePhoto((current) => (current - 1 + gallery.length) % gallery.length);
      if (event.key === "ArrowRight") setActivePhoto((current) => (current + 1) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [selectedProject, gallery.length]);

  const project = selectedProject === null ? null : projects[selectedProject];

  return (
    <section className="completed section shell">
      <div className="sectionHeading"><div><p className="eyebrow">Delivered promises</p><h2>Completed Projects</h2></div><span className="viewPrompt">Click a project to view gallery</span></div>
      <div className="projectGrid" role="region" aria-label="Completed projects — scroll horizontally">
        {projects.map((item, index) => (
          <article key={item[0]} role="button" tabIndex={0} onClick={() => open(index)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") open(index); }} aria-label={`Open ${item[0]} photo gallery`}>
            <div className={`projectPhoto crop${index}`}><Image src={item[3]} alt={`${item[0]} property`} fill sizes="(max-width: 700px) 80vw, 300px" /></div>
            <div className="projectNumber">0{index + 1}</div><h3>{item[0]}</h3><p>⌖ {item[1]}</p><span>▣ 2 BHK Apartments</span><span>▢ {item[2]}</span>
          </article>
        ))}
      </div>
      <p className="scrollHint"><span>←</span> Scroll to explore all projects <span>→</span></p>

      {project && (
        <div className="galleryModal" role="dialog" aria-modal="true" aria-labelledby="galleryTitle" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <div className="galleryPanel">
            <button className="galleryClose" onClick={close} aria-label="Close project gallery">×</button>
            <div className="galleryVisual">
              <Image key={gallery[activePhoto].src} src={gallery[activePhoto].src} alt={`${project[0]} ${gallery[activePhoto].label}`} fill priority sizes="(max-width: 800px) 100vw, 70vw" />
              <div className="galleryShade" />
              <button className="galleryArrow galleryPrev" onClick={() => showPhoto(activePhoto - 1)} aria-label="Previous photo">←</button>
              <button className="galleryArrow galleryNext" onClick={() => showPhoto(activePhoto + 1)} aria-label="Next photo">→</button>
              <span className="photoCount">{String(activePhoto + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
              <div className="galleryCaption"><small>{gallery[activePhoto].label}</small><h3 id="galleryTitle">{project[0]}</h3><p>⌖ {project[1]}</p></div>
            </div>
            <aside className="galleryDetails">
              <p className="eyebrow">Project gallery</p><h3>{project[0]}</h3>
              <p>Thoughtfully designed 2 BHK homes with refined interiors, natural light and quality finishes.</p>
              <div className="galleryFacts"><span><b>2 BHK</b>Configuration</span><span><b>{project[2].replace("Completed ", "")}</b>Completed</span><span><b>GVMC</b>Approved</span></div>
              <div className="galleryThumbs">{gallery.map((photo, index) => <button key={photo.src} className={index === activePhoto ? "active" : ""} onClick={() => setActivePhoto(index)} aria-label={`Show ${photo.label}`}><Image src={photo.src} alt="" fill sizes="100px" /><span>{photo.label}</span></button>)}</div>
              <a className="btn gold" href="#contact" onClick={close}>Enquire about project →</a>
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}
