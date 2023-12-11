import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  PhotoIcon,
  CommandLineIcon,
  FolderPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

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

export default function Page() {
  return (
    <>
      <main className="bg-white shadow-md ring-1 ring-blue-500 p-10 rounded-md">
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
            className="text-sm mt-4 px-4 py-1.5 rounded-md bg-blue-400 text-white hover:bg-blue-600"
          >
            Click to upload
          </button>
        </div>
        <p className="text-sm pt-2 flex justify-end text-gray-500">10GB/file</p>

        <h1 className="pt-12 font-semibold">Uploaded 6 files</h1>
        {/* <div className="flex flex-col mt-12">
          <div className="mx-auto">
            <FolderPlusIcon className="h-12 w-12 stroke-1 text-gray-400" />
          </div>
          <div className="mx-auto mt-2">
            <p className="text-gray-400">No files uploaded</p>
          </div>
        </div> */}

        <ul role="list" className="space-y-4 overflow-hidden mt-8">
          {people.map((person) => (
            <li
              key={person.email}
              className={`relative flex justify-between gap-x-6 px-4 py-5 sm:px-6 ${
                person.id === 1
                  ? "bg-green-400/10 border border-green-600 hover:bg-green-400/30"
                  : "bg-yellow-400/10 border border-yellow-600 hover:bg-yellow-400/30"
              } shadow-sm rounded-xl`}
            >
              <div className="flex min-w-0 gap-x-4">
                {/* <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={person.imageUrl}
                  alt=""
                /> */}
                {person.id === 1 ? (
                  <PhotoIcon className="h-6 w-6" />
                ) : (
                  <CommandLineIcon className="h-6 w-6" />
                )}
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
              <div className="flex shrink-0 items-center gap-x-8">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {person.role}
                  </p>
                  {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Copy link
                      {/* <time dateTime={person.lastSeenDateTime}>
                        {person.lastSeen}
                      </time> */}
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
                <XMarkIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
