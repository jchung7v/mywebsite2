import "@/styles/globals.css";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import VisitorCounter from "./component/VisitorCounter";

export default function App({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav className="w-full bg-stone-200 fixed top-0 z-10">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="/">
                  <h2 className="text-2xl text-gray-600 font-bold">JC</h2>
                </Link>
                <button
                  className="p-2 text-gray-700 rounded-md focus:border-gray-400 focus:border md:hidden"
                  onClick={handleClick}
                >
                  {menuOpen ? (
                    <Image
                      src="/close.svg"
                      width={30}
                      height={30}
                      alt="close"
                    />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>

            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  menuOpen ? "md:p-0 block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center md:h-auto md:flex ">
                  <li className="text-xl text-gray-600 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-orange-700 md:hover:text-orange-700">
                    <Link href="#aboutme" scroll={false}>
                      About Me
                    </Link>
                  </li>
                  <li className="text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0 hover:text-orange-700 md:hover:text-orange-700">
                    <Link href="#technical" scroll={false}>
                      Technical
                    </Link>
                  </li>
                  <li className="text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0 hover:text-orange-700 md:hover:text-orange-700">
                    <Link href="#education" scroll={false}>
                      Education
                    </Link>
                  </li>
                  <li className="text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0 hover:text-orange-700 md:hover:text-orange-700">
                    <Link href="#project" scroll={false}>
                      Project
                    </Link>
                  </li>
                  <li className="text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0 hover:text-orange-700 md:hover:text-orange-700">
                    <Link href="#experience" scroll={false}>
                      Experience
                    </Link>
                  </li>
                  <li className="text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0 hover:text-orange-700 md:hover:text-orange-700">
                    <Link href="#contact" scroll={false}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer
        id="contact"
        className="py-4 w-full bg-stone-200 bottom-0 left-0 right-0 z-10"
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex justify-items-left gap-5">
              <Link href="">
                <img src="/mail.svg" alt="mail" className="w-8 h-8"></img>
              </Link>
              <Link href="">
                <img src="/website.svg" alt="website" className="w-8 h-8"></img>
              </Link>
              <Link href="">
                <img
                  src="/linkedin.svg"
                  alt="linkedin"
                  className="w-8 h-8"
                ></img>
              </Link>
              <Link href="">
                <img src="/github.svg" alt="github" className="w-8 h-8"></img>
              </Link>
            </div>
            <p className="text-l mt-5">
              This website is built with Next.js and Tailwind CSS, and hosted on
              Azure Serverless Infrastructure.
            </p>
            <VisitorCounter />
          </div>
        </div>
      </footer>
    </>
  );
}
