// const stats = [
//   { name: "Photos", stat: "71,897" },
//   { name: "PDFs", stat: "58.16%" },
//   { name: "Documents", stat: "24.57%" },
//   { name: "Excel Sheets", stat: "24.57%" },
//   { name: "Videos", stat: "24.57%" },
//   { name: "Audio Files", stat: "24.57%" },
//   { name: "Power Points", stat: "24.57%" },
//   { name: "Other Things", stat: "24.57%" },
// ];

// export default function Stats() {
//   return (
//     <div className="bg-gradient-to-b from-blue-200 to-blue-100">
//       <div className="max-w-7xl mx-auto py-28">
//         <h3 className="text-3xl font-semibold leading-6 text-gray-900">
//           People using Fileinbox have received a lot of files
//         </h3>
//         <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
//           {stats.map((item) => (
//             <div
//               key={item.name}
//               className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
//             >
//               <dt className="truncate text-sm font-medium text-gray-500">
//                 {item.name}
//               </dt>
//               <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
//                 {item.stat}
//               </dd>
//             </div>
//           ))}
//         </dl>
//         <h3 className="text-3xl font-normal leading-6 text-gray-900 mt-10">
//           ... to be precise
//         </h3>
//       </div>
//     </div>
//   );
// }

// const stats = [
//   { id: 1, name: "Photos", value: "4,785,076 (11.7 TB)" },
//   { id: 2, name: "PDFs", value: "429,934 (1.4 TB)" },
//   { id: 3, name: "Documents", value: "246,212 (108.3 GB)" },
//   { id: 3, name: "Excel Sheets", value: "100,211 (76.4 GB)" },
//   { id: 3, name: "Videos", value: "95,335 (7.6 TB)" },
//   { id: 3, name: "Audio Files", value: "73,009 (1.4 TB)" },
//   { id: 3, name: "Power Points", value: "44,748 (375.3 GB)" },
//   { id: 3, name: "Other Things", value: "655,447 (19.5 TB)" },
// ];

// const stats = [
//   { name: "Photos", stat: "71,897" },
//   { name: "PDFs", stat: "58.16%" },
//   { name: "Documents", stat: "24.57%" },
//   { name: "Excel Sheets", stat: "24.57%" },
//   { name: "Videos", stat: "24.57%" },
//   { name: "Audio Files", stat: "24.57%" },
//   { name: "Power Points", stat: "24.57%" },
//   { name: "Other Things", stat: "24.57%" },
// ];

// export default function Example() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//           {stats.map((stat) => (
//             <div
//               key={stat.id}
//               className="mx-auto flex max-w-xs flex-col gap-y-4"
//             >
//               <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
//               <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//                 {stat.value}
//               </dd>
//             </div>
//           ))}
//         </dl>
//       </div>
//     </div>
//   );
// }

const stats = [
  { id: 1, name: "4,785,076 total", value: "11.7 TB of Photos" },
  { id: 2, name: "429,934 total", value: "1.4 TB of PDFs" },
  { id: 3, name: "246,212 total", value: "108.3 GB of Documents" },
  { id: 3, name: "100,211 total", value: "76.4 GB of Excel Sheets" },
  { id: 3, name: "95,335 total", value: "7.6 TB of Videos" },
  { id: 3, name: "73,009 total", value: "1.4 TB of Audio Files" },
  { id: 3, name: "44,748 total", value: "375.3 GB of Power Points" },
  { id: 3, name: "655,447 total", value: "19.5 TB of Other Things" },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              People using Fileinbox have received a lot of files
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              To be precise...
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 ring-1 shadow-md ring-gray-200 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col ring-1 ring-gray-200 bg-white p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
