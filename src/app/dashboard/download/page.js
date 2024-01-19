import {
  ArrowDownCircleIcon,
  ChevronRightIcon,
  ClipboardDocumentIcon,
  ClipboardIcon,
} from "@heroicons/react/20/solid";
import {
  PhotoIcon,
  CommandLineIcon,
  FolderPlusIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
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

  return (
    <>
      <div className="h-screen">
        <main className="bg-white shadow-md ring-1 ring-gray-200 p-10 rounded-md">
          <div className="w-full flex justify-end mb-6">
            <button className="rounded-md flex items-center gap-1 text-white bg-green-500 px-4 py-1.5 hover:bg-green-600">
              <ArrowDownCircleIcon className="h-4 w-4" />
              <p className="text-sm">Download all</p>
            </button>
          </div>
          <ul
            role="list"
            className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
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

                    <div className="flex items-center gap-2">
                      {/* <p className="text-sm text-gray-400">remove</p> */}
                      <ArrowDownCircleIcon className="h-5 w-5 text-gray-400" />
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
        </main>
      </div>
    </>
  );
}
