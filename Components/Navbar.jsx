'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScroll, setLastScroll] = useState(0) 
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScroll) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScroll]);

  return (
    <header
      className={`${show}  bg-black sticky top-0 z-40 border-gray-700 border`}
    >
      <div className="mx-auto max-w-screen-xl p-2 sm:p-4">
        <div className="flex relative items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a
              href="#"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2  rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-white text-xl">Nextland</span>
            </a>
          </div>

          <nav className="hidden gap-8 text-base font-medium md:flex">
            <Link  className="text-gray-400 hover:text-[#ff0080] transition-all ease-in-out duration-300" href="#section-1">
              Home
            </Link>
            <Link className="text-gray-400 hover:text-[#ff0080] transition-all ease-in-out duration-300" href="#section-9">
              Blog
            </Link>
            <Link className="text-gray-400 hover:text-[#ff0080] transition-all ease-in-out duration-300" href="#section-3">
              Projects
            </Link>
            <Link className="text-gray-400 hover:text-[#ff0080] transition-all ease-in-out duration-300" href="#section-11">
              Contact
            </Link>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <a
              className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
              href=""
            >
              Log in
            </a>

            <a
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
              href=""
            >
              Sign up
            </a>
          </div>

          <div className="lg:hidden">
            <button

              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
