"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { memo, useEffect } from "react";

const AOSAnimate = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
};

export default memo(AOSAnimate);
