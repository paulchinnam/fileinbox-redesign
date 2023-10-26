import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const pages = [
  {
    url: "This is a cool page",
  },
  {
    url: "This page isn't as cool",
  },
  {
    url: "Scoop di poop",
  },
  {
    url: "Poopidi scoop",
  },
  {
    url: "Mewow",
  },
  {
    url: "ROTITI",
  },
];

export default function Pages() {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
      {pages.map((page) => (
        <li
          key={page.email}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
        >
          <div className="flex min-w-0 gap-x-4">
            {/* <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={page.imageUrl}
              alt=""
            /> */}
            <div className="flex">
              <p className="pr-2 font-light">URL: </p>
              <Link href="/" className="hover:underline hover:text-indigo-600">
                {page.url}
              </Link>
            </div>
            {/* <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a href={page.href}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {page.name}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                <a
                  href={`mailto:${page.email}`}
                  className="relative truncate hover:underline"
                >
                  {page.email}
                </a>
              </p>
            </div> */}
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <a href="/">Edit</a>
            <a href="/">Delete</a>
            {/* <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{page.role}</p>
              {page.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={page.lastSeenDateTime}>{page.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            /> */}
          </div>
        </li>
      ))}
    </ul>
  );
}