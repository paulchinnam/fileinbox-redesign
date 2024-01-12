// import { ChevronRightIcon } from "@heroicons/react/20/solid";
// import Link from "next/link";

// const pages = [
//   {
//     url: "This is a cool page",
//   },
//   {
//     url: "This page isn't as cool",
//   },
//   {
//     url: "Scoop di poop",
//   },
//   {
//     url: "Poopidi scoop",
//   },
//   {
//     url: "Mewow",
//   },
//   {
//     url: "ROTITI",
//   },
// ];

// export default function Pages() {
//   return (
//     <ul
//       role="list"
//       className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
//     >
//       {pages.map((page) => (
//         <li
//           key={page.email}
//           className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
//         >
//           <div className="flex min-w-0 gap-x-4">
//             {/* <img
//               className="h-12 w-12 flex-none rounded-full bg-gray-50"
//               src={page.imageUrl}
//               alt=""
//             /> */}
//             <div className="flex">
//               <p className="pr-2 font-light">URL: </p>
//               <Link href="/" className="hover:underline hover:text-indigo-600">
//                 {page.url}
//               </Link>
//             </div>
//             {/* <div className="min-w-0 flex-auto">
//               <p className="text-sm font-semibold leading-6 text-gray-900">
//                 <a href={page.href}>
//                   <span className="absolute inset-x-0 -top-px bottom-0" />
//                   {page.name}
//                 </a>
//               </p>
//               <p className="mt-1 flex text-xs leading-5 text-gray-500">
//                 <a
//                   href={`mailto:${page.email}`}
//                   className="relative truncate hover:underline"
//                 >
//                   {page.email}
//                 </a>
//               </p>
//             </div> */}
//           </div>
//           <div className="flex shrink-0 items-center gap-x-4">
//             <a href="/">Edit</a>
//             <a href="/">Delete</a>
//             {/* <div className="hidden sm:flex sm:flex-col sm:items-end">
//               <p className="text-sm leading-6 text-gray-900">{page.role}</p>
//               {page.lastSeen ? (
//                 <p className="mt-1 text-xs leading-5 text-gray-500">
//                   Last seen{" "}
//                   <time dateTime={page.lastSeenDateTime}>{page.lastSeen}</time>
//                 </p>
//               ) : (
//                 <div className="mt-1 flex items-center gap-x-1.5">
//                   <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                     <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                   </div>
//                   <p className="text-xs leading-5 text-gray-500">Online</p>
//                 </div>
//               )}
//             </div>
//             <ChevronRightIcon
//               className="h-5 w-5 flex-none text-gray-400"
//               aria-hidden="true"
//             /> */}
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

const people = [
  {
    name: "Page1",
    title: "fileinbox.com/paul1",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Page2",
    title: "fileinbox.com/paul2",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Page3",
    title: "fileinbox.com/paul3",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Pages() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              {/* <h3 className="truncate text-sm font-medium text-gray-900">
                something{" "}
              </h3> */}
              <input
                type="text"
                className="block w-full px-2 rounded-md bg-gray-50 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Upload page title"
              />
              {/* <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span> */}
            </div>
            {/* <a className="mt-1 truncate text-sm text-blue-500 underline">
              something{" "}
            </a> */}
            <div className="mt-2 flex rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                fileinbox.app/
              </span>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="px-2 block w-full bg-gray-50 min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="upload-page-url"
              />
            </div>
          </div>
          {/* <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              src={person.imageUrl}
              alt=""
            /> */}
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a className="hover:bg-gray-100 relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <PlusCircleIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Create Page
              </a>
            </div>
            {/* <div className="-ml-px flex w-0 flex-1">
              <a className="hover:bg-gray-100 relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <Cog6ToothIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Settings
              </a>
            </div> */}
          </div>
        </div>
      </li>
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow h-fit"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {person.name}
                </h3>
                {/* <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span> */}
              </div>
              <div className="flex gap-1 items-center">
                <a className="mt-1 truncate text-sm text-blue-500 underline">
                  {person.title}
                </a>
                <ClipboardDocumentIcon className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            {/* <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              src={person.imageUrl}
              alt=""
            /> */}
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="hover:bg-gray-100 relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <ChatBubbleBottomCenterTextIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Responses
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="hover:bg-gray-100 relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <Cog6ToothIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Settings
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
