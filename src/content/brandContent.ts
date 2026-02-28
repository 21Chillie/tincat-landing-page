import brandIcon from "../assets/images/web-brand/icon-dog.webp";

export type brandContentType = {
  brandName: string;
  brandIconSrc: string;
  brandIconAlt: string;
};

export const brandContent: brandContentType = {
  brandName: "Tincat",
  brandIconSrc: brandIcon,
  brandIconAlt: "Tincat brand icon",
};
