import GuidesHeader from "@/app/components/GuidesHeader";

const posts = [
  {
    id: 1,
    title: "We transfer alternative",
    href: "#",
    description:
      "WeTransfer is a free file-sending service. To send and receive files from non-tech-savvy clients then there's a much more professional and secure alternative.",
    imageUrl:
      "https://res.cloudinary.com/genco/image/upload/w_1200/v1657726874/c/cee9.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Yousendit Alternative",
    href: "#",
    description:
      "Yousendit was a file transfer service that rebranded to Hightail in 2013. If the main thing you're trying to do is <b>request files</b> from non-tech-savvy",
    imageUrl:
      "https://res.cloudinary.com/genco/image/upload/w_1200/v1657726437/c/RSZU.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Alternative to Citrix Sharefile",
    href: "#",
    description:
      "Citrix Sharefile is a big, complicated tool. If the main thing you're trying to do is <b>request files</b> from non-tech-savvy clients, there's a much easier.",
    imageUrl: "https://i.imgur.com/GXd6OKo.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Receive Large Files to a File Upload Website",
    href: "#",
    description:
      "Would you like a file upload website that will let anyone send you files with a simple drag-and-drop? Do you already have a website and you'd like to add an ",
    imageUrl: "https://i.imgur.com/LYds5He.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Upload File Form—receive files in Dropbox, Google Drive, and more",
    href: "#",
    description:
      "Creating HTML forms with file uploads from scratch is more complicated and risky than creating a form that just uploads text. You'll need to make sure you",
    imageUrl:
      "https://res.cloudinary.com/genco/image/upload/w_1200/v1657742824/c/hePn.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Dropbox File Request Alternative",
    href: "#",
    description:
      "Dropbox File Requests let you collect files from people in a Dropbox folder. It's usually used by people to receive files from friends and family. If you'",
    imageUrl:
      "https://res.cloudinary.com/genco/image/upload/w_1200/v1657727061/c/ds3y.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Dropittome Alternatives",
    href: "#",
    description:
      "Dropittome was a simple free service that allowed anyone to upload files to your Dropbox, Google Drive, or Microsoft OneDrive. It was made by the Finnish con",
    imageUrl: "https://i.imgur.com/nXyTfZB.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "The Ultimate Guide to Dropbox File Requests",
    href: "#",
    description:
      "Instead of dealing with email attachments, faxes, text messages, USB sticks, and physical pieces of paper, a Dropbox File Request gives you a simple upload p",
    imageUrl: "https://i.imgur.com/4aIymTy.jpg",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Google Drive File Requests",
    href: "#",
    description:
      "Would you like to anonymously receive files to a folder in your Google Drive, similar to how [Dropbox File Requests](https://fileinbox.com/dropbox-file-reque",
    imageUrl: "https://i.imgur.com/UgTUm2o.png",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Page() {
  return (
    <div className="mb-10">
      {/* <GuidesHeader /> */}
      <div className="py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-blue-500">
              Need help receiving large files? File inbox has you covered.
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Check out these guides for help.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {`If you don't find what you're looking for here reach out to`}{" "}
              <a className="text-blue-400 underline">@cgenco</a>
              {` on twitter and
              he'll write up a new guide for you.`}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl ">
        {/* <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div> */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/9]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  {/* <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time> */}
                  {/* <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a> */}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                {/* <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
