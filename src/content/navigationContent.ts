export type SubLinkType = {
  text: string;
  href: string;
};

export type LinksType = {
  heading: string;
  links: SubLinkType[];
};



export const links: LinksType[] = [
  {
    heading: "Product",
    links: [
      { text: "Features", href: "#" },
      { text: "Pricing", href: "#" },
      { text: "Download", href: "#" },
      { text: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Blog",
    links: [
      { text: "Cat Dating Tips", href: "#" },
      { text: "Success Stories", href: "#" },
      { text: "Cat Care Guide", href: "#" },
      { text: "Community Stories", href: "#" },
    ],
  },
  {
    heading: "Career",
    links: [
      { text: "Open Positions", href: "#" },
      { text: "Culture", href: "#" },
      { text: "Benefits", href: "#" },
      { text: "Internships", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { text: "Help Center", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "Live Chat", href: "#" },
      { text: "Community", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "Press Kit", href: "#" },
      { text: "Partners", href: "#" },
    ],
  },
];


