const stats = [
  { name: "Photos", stat: "71,897" },
  { name: "PDFs", stat: "58.16%" },
  { name: "Documents", stat: "24.57%" },
  { name: "Excel Sheets", stat: "24.57%" },
  { name: "Videos", stat: "24.57%" },
  { name: "Audio Files", stat: "24.57%" },
  { name: "Power Points", stat: "24.57%" },
  { name: "Other Things", stat: "24.57%" },
];

export default function Stats() {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto py-28">
        <h3 className="text-3xl font-semibold leading-6 text-gray-900">
          People using Fileinbox have received a lot of files
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
        <h3 className="text-3xl font-normal leading-6 text-gray-900 mt-10">
          ... to be precise
        </h3>
      </div>
    </div>
  );
}
