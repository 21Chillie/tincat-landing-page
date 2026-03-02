export type SubLinkType = {
  text: string;
  href: string;
};

export type LinksType = {
  heading: string;
  links: SubLinkType[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
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

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "#",
    icon: <span className="bg-base-content/20 block h-5 w-5 rounded" />,
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: <span className="bg-base-content/20 block h-5 w-5 rounded" />,
  },
  {
    label: "TikTok",
    href: "#",
    icon: <span className="bg-base-content/20 block h-5 w-5 rounded" />,
  },
  {
    label: "Facebook",
    href: "#",
    icon: <span className="bg-base-content/20 block h-5 w-5 rounded" />,
  },
  {
    label: "Github",
    href: "#",
    icon: <span className="bg-base-content/20 block h-5 w-5 rounded" />,
  },
];
