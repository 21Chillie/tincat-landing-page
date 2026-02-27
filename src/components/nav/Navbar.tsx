import { nanoid } from "nanoid";
import { brandContent, links, type linksType } from "./navigationContent.ts";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { UseGlobalContext } from "../../contexts/globalContext.tsx";

function Navbar() {
  const { isSidebarOpen, toggleSidebar } = UseGlobalContext();
  const { brandIconSrc, brandName, brandIconAlt } = brandContent;

  return (
    <header className="border-base-200 sticky top-0 z-1 border-b px-4 py-2 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-fit rounded-full bg-white p-1 shadow-sm">
            <img
              className="h-8 w-8"
              src={brandIconSrc}
              alt={brandIconAlt}
            />
          </div>

          <span className="text-3xl font-bold">{brandName}</span>
        </div>

        <ul className="hidden md:flex">
          {links.map((link) => {
            return <NavLinks key={nanoid()} {...link}></NavLinks>;
          })}
        </ul>

        <a className="hidden md:block" href="#">
          <button
            className="btn btn-circle btn-accent px-10 font-bold"
            type="button"
          >
            Login
          </button>
        </a>

        <button
          type="button"
          className="btn btn-square btn-ghost grid place-items-center text-2xl md:hidden"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <IoClose></IoClose> : <LuMenu></LuMenu>}
        </button>
      </nav>
    </header>
  );
}

function NavLinks({ text }: linksType) {
  return (
    <>
      <li>
        <a className="btn btn-ghost text-base capitalize" href="#">
          {text}
        </a>
      </li>
    </>
  );
}

export default Navbar;
