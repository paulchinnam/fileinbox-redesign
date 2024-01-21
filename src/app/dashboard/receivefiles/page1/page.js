"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserCircleIcon,
  PuzzlePieceIcon,
  ChatBubbleBottomCenterIcon,
  TagIcon,
  BellAlertIcon,
  LockClosedIcon,
  CodeBracketIcon,
  Bars3CenterLeftIcon,
  CircleStackIcon,
  PlusCircleIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  const [active, setActive] = useState();

  const tabs = [
    { name: "Responses", href: "#", current: true },
    { name: "Settings", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const secondaryNavigation = [
    {
      name: "Form Editor",
      href: "/dashboard/account/profile",
      icon: ChatBubbleBottomCenterIcon,
      current: true,
      // current: pathName === "/dashboard/account/profile",
    },
    {
      name: "Branding",
      href: "/dashboard/account/connectedapps",
      icon: TagIcon,
      // current: pathName === "/dashboard/account/connectedapps",
    },
    {
      name: "Integrations",
      href: "/dashboard/account/connectedapps",
      icon: PuzzlePieceIcon,
      // current: pathName === "/dashboard/account/connectedapps",
    },
    {
      name: "Notifications",
      href: "/dashboard/account/connectedapps",
      icon: BellAlertIcon,
      // current: pathName === "/dashboard/account/connectedapps",
    },
    {
      name: "Security",
      href: "/dashboard/account/connectedapps",
      icon: LockClosedIcon,
      // current: pathName === "/dashboard/account/connectedapps",
    },
    {
      name: "Embed",
      href: "/dashboard/account/connectedapps",
      icon: CodeBracketIcon,
      // current: pathName === "/dashboard/account/connectedapps",
    },
    {
      name: "Data",
      href: "/dashboard/account/connectedapps",
      icon: CircleStackIcon,
      // current: pathName === "/dashboard/account/connectedapps",
    },
  ];

  return (
    <>
      <div className="h-screen">
        <div className="flex items-center justify-between">
          <div className="flex items-center shadow-sm">
            <button className="px-4 py-2 rounded-l-md ring-1 ring-gray-200 bg-blue-400 text-white text-sm hover:text-white hover:bg-blue-400">
              Responses
            </button>
            <button className="px-4 py-2 rounded-r-md ring-1 ring-gray-200 bg-white text-sm hover:text-white hover:bg-blue-400  ">
              Content Editor
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </div>
            <Link
              href="/dashboard/download"
              className="text-sm hover:underline"
              target="_blank"
            >
              fileinbox.com/paul1
            </Link>
            <button className="text-sm rounded-md px-3 py-1 bg-green-500 text-white hover:bg-green-600 flex items-center gap-1">
              <ClipboardIcon className="h-4 w-4" />
              Copy
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl lg:flex lg:gap-x-6">
          <aside className="flex overflow-x-auto border-b mt-6 px-4 py-4 border-gray-900/5 lg:block lg:w-64 lg:flex-none lg:border-0 ring-1 ring-gray-200 rounded-md bg-white">
            <nav className="flex-none px-4 sm:px-6 lg:px-0">
              <ul
                role="list"
                className="flex gap-x-3 gap-y-2 whitespace-nowrap lg:flex-col"
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

          <main className="px-4 mt-6 sm:px-6 lg:flex-auto lg:p-4 rounded-md ring-1 ring-gray-200 bg-white">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2 text-gray-500">
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                <p className="text-sm">Preview</p>
              </div>
              <button className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                <PlusCircleIcon className="h-4 w-4" />
                <p className="text-sm">Add Field</p>
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
