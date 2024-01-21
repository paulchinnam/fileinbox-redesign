"use client";

import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Dialog, Switch } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  PuzzlePieceIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Invoices", href: "#" },
  { name: "Clients", href: "#" },
  { name: "Expenses", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);

  const pathName = usePathname();

  const secondaryNavigation = [
    {
      name: "Profile",
      href: "/dashboard/account/profile",
      icon: UserCircleIcon,
      current: pathName === "/dashboard/account/profile",
    },
    {
      name: "Connected Apps",
      href: "/dashboard/account/connectedapps",
      icon: PuzzlePieceIcon,
      current: pathName === "/dashboard/account/connectedapps",
    },
    // { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 h-screen">
        <aside className="flex overflow-x-auto border-b py-10 border-gray-900/5 lg:block lg:w-64 lg:flex-none lg:border-0">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-blue-500"
                        : "text-gray-700 hover:text-blue-500 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-blue-500"
                          : "text-gray-400 group-hover:text-blue-500",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-10 sm:px-6 lg:flex-auto lg:px-0">
          {children}
        </main>
      </div>
    </>
  );
}
