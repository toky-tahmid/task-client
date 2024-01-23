import { Typography } from "@material-tailwind/react";
const Footer = () => {
  const LINKS = [
    {
      title: "Product",
      items: ["Overview", "Features", "Solutions",],
    },
    {
      title: "Social Media",
      items: [
        { name: "Instagram", url: "https://www.instagram.com/" },
        { name: "Linkedin", url: "https://www.linkedin.com/" },
        { name: "Facebook", url: "https://www.facebook.com/ucasupport" },
      ],
    },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-gray-900 pt-16  m-5 rounded-[3rem]">
      <div className="mx-auto w-full px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6 text-neutral-400">
            <img
              className="h-44 ml-10 "
              src="https://i.ibb.co/8xcWfMN/UCA-SUPPORT-3.png"
              alt="UCA support"
            />
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-8">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-80 text-neutral-300"
                >
                  {title}
                </Typography>
                {title === "Social Media"
                  ? items.map(({ name, url }) => (
                      <li key={name}>
                        <Typography
                          as="a"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="gray"
                          className="py-1.5 w-0 font-normal transition-colors text-neutral-500 hover:text-slate-600"
                        >
                          {name}
                        </Typography>
                      </li>
                    ))
                  : items.map((link) => (
                      <li key={link}>
                        <Typography
                          as="a"
                          href="#"
                          color="gray"
                          className="py-1.5 w-0 font-normal transition-colors text-neutral-500 hover:text-slate-600"
                        >
                          {link}
                        </Typography>
                      </li>
                    ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 mx-auto py-4 md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-neutral-400 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="">Made by Astra Solution</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
