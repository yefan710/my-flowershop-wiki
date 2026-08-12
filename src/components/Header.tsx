"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/data/site";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" data-surface-family="arena-raised">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="My Flower Shop Wiki home">
          <Image src="/site-mark.png" alt="" width="42" height="42" priority />
          <span>My Flower Shop <b>Wiki</b></span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <Icon name="menu" />
        </button>
        <nav className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          {site.navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
