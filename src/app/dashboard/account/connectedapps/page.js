import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import dropbox from "public/dropbox.svg";
import googledrive from "public/googledrive.svg";
import zapier from "public/zapier.svg";

export default function Page() {
  const people = [
    {
      name: "Dropbox",
      email:
        "Automatically send data from this Fileinbox Upload Page to your Dropbox.",
      role: "Co-Founder / CEO",
      imageUrl: dropbox,
      href: "#",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Google Drive",
      email:
        "Automatically send data from this Fileinbox Upload Page to your Google Drive.",
      role: "Co-Founder / CTO",
      imageUrl: googledrive,
      href: "#",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Zapier",
      email: "Coming soon",
      role: "Business Relations",
      imageUrl: zapier,
      href: "#",
      lastSeen: null,
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Available Integrations
          </h2>
          <ul
            role="list"
            className="mt-6 divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
              >
                <div className="flex min-w-0 gap-x-4">
                  <Image
                    className="h-12 w-12 flex-none"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      <a href={person.href}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {person.name}
                      </a>
                    </p>
                    <div className="mt-1 flex text-xs leading-5 text-gray-500">
                      <p className="relative truncate">{person.email}</p>
                    </div>
                    {person.name === "Dropbox" ? (
                      <p className="text-xs max-w-lg italic pt-2">
                        {`You can also connect Fileinbox to Apps/fileinbox instead
                        of your full Dropbox folder to limit what Fileinbox can
                        access in your Dropbox. Note that Dropbox doesn't allow
                        sharing of files in the Apps folder.`}
                      </p>
                    ) : (
                      <></>
                    )}
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
                  <button className="ring-1 ring-gray-200 rounded-md px-4 py-1.5 text-sm">
                    {person.name === "Zapier" ? "Request" : "Connect"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
