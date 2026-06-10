import React from "react";
import styles from "./Merch.css";
import Heading from "../Heading/Heading";
import merch1 from "../../assets/merch/merch-1-mydei.png";
import merch2Anaxa from "../../assets/merch/merch-2-anaxa.png";
import merch2Phainon1 from "../../assets/merch/merch-2-phainon-1.png";
import merch2Phainon2 from "../../assets/merch/merch-2-phainon-2.png";
import merch3Sunday1 from "../../assets/merch/merch-3-sunday-1.png";
import merch3Sunday2 from "../../assets/merch/merch-3-sunday-2.png";
import merch4no1 from "../../assets/merch/merch-4-1.png";
import merch4no2 from "../../assets/merch/merch-4-2.png";
import merch5no1 from "../../assets/merch/merch-5-1.png";
import merch5no2 from "../../assets/merch/merch-5-2.png";
import merchAl1 from "../../assets/merch/merch-al-1.png";
import merchAl2 from "../../assets/merch/merch-al-2.png";
import merchLadsCalebBooba from "../../assets/merch-lads/caleb booba standee.png";
import merchLadsCalebLenticular from "../../assets/merch-lads/caleb lenticular.png";
import merchLadsCalebTray from "../../assets/merch-lads/caleb tray.png";
import merchLadsCalebTrayTop from "../../assets/merch-lads/caleb tray top.png";
import merchLadsSylusBooba from "../../assets/merch-lads/sylus booba standee.png";
import merchLadsSylusLenticular from "../../assets/merch-lads/sylus lenticular.png";
import merchLadsSylusTray from "../../assets/merch-lads/sylus tray.png";
import merchLadsSylusTrayTop from "../../assets/merch-lads/sylus tray top.png";
import merchLadsPhoneGrips from "../../assets/merch-lads/LADS phone grips.png";
import merchLadsPhotocardHolders from "../../assets/merch-lads/LADS photocard holders.jpg";

const defaultMerchImages = [
  merch1,
  merch2Anaxa,
  merch2Phainon1,
  merch2Phainon2,
  merch3Sunday1,
  merch3Sunday2,
  merchAl1,
  merchAl2,
  merch4no1,
  merch4no2,
  merch5no1,
  merch5no2,
];

const ladsMerchImages = [
  merchLadsSylusBooba,
  merchLadsCalebBooba,
  merchLadsSylusLenticular,
  merchLadsCalebLenticular,
  merchLadsSylusTrayTop,
  merchLadsCalebTrayTop,
  merchLadsSylusTray,
  merchLadsCalebTray,
  merchLadsPhoneGrips,
  merchLadsPhotocardHolders,
];

function Merch() {
  const variant = process.env.REACT_APP_VARIANT;
  const merchImages = variant === "lads" ? ladsMerchImages : defaultMerchImages;

  return (
    <section className={styles.merch}>
      <Heading subtitle="All merch designed in-house - No reselling & no AI" title="Merch showcase" />
      <div className={styles.merch__grid}>
        {merchImages.map((img, index) => (
          <figure key={index} className={styles.merch__item}>
            <img
              src={`dist/${img}`}
              alt="Merch showcase"
              className={styles.merch__image}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Merch;
