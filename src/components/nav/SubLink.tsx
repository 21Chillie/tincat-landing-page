import { UseGlobalContext } from "../../contexts/globalContext";
import { links } from "../../content/navigationContent";
import { useRef, type MouseEvent } from "react";

export function SubLink() {
  const { subLinkId, setSubLinkId } = UseGlobalContext();
  const currentSubLink = links.find((item) => item.heading === subLinkId);
  const subLinkContainer = useRef<HTMLDivElement>(null);

  const heading = currentSubLink?.heading;
  const subLinks = currentSubLink?.links;

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const subLink = subLinkContainer.current;

    if (!subLink) return;

    const { left, right, bottom } = subLink.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setSubLinkId(null);
    }
  };

  return (
    <aside
      className={`fixed inset-x-0 top-18 z-2 mx-auto hidden w-full max-w-7xl px-4 transition-all duration-200 lg:block ${
        subLinkId ? "" : "pointer-events-none"
      }`}
      onMouseEnter={() => setSubLinkId(subLinkId)}
      onMouseLeave={handleMouseLeave}
      ref={subLinkContainer}
    >
      <nav
        className={`bg-base-100 border-base-300 origin-top transform rounded-2xl border p-6 shadow-xl transition-all duration-300 ease-out ${
          subLinkId ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <h3 className="text-primary mb-3 text-lg font-semibold capitalize">
          {heading}
        </h3>

        <ul
          className={`${links?.length > 3 ? "grid-cols-3" : "grid-cols-1"} grid gap-x-2`}
        >
          {subLinks?.map((link, index) => {
            const { href, text } = link;

            return (
              <li key={index}>
                <a
                  href={href}
                  className="hover:bg-accent-content hover:text-accent flex items-center gap-4 rounded-full py-2 transition-all hover:px-4"
                >
                  {/* <span className="text-indigo-600">{icon}</span> */}
                  <p className="capitalize">{text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
