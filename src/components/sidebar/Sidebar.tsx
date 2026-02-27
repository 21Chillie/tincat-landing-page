import { nanoid } from "nanoid";
import { links } from "../../contexts/navlinks";
import { UseGlobalContext } from "../../contexts/globalContext";

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = UseGlobalContext();

  return (
    <>
      <div
        className={`fixed inset-0 z-2 bg-black/30 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-base-100 absolute z-3 h-screen transition-transform`}
      >
        <nav className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="w-fit rounded-full bg-white p-1 shadow-sm">
              <img
                className="h-8 w-8"
                src="/images/web-brand/icon-dog.webp"
                alt="navbar brand"
              />
            </div>

            <span className="text-3xl font-bold">Tincat</span>
          </div>

          <ul>
            {links.map((link) => {
              const { text } = link;

              return (
                <li className="w-52" key={nanoid()}>
                  <a
                    className="active:bg-base-200 block rounded-md py-2 capitalize transition-all active:px-2"
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
