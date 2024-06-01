"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";

export default function PageLoader() {
  const flag = localStorage.getItem("load");
  useEffect(() => {
    const load = document.querySelector(".loader");

    if (!flag) {
      document.documentElement.classList.add("no-scroll");
      load.style.opacity = "1";

      const handleLoad = () => {
        if (load) {
          load.style.opacity = "0";
          document.documentElement.classList.remove("no-scroll");
          localStorage.setItem("load", true);
        }
      };

      const delayLoad = () => {
        setTimeout(handleLoad, 4000);
      };

      if (document.readyState === "complete") {
        delayLoad();
      } else {
        window.addEventListener("load", delayLoad);

        return () => {
          window.removeEventListener("load", delayLoad);
        };
      }
    }
  }, [flag]);

  return <Loader flag={flag} />;
}
