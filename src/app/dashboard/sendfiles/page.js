import { FolderPlusIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: null,
  },
];

export default function Page() {
  return (
    <>
      <main className="bg-white shadow-md ring-1 ring-blue-500 p-10 rounded-md">
        <button
          type="button"
          className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
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
            className="text-sm mt-6 px-4 py-1.5 rounded-md bg-blue-400 text-white hover:bg-blue-600"
          >
            Click to upload
          </button>
        </button>

        <h1 className="pt-12 font-semibold">Uploaded files</h1>
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
              className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 bg-gray-50 shadow-sm rounded-xl"
            >
              <div className="flex min-w-0 gap-x-4">
                {/* <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={person.imageUrl}
                  alt=""
                /> */}
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
                <div className="hidden sm:flex sm:flex-col sm:items-end">
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
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )}
                </div>
                <ChevronRightIcon
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
