import brandIcon from "../../assets/images/web-brand/icon-dog.webp";

export type linksType = {
  text: string;
};

export type brandContentType = {
  brandName: string;
  brandIconSrc: string;
  brandIconAlt: string;
};

export const links: linksType[] = [
  {
    text: "home",
  },
  {
    text: "products",
  },
  {
    text: "about",
  },
  {
    text: "support",
  },
  {
    text: "download",
  },
];

export const brandContent: brandContentType = {
  brandName: "Tincat",
  brandIconSrc: brandIcon,
  brandIconAlt: "Tincat brand icon",
};
