"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Loader from "./loader";

export default function PageLoader({ visible }) {
  const [cookies, setCookie] = useCookies(["load"]);
  useEffect(() => {
    const load = document.querySelector(".loader");
    if (!visible) {
      document.documentElement.classList.add("no-scroll");
      if (load) {
        load.style.opacity = "1";
      }

      const handleLoad = () => {
        if (load) {
          load.style.opacity = "0";
          document.documentElement.classList.remove("no-scroll");
          setCookie("load", true, { path: "/" });
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
  }, [setCookie, visible]);

  return <Loader />;
}
