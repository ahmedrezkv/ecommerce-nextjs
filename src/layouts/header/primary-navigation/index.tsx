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
    <>
      <div className="relative z-[1]">
        <div className="relative z-[1] bg-primary-50">
          <div className="content-container flex items-center justify-between gap-8">
            <Logo color="primary" />
            <NavigationLinks setMenu={setMenu} />
            <NavigationIconButtons />
          </div>
        </div>
        <NavigationMenu menu={menu} setMenu={setMenu} />
      </div>
      {menu.isVisible && (
        <div className="fixed start-0 top-0 h-screen w-screen bg-accent-800/80 [backdrop-filter:blur(10px)]" />
      )}
    </>
  );
}
