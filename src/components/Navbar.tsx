import React from "react";
import Link from "next/link";
import { navItems } from "@/constants/navItems";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="static ">
      <ul className="flex items-center justify-between px-15 py-10 font-medium text-xl ">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`hover:text-[#14CF93] text-zinc-900 cursor-pointer ${styles.navLink}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
