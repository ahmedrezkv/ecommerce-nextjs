"use client";

import Logo from "@/components/logo";
import { useState } from "react";
import NavigationIconButtons from "./navigation-icon-buttons";
import NavigationLinks from "./navigation-links";
import NavigationMenu from "./navigation-menu";

export default function PrimaryNavigation() {
  const [menu, setMenu] = useState<{ isVisible: boolean; activeLink: string }>({
    isVisible: false,
    activeLink: "",
  });

  return (
    <div className="relative">
      <div className="relative z-[1] bg-primary-50">
        <div className="content-container flex items-center justify-between gap-4">
          <Logo />
          <NavigationLinks setMenu={setMenu} />
          <NavigationIconButtons />
        </div>
      </div>
      <NavigationMenu isVisible={menu.isVisible} activeLink={menu.activeLink} />
    </div>
  );
}
