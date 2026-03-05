/**
 * Customization guide:
 * - You can customize: brandName, brandIconSrc, brandIconAlt.
 * - Do not customize: exported names (brandContent, brandContentType) and object keys.
 * - How: replace text values and/or import another image for brandIconSrc.
 */
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
