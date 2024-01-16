export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          {/* <p className="mt-1 text-sm leading-6 text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p> */}

          <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
            <div className="pt-6 sm:flex">
              <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Full name
              </dt>
              <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue="Tom Cook"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                  placeholder="Your full name"
                />{" "}
                {/* <button
                      type="button"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Update
                    </button> */}
              </dd>
            </div>
            <div className="pt-6 sm:flex">
              <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Email address
              </dt>
              <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div className="text-gray-900">tom.cook@aol.com</div>
                {/* <button
                      type="button"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Update
                    </button> */}
              </dd>
            </div>
            {/* <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Title
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">Human Resources Manager</div>
                    <button
                      type="button"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Update
                    </button>
                  </dd>
                </div> */}
          </dl>
        </div>

        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Billing
          </h2>
          {/* <p className="mt-1 text-sm leading-6 text-gray-500">
                Connect bank accounts to your account.
              </p> */}

          {/* <ul
                role="list"
                className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    TD Canada Trust
                  </div>
                  <button
                    type="button"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Update
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    Royal Bank of Canada
                  </div>
                  <button
                    type="button"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Update
                  </button>
                </li>
              </ul> */}

          <div className="flex border-t border-gray-100 pt-6 mt-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white hover:bg-blue-500 bg-blue-400 px-4 py-1.5 rounded-md"
            >
              Open billing portal
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Delete my account
          </h2>
          {/* <p className="mt-1 text-sm leading-6 text-gray-500">
                Connect bank accounts to your account.
              </p> */}

          {/* <ul
                role="list"
                className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    TD Canada Trust
                  </div>
                  <button
                    type="button"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Update
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    Royal Bank of Canada
                  </div>
                  <button
                    type="button"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Update
                  </button>
                </li>
              </ul> */}

          <div className="flex border-t border-gray-100 pt-6 mt-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white hover:bg-red-600 bg-red-500 px-4 py-1.5 rounded-md"
            >
              Permanently delete my account and data
            </button>
          </div>
        </div>

        {/* <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Delete my account
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Connect applications to your account.
              </p>

              <ul
                role="list"
                className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">QuickBooks</div>
                  <button
                    type="button"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Update
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                >
                  <span aria-hidden="true">+</span> Add another application
                </button>
              </div>
            </div> */}

        {/* <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Language and dates
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Choose what language and date format to use throughout your
                account.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Language
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">English</div>
                    <button
                      type="button"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Date format
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">DD-MM-YYYY</div>
                    <button
                      type="button"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <Switch.Group as="div" className="flex pt-6">
                  <Switch.Label
                    as="dt"
                    className="flex-none pr-6 font-medium text-gray-900 sm:w-64"
                    passive
                  >
                    Automatic timezone
                  </Switch.Label>
                  <dd className="flex flex-auto items-center justify-end">
                    <Switch
                      checked={automaticTimezoneEnabled}
                      onChange={setAutomaticTimezoneEnabled}
                      className={classNames(
                        automaticTimezoneEnabled
                          ? "bg-blue-600"
                          : "bg-gray-200",
                        "flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          automaticTimezoneEnabled
                            ? "translate-x-3.5"
                            : "translate-x-0",
                          "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </dd>
                </Switch.Group>
              </dl>
            </div> */}
      </div>
    </>
  );
}
