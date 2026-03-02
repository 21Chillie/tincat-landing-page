import { nanoid } from "nanoid";
import { links } from "../../content/navigationContent";
import { UseGlobalContext } from "../../contexts/globalContext";
import { brandContent } from "../../content/brandContent";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = UseGlobalContext();
  const { brandIconSrc, brandIconAlt, brandName } = brandContent;

  return (
    <>
      <div
        className={`fixed inset-0 z-3 block bg-black/30 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-base-100 fixed z-3 block h-screen transition-transform lg:hidden`}
      >
        <nav className="h-full overflow-y-auto p-4 md:p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="bg-base-300 w-fit rounded-full p-1 shadow-sm">
              <img className="h-8 w-8" src={brandIconSrc} alt={brandIconAlt} />
            </div>

            <span className="text-3xl font-bold">{brandName}</span>
          </div>

          <div role="menu">
            <ul className="space-y-4">
              {links.map((link) => {
                const { heading, links } = link;

                return (
                  <li className="w-52 md:w-64" key={nanoid()}>
                    <header className="mb-1">
                      <p className="text-lg font-medium capitalize md:font-bold">
                        {heading}
                      </p>
                    </header>

                    <div role="menu">
                      <ul className="">
                        {links.map((sub) => {
                          const { href, text } = sub;
                          return (
                            <li key={text}>
                              <a
                                className="text-accent hover:bg-accent-content block rounded-full py-1 transition-all hover:px-3"
                                href={href}
                              >
                                {text}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
