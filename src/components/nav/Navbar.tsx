import { links, type LinksType } from "../../content/navigationContent";

import { brandContent } from "../../content/brandContent.ts";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { UseGlobalContext } from "../../contexts/globalContext.tsx";

function Navbar() {
  const { isSidebarOpen, toggleSidebar } = UseGlobalContext();
  const { brandIconSrc, brandName, brandIconAlt } = brandContent;

  return (
    <header className="sticky top-0 z-2 px-4 py-2 shadow-md backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/">
          <div className="flex items-center gap-2">
            <div className="bg-base-300 w-fit rounded-full p-1 shadow-sm">
              <img className="h-8 w-8" src={brandIconSrc} alt={brandIconAlt} />
            </div>

            <span className="text-3xl font-bold">{brandName}</span>
          </div>
        </a>

        <ul className="hidden lg:flex">
          {links.map((link) => {
            return <NavLinks key={link.heading} {...link}></NavLinks>;
          })}
        </ul>

        <a className="hidden lg:block" href="#">
          <button
            className="btn btn-circle btn-soft px-10 font-bold"
            type="button"
          >
            Login
          </button>
        </a>

        <button
          type="button"
          aria-label="open menu"
          aria-controls="sidebar"
          className="btn btn-square btn-ghost grid place-items-center text-2xl lg:hidden"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <IoClose></IoClose> : <LuMenu></LuMenu>}
        </button>
      </nav>
    </header>
  );
}

function NavLinks({ heading }: LinksType) {
  const { setSubLinkId } = UseGlobalContext();

  return (
    <>
      <li>
        <button
          className="hover:bg-accent-content hover:text-accent rounded-full px-5 py-3 text-base font-medium capitalize transition-colors duration-300"
          type="button"
          onMouseEnter={() => setSubLinkId(heading)}
        >
          {heading}
        </button>
      </li>
    </>
  );
}

export default Navbar;
