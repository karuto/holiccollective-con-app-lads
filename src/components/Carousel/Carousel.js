import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.css";
import holicReel from "../../assets/carousel/holic-reel.mp4";
import ladsSponsor from "../../assets/lads sponsor.jpg";

function Carousel() {
  const variant = process.env.REACT_APP_VARIANT;

  const carouselContent = [
    "Translucent liquid acrylics",
    "Reflective backlit badges",
    "Quicksand liquid standees",
    "Water activated live prints",
    "Thermal sensitive live prints",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const customTransitionStyles = {
    transition: isAnimating
      ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      : "none",
  };

  useEffect(() => {
    if (!videoReady) return;

    let timeoutId;
    const interval = setInterval(() => {
      setIsAnimating(true);
      timeoutId = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % carouselContent.length);
        setIsAnimating(false);
      }, 250);
    }, 4100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [nextIndex, carouselContent.length, videoReady]);

  const handleVideoCanPlay = () => {
    setVideoReady(true);
  };

  const handleVideoPlay = () => {
    setVideoReady(true);
  };

  const ladsContent = [
    "Artist.",
    "Cosplayer.",
    "Event co-host.",
    "Loyal Sylus kitten.",
  ];

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        {variant === "lads" ? (
          <div className={styles.carousel__textWrapper__static}>
            <div className={styles.carousel__text__static}>
              {ladsContent.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.carousel__textWrapper}>
            <div
              className={
                styles.carousel__text +
                " " +
                styles.carousel__text__current +
                (isAnimating ? " " + styles.carousel__text__exit : "")
              }
              style={customTransitionStyles}
            >
              {carouselContent[currentIndex]}
            </div>
            <div
              className={
                styles.carousel__text +
                " " +
                styles.carousel__text__next +
                (isAnimating ? " " + styles.carousel__text__enter : "")
              }
              style={customTransitionStyles}
            >
              {carouselContent[nextIndex]}
            </div>
          </div>
        )}
        {variant === "lads" ? (
          <img
            className={styles.carousel__image__lads}
            src={`dist/${ladsSponsor}`}
            alt="LADS Sponsor"
          />
        ) : (
          <video
            className={styles.carousel__image}
            src={`dist/${holicReel}`}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={handleVideoCanPlay}
            onPlay={handleVideoPlay}
          />
        )}
      </div>
    </div>
  );
}

export default Carousel;
