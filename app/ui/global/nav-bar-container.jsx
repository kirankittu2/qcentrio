"use client";

import { MegaMenu } from "@/app/ui/global/mega-menu";
import Navbar from "@/app/ui/global/nav-bar";
import { useState } from "react";

export default function NavBarContainer() {
  const [servicesHovered, setServiceHovered] = useState(false);

  return (
    <>
      <Navbar
        setServiceHovered={setServiceHovered}
        servicesHovered={servicesHovered}
      />
      {servicesHovered && (
        <MegaMenu
          setServiceHovered={setServiceHovered}
          servicesHovered={servicesHovered}
        />
      )}
    </>
  );
}
