import { nanoid } from "nanoid";
import { links } from "./navigationContent";
import { UseGlobalContext } from "../../contexts/globalContext";
import { brandContent } from "./navigationContent";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = UseGlobalContext();
  const { brandIconSrc, brandIconAlt, brandName } = brandContent;

  return (
    <>
      <div
        className={`fixed inset-0 z-2 bg-black/30 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "pointer-events-none block opacity-0 md:hidden"}`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-base-100 fixed z-3 block h-screen transition-transform md:hidden`}
      >
        <nav className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="w-fit rounded-full bg-white p-1 shadow-sm">
              <img className="h-8 w-8" src={brandIconSrc} alt={brandIconAlt} />
            </div>

            <span className="text-3xl font-bold">{brandName}</span>
          </div>

          <ul>
            {links.map((link) => {
              const { text } = link;

              return (
                <li className="w-52" key={nanoid()}>
                  <a
                    className="active:bg-base-200 block rounded-full py-2 capitalize transition-all active:px-4"
                    href="#"
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
