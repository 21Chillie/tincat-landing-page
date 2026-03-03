import {
  AiFillInstagram,
  AiFillDribbbleCircle,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";

export type SocialLinkType = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const footerContent = {
  description:
    "Finding love, one paw at a time. The world's first cat matchmaking app — because every cat deserves a soulmate.",
};

export const socialLinks: SocialLinkType[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/reskialamsyah_/",
    icon: <AiFillInstagram></AiFillInstagram>,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/reskialamsyah",
    icon: <AiFillDribbbleCircle></AiFillDribbbleCircle>,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@chillie9709",
    icon: <AiFillYoutube></AiFillYoutube>,
  },
  {
    label: "Github",
    href: "https://github.com/21Chillie",
    icon: <AiFillGithub></AiFillGithub>,
  },
];
