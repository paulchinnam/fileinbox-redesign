"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  UsersIcon,
  PuzzlePieceIcon,
  CreditCardIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathName = usePathname();
  const router = useRouter();

  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const navigation = [
    // {
    //   name: "Pages",
    //   href: "/dashboard/pages",
    //   current: pathName === "/dashboard/pages",
    // },
    {
      name: "Receive Files",
      href: "/dashboard/receivefiles",
      current: pathName === "/dashboard/receivefiles",
    },
    {
      name: "Send Files",
      href: "/dashboard/sendfiles",
      current: pathName === "/dashboard/sendfiles",
    },
    {
      name: "Guides",
      href: "/dashboard/guides",
      current: pathName === "/dashboard/guides",
    },
  ];
  const userNavigation = [
    {
      name: "Your Account",
      href: "/dashboard/account/profile",
      icon: "UsersIcon",
    },
    {
      name: "Connected Apps",
      href: "/dashboard/account/connectedapps",
      icon: "PuzzlePieceIcon",
    },
    {
      name: "Billing",
      href: "#",
      icon: "CreditCardIcon",
    },
    { name: "Sign out", href: "/", icon: "ArrowRightOnRectangleIcon" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="h-screen">
        <Disclosure as="nav" className="bg-blue-400">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-blue-500 text-white"
                                : "text-white hover:bg-blue-500 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-blue-500 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full ring-2 ring-white"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-blue-500 p-2 text-white hover:bg-opacity-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-blue-500 text-white"
                          : "text-white hover:bg-blue-500 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-blue-500/50 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {user.email}
                      </div>
                    </div>
                    {/* <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-blue-400 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-blue-500 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              {pathName === "/dashboard/receivefiles" ? (
                "Receive Files"
              ) : pathName === "/dashboard/sendfiles" ? (
                "Send Files"
              ) : pathName === "/dashboard/guides" ? (
                "Fileinbox Articles & Guides"
              ) : pathName === "/dashboard/account/profile" ? (
                "Your Account"
              ) : pathName === "/dashboard/account/connectedapps" ? (
                "Your Account"
              ) : pathName === "/dashboard/download" ? (
                "Download Files"
              ) : pathName === "/dashboard/receivefiles/page1" ? (
                <>
                  <div className="flex items-center gap-4">
                    {/* <HomeIcon
                      className="h-5 w-5"
                      onClick={() => router.push("/")}
                    />
                    <p className="font-medium text-sm">{`/`}</p> */}
                    <Link
                      href="/dashboard/receivefiles"
                      className="font-medium text-sm hover:underline hover:text-blue-400"
                    >
                      Upload Pages
                    </Link>
                    <p className="font-medium text-sm">{`/`}</p>
                    <p className="font-medium text-sm">Page1</p>
                  </div>
                </>
              ) : (
                ""
              )}
            </h1>
          </div>
        </header>
        <main className="bg-gray-50 shadow-inner">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
