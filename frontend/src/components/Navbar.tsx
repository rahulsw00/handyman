import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import exp from "constants";

const Navbar = () => {
  return (
    <header className="header">
      <div className="Navbar-area">
        <div className="container">
          <nav>
            <ul>
              <li>home</li>
              <li>jobs</li>
              <li>category</li>
              <li>aboutus</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
