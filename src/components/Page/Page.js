import React from "react";
import Footer from "../Footer/Footer";
import styles from "./Page.css";
import Art from "../Art/Art";
import Booth from "../Booth/Booth";
import Merch from "../Merch/Merch";
import Carousel from "../Carousel/Carousel";

import config from "../../config";

function Page() {
  const content = {
    headingGlobal: "Holic Collective",
    subheadingGlobal:
      "Your fandom deserves more than plain stickers, and so do you",
    description: config.description,
    descriptionAdditional: config.descriptionAdditional,
  };

  const variant = process.env.REACT_APP_VARIANT;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles["heading"]}>{content.headingGlobal}</h1>
        <h3 className={styles["subheading"]}>{content.description}</h3>
        <div className={styles.headers__content}>
          <Carousel />
        </div>
        <div className={styles["subheadingAdditional"]}>
          {content.descriptionAdditional
            ? content.descriptionAdditional
                .split(/\n\n+/)
                .map((paragraph, i) => <p key={i}>{paragraph.trim()}</p>)
            : null}
        </div>
      </header>
      <div className={styles.content}>
        {/* <Team /> */}
        {variant !== "lads" && <Art />}
        <Merch />
        <Booth />
        <div className={styles.disclaimerSection}>
          <p className={styles.disclaimerText}>{config.disclaimer}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
