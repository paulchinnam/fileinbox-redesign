import { ChevronRightIcon, ClipboardIcon } from "@heroicons/react/20/solid";
import {
  PhotoIcon,
  CommandLineIcon,
  FolderPlusIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const people = [
  {
    name: "Screenshot 2023-12-0....07 PM.png",
    email: "Uploaded 868.2 kB",
    role: "fi.run/_8qw3-nO",
    imageUrl: "PhotoIcon",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: 1,
  },
  {
    name: "Untitled-1.js",
    email: "uploaded 8.2 kB",
    role: "fi.run/_8qw3-nO",
    imageUrl: "CommandLineIcon",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: 2,
  },
  {
    name: "Screenshot 2023-12-0....07 PM.png",
    email: "Uploaded 868.2 kB",
    role: "fi.run/_8qw3-nO",
    imageUrl: "PhotoIcon",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: 1,
  },
  {
    name: "Untitled-1.js",
    email: "uploaded 8.2 kB",
    role: "fi.run/_8qw3-nO",
    imageUrl: "CommandLineIcon",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: 1,
  },
  {
    name: "Screenshot 2023-12-0....07 PM.png",
    email: "Uploaded 868.2 kB",
    role: "fi.run/_8qw3-nO",
    imageUrl: "PhotoIcon",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: 2,
  },
  {
    name: "Untitled-1.js",
    email: "uploaded 8.2 kB",
    role: "fi.run/_8qw3-nO",
    imageUrl: "CommandLineIcon",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
    id: 2,
  },
];

function getIconForFile(fileName) {
  const extension = fileName.split(".").pop();
  switch (extension) {
    case "png":
    case "jpg":
    case "jpeg":
      return PhotoIcon;
    case "js":
    case "jsx":
      return CommandLineIcon;
    // Add more cases for different file types
    default:
      return FolderPlusIcon; // default icon
  }
}

export default function Page() {
  return (
    <>
      <header className="bg-blue-400">
        <div className="pl-96 py-4">
          <h1 className="text-lg font-semibold leading-6 text-white">Page1</h1>
        </div>
      </header>
      <div className="bg-gray-50 xl:pb-10 pb-4 shadow-inner pt-10">
        {/* <div className="mx-96">
          <h1 className="text-2xl font-medium text-gray-900 pb-2">Page1</h1>
          <div className="w-full h-0.5 bg-gray-200 mb-8"></div>
        </div> */}

        <main className="bg-white shadow-md ring-1 ring-gray-200 p-10 rounded-md xl:mx-96 lg:mx-72 sm:mx-24 mx-2">
          <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-blue-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            {/* <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
            />
          </svg> */}
            {/* <FolderPlusIcon className="h-12 w-12 stroke-1" /> */}
            <span className="mt-2 block text-sm font-semibold text-gray-900">
              Drag your files here to upload or
            </span>
            <button
              type="button"
              className="text-sm mt-4 px-4 py-1.5 rounded-md bg-blue-400 text-white hover:bg-blue-500"
            >
              Click to upload
            </button>
          </div>
          <p className="text-sm pt-2 flex justify-end text-gray-500">
            10GB/file
          </p>

          <div className="flex justify-between items-center">
            <h1 className="pt-12 font-semibold">Uploaded 4/6 files</h1>
            <div className="flex items-center gap-2 pt-12">
              <div className="flex items-center">
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </div>
              <p className="text-sm">fi.run/OKGPhWkd</p>
              <button className="text-sm rounded-md px-3 py-1 bg-green-500 text-white hover:bg-green-600 flex items-center gap-1">
                <ClipboardIcon className="h-4 w-4" />
                Copy
              </button>
            </div>
            {/* <p className="pt-12 text-sm">
            Page link:{" "}
            <span className="text-blue-400 underline">fi.run/OKGPhWkd</span>
          </p> */}
          </div>

          <div className="w-full rounded-full bg-blue-400/40 h-2 mt-4">
            <div className="w-3/4 h-2 rounded-full bg-blue-400"></div>
          </div>

          {/* <div className="flex gap-1 items-center pt-12">
            <p className="text-sm">
              Page link:{" "}
              <span className="text-blue-400 underline">fi.run/OKGPhWkd</span>
            </p>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </div> */}

          {/* <div className="flex flex-col mt-12">
          <div className="mx-auto">
            <FolderPlusIcon className="h-12 w-12 stroke-1 text-gray-400" />
          </div>
          <div className="mx-auto mt-2">
            <p className="text-gray-400">No files uploaded</p>
          </div>
        </div> */}

          <ul
            role="list"
            className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl mt-6"
          >
            {people.map((person) => {
              const IconComponent = getIconForFile(person.name);
              return (
                <li
                  key={person.email}
                  className={`relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6`}
                >
                  <div className="flex min-w-0 gap-x-4">
                    <IconComponent className="h-6 w-6" />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        <a href={person.href}>
                          <span className="absolute inset-x-0 -top-px bottom-0" />
                          {person.name}
                        </a>
                      </p>
                      <p className="mt-1 flex text-xs leading-5 text-gray-500">
                        <a
                          href={`mailto:${person.email}`}
                          className="relative truncate hover:underline"
                        >
                          {person.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-x-4">
                    {/* <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {person.role}
                    </p>
                    {person.lastSeen ? (
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Last seen{" "}
                        <time dateTime={person.lastSeenDateTime}>
                          {person.lastSeen}
                        </time>
                      </p>
                    ) : (
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">
                          Online
                        </p>
                      </div>
                    )}
                  </div> */}

                    <div className="flex items-center gap-1">
                      {/* <p className="text-sm text-gray-400">remove</p> */}
                      <XMarkIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <button className="mt-12 bg-green-500 w-full text-white rounded-md py-2.5 hover:bg-green-600">
            Send
          </button>
        </main>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-gray-400 pl-96">
            Powered by{" "}
            <Link href="/" className="underline hover:text-gray-600">
              Fileinbox.com
            </Link>
          </p>
          <p className="mr-96 text-sm text-gray-400 underline">
            Create your own upload form
          </p>
        </div>
      </div>
    </>
  );
}
