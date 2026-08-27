"use client";

import {
  Bars3Icon,
  ChevronDownIcon,
  CubeIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavIcon } from "~/components/icons";
import { Logo } from "~/components/logo";
import { mainNav, productCategories } from "~/lib/site";

const drawerId = "site-nav-drawer";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const productsOpen = pathname.startsWith("/products");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const drawer = document.getElementById(drawerId);
    if (pathname && drawer instanceof HTMLInputElement) {
      drawer.checked = false;
    }
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-base-300/70 bg-base-100/85 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="navbar mx-auto h-20 max-w-7xl overflow-visible px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <nav className="flex items-center gap-1">
            {mainNav.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`btn btn-ghost rounded-box px-4 font-semibold text-sm ${
                  isActivePath(pathname, item.href)
                    ? "btn-active text-primary"
                    : ""
                }`}
              >
                <NavIcon name={item.icon} className="size-4" />
                {item.label}
              </Link>
            ))}
            <div className="dropdown dropdown-center dropdown-hover">
              <button
                type="button"
                className={`btn btn-ghost rounded-box px-4 font-semibold text-sm ${
                  productsOpen ? "btn-active text-primary" : ""
                }`}
              >
                Products
                <ChevronDownIcon className="size-4" />
              </button>
              <div className="dropdown-content z-50 mt-3 w-[min(90vw,70rem)] overflow-hidden rounded-box border border-base-300 bg-base-100 p-0 shadow-lg">
                <div className="bg-neutral px-4 py-3 text-neutral-content">
                  <p className="flex items-center gap-2 font-bold text-sm">
                    <CubeIcon className="size-4" />
                    Product portfolio
                  </p>
                  <p className="mt-0.5 text-neutral-content/70 text-xs">
                    Equipment, services, materials, and maintenance solutions
                  </p>
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
                  {productCategories.map((category) => (
                    <div key={category.slug}>
                      <p className="flex items-start gap-2 font-bold text-neutral text-sm">
                        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-field bg-primary text-primary-content">
                          <CubeIcon className="size-4" />
                        </span>
                        {category.name}
                      </p>
                      <ul className="menu mt-2 w-full gap-1 p-0 text-xs">
                        {category.groups.map((group) => (
                          <li key={group.slug}>
                            <Link
                              href={`/products/${group.slug}`}
                              className="px-2 py-1.5"
                            >
                              {group.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="border-base-300 border-t bg-base-200 px-4 py-2 text-center text-xs">
                  Need help?{" "}
                  <Link href="/contact" className="link link-primary">
                    Contact experts
                  </Link>
                </div>
              </div>
            </div>
            {mainNav.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`btn btn-ghost rounded-box px-4 font-semibold text-sm ${
                  isActivePath(pathname, item.href)
                    ? "btn-active text-primary"
                    : ""
                }`}
              >
                <NavIcon name={item.icon} className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="navbar-end gap-2">
          <Link
            href="/contact"
            className="btn btn-primary hidden rounded-full lg:inline-flex"
          >
            <EnvelopeIcon className="size-4" />
            Get a Quote
          </Link>
          <label
            htmlFor={drawerId}
            className="btn btn-ghost btn-square lg:hidden"
            aria-label="Open menu"
          >
            <Bars3Icon className="size-6" />
          </label>
        </div>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-70" />
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="drawer-side z-[60]">
      <label
        htmlFor={drawerId}
        aria-label="Close menu"
        className="drawer-overlay"
      />
      <aside className="flex min-h-full w-full flex-col bg-base-100 sm:w-80">
        <div className="flex items-center justify-between border-base-300 border-b px-4 py-4">
          <Logo />
          <label
            htmlFor={drawerId}
            className="btn btn-ghost btn-square btn-sm"
            aria-label="Close menu"
          >
            <XMarkIcon className="size-5" />
          </label>
        </div>
        <ul className="menu w-full gap-1 p-4 text-base">
          {mainNav.slice(0, 2).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  isActivePath(pathname, item.href) ? "menu-active" : ""
                }
              >
                <NavIcon name={item.icon} className="size-5" />
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <details open={pathname.startsWith("/products")}>
              <summary>
                <CubeIcon className="size-5" />
                Products
              </summary>
              <ul>
                {productCategories.map((category) => (
                  <li key={category.slug}>
                    <details
                      open={category.groups.some(
                        (group) => pathname === `/products/${group.slug}`,
                      )}
                    >
                      <summary>
                        <CubeIcon className="size-4" />
                        {category.name}
                      </summary>
                      <ul>
                        {category.groups.map((group) => (
                          <li key={group.slug}>
                            <Link
                              href={`/products/${group.slug}`}
                              className={
                                pathname === `/products/${group.slug}`
                                  ? "menu-active"
                                  : ""
                              }
                            >
                              {group.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          {mainNav.slice(2).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  isActivePath(pathname, item.href) ? "menu-active" : ""
                }
              >
                <NavIcon name={item.icon} className="size-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto p-4">
          <Link href="/contact" className="btn btn-primary btn-block">
            <EnvelopeIcon className="size-4" />
            Get a Quote
          </Link>
        </div>
      </aside>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex min-h-dvh flex-col overflow-x-hidden">
        {children}
      </div>
      <MobileNav />
    </div>
  );
}
