const testimonials = [
  {
    body: "We love Fileinbox - you have no idea how great it's been for our business. We no longer have to track down email attachments and faxes, and everything the customer does on their end is very simple - it's much more streamlined than anything we've ever had.",
    author: {
      name: "Marie and Rick Elmendorf",
      handle: "Caliber Home Loans",
      imageUrl: "https://i.imgur.com/i5vtBec.png",
    },
  },
  {
    body: "Fileinbox is perfect. Too often I've had multiple people uploading files at the same time and I had to sort out the files to figure out where each came from. I just upgraded to Pro, and love it.",
    author: {
      name: "Scott DeLuzio",
      handle: "Surprise AZ Web Services",
      imageUrl: "https://i.imgur.com/51OpsFB.jpg",
    },
  },
  {
    body: "Fileinbox empowers lawyers, accountants, and other professionals to receive digital content from clients without burdensome login requirements. Now, with plans for streamlined integrations with popular CMS and site-building software, Fileinbox is continuing to simplify the customer experience.",
    author: {
      name: "Christine Preusler",
      handle: "HostingAdvice",
      imageUrl: "https://i.imgur.com/ZALtOtZ.jpg",
    },
  },
];

export default function Reviews() {
  return (
    <div className="bg-white py-16 sm:py-16 border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Reviews
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We've worked with lots of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
