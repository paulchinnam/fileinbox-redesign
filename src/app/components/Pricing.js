"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Free",
    id: "tier-hobby",
    href: "#",
    price: "$0",
    description: "The essentials to provide your best work for clients.",
    features: ["20 MB/file", "10 files"],
    mostPopular: false,
  },
  {
    name: "Basic",
    id: "tier-freelancer",
    href: "#",
    price: "$29",
    description: "The essentials to provide your best work for clients.",
    features: [
      "300 MB/file",
      "10 GB total/month",
      "10 pages",
      "Edit pages",
      "Protect pages with an access code",
      "Embed Fileinbox on your website",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-startup",
    href: "#",
    price: "$99",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "1 GB/file",
      "999 GB total/month",
      "999 pages",
      "Edit pages",
      "Protect pages with an access code",
      "Embed Fileinbox on your website",
      "Custom theme for embedded upload form",
      "Upload each user's files to separate subfolders",
      "Priority support",
    ],
    mostPopular: true,
  },
  {
    name: "Business",
    id: "tier-enterprise",
    href: "#",
    price: "$249",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "1 GB/file",
      "999 GB total/month",
      "999 pages",
      "Edit pages",
      "Protect pages with an access code",
      "Embed Fileinbox on your website",
      "Custom theme for embedded upload form",
      "Upload each user's files to separate subfolders",
      "Priority support",
      "Change upload path",
      "Folder sharing",
      "CC upload notifications",
      "Add fields to upload form",
      "Whitelabel upload page",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  //   const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing plans for every use case
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that’s packed with the best features for
          engaging with your clients.
        </p>
        {/* <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? "bg-blue-500 text-white" : "text-gray-500",
                    "cursor-pointer rounded-full px-2.5 py-1"
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div> */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-blue-500"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? "text-blue-500" : "text-gray-900",
                  "text-lg font-semibold leading-8"
                )}
              >
                {tier.name}
              </h3>
              {/* <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p> */}
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {tier.name === "Free" ? "/forever" : "/month"}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-blue-500 text-white shadow-sm hover:bg-indigo-500"
                    : "text-blue-500 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                )}
              >
                Select plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-blue-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
