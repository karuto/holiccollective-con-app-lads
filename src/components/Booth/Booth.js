import React from "react";
import styles from "./Booth.css";
import boothFanime from "../../assets/booth/booth-fanime.jpg";
import boothKawaiikon from "../../assets/booth/booth-kawaiikon.jpg";
import boothC2e2 from "../../assets/booth/booth-c2e2.jpg";
import boothAla from "../../assets/booth/booth-ala-1.jpg";
import boothLadsC2e2 from "../../assets/booth-lads/booth-lads-c2e2.jpg";
import boothLadsKawaiikon from "../../assets/booth-lads/booth-lads-kawaiikon.jpg";
import boothLadsFanime from "../../assets/booth-lads/booth-lads-fanime.jpg";
import boothLadsCupsleeve from "../../assets/booth-lads/booth-lads-cupsleeve.jpg";
import Heading from "../Heading/Heading";

function Booth() {
  const variant = process.env.REACT_APP_VARIANT;

  const defaultImages = [
    {
      src: boothFanime,
      alt: "8' table setup at FanimeCon, San Jose, CA (May 2026)",
      caption: "8' table setup at FanimeCon, San Jose, CA (May 2026)",
      isFullWidth: false,
    },
    {
      src: boothKawaiikon,
      alt: "8' table setup at KawaiiKon, Honolulu, HI (Apr 2026)",
      caption: "8' table setup at KawaiiKon, Honolulu, HI (Apr 2026)",
      isFullWidth: false,
    },
    {
      src: boothC2e2,
      alt: "10x10' corner booth setup at C2E2, Chicago, IL (Mar 2026)",
      caption: "10x10' corner booth setup at C2E2, Chicago, IL (Mar 2026)",
      isFullWidth: false,
    },
    {
      src: boothAla,
      alt: "10x10' corner setup at Anime Los Angeles, Long Beach, CA (Jan 2026)",
      caption: "10x10' corner setup at Anime Los Angeles, Long Beach, CA (Jan 2026)",
      isFullWidth: false,
    },
  ];

  const ladsImages = [
    {
      src: boothLadsC2e2,
      alt: "8' table setup at C2E2, Chicago, IL (Spring 2026)",
      caption: "8' table setup at C2E2, Chicago, IL (Spring 2026)",
      isFullWidth: true,
    },
    {
      src: boothLadsKawaiikon,
      alt: "8' table setup at KawaiiKon, Honolulu, HI (Spring 2026)",
      caption: "8' table setup at KawaiiKon, Honolulu, HI (Spring 2026)",
      isFullWidth: true,
    },
    {
      src: boothLadsFanime,
      alt: "6' table setup at FanimeCon, San Jose, CA (Summer 2026)",
      caption: "6' table setup at FanimeCon, San Jose, CA (Summer 2026)",
      isFullWidth: true,
    },
    {
      src: boothLadsCupsleeve,
      alt: "6' table setup at Orbiting Deepspace Cupsleeve, San Jose, CA (Summer 2026)",
      caption: "6' table setup at Orbiting Deepspace Cupsleeve, San Jose, CA (Summer 2026)",
      isFullWidth: true,
    },
  ];

  const content = {
    images: variant === "lads" ? ladsImages : defaultImages,
  };

  return (
    <section className={styles.booth}>
      <Heading subtitle="Recent conventions" title="booth setup" />
      <div className={styles.booth__grid}>
        {content.images.map((image, index) => (
          <figure
            key={index}
            className={`${styles.booth__item} ${
              image.isFullWidth
                ? styles.booth__item_full
                : styles.booth__item_half
            }`}
          >
            <img
              src={`dist/${image.src}`}
              alt={image.alt}
              className={styles.booth__image}
            />
            <figcaption className={styles.booth__caption}>
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Booth;
