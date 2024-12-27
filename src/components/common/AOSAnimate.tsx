"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { memo, useEffect } from "react";

const AOSAnimate = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 100,
      disable: "phone",
      duration: 1000,
      easing: "ease",
    });
  }, []);

  return null;
};

export default memo(AOSAnimate);
