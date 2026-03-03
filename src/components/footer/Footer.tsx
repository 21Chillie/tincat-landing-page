import { links } from "../../content/navigationContent";
import { socialLinks } from "../../content/footerContent";
import { brandContent } from "../../content/brandContent";
import { footerContent } from "../../content/footerContent";

export function Footer() {
  const { brandIconAlt, brandIconSrc, brandName } = brandContent;
  const { description } = footerContent;

  return (
    <footer className="bg-base-300 px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-base-200 w-fit rounded-full p-1 shadow-sm">
                <img
                  className="h-8 w-8"
                  src={brandIconSrc}
                  alt={brandIconAlt}
                />
              </div>
              <span className="text-2xl font-bold">{brandName}</span>
            </div>
            <p className="text-base-content/80 mb-6 max-w-xs text-sm leading-relaxed">
              {description}
            </p>

            <ul
              className="flex flex-wrap gap-3"
              aria-label="Social media links"
            >
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="btn btn-ghost btn-sm btn-square bg-base-200 text-xl"
                    target="_blank"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {links.map((section) => (
            <nav key={section.heading} aria-label={`${section.heading} links`}>
              <h3 className="mb-3 text-sm font-semibold">{section.heading}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-base-content/70 hover:text-base-content text-sm transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-base-content/70 text-sm">
            © {new Date().getFullYear()} TinCat. All rights reserved. Design by{" "}
            <a
              className="text-accent font-bold underline"
              href="https://github.com/21Chillie"
              target="_blank"
            >
              @Chillie
            </a>
          </p>
          <ul
            className="flex flex-wrap justify-center gap-4 sm:justify-end"
            aria-label="Legal links"
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (text) => (
                <li key={text}>
                  <a
                    href="#"
                    className="text-base-content/80 hover:text-base-content text-sm transition-colors"
                  >
                    {text}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
