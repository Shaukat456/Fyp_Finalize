import React, { useEffect, useRef, useState } from "react";
import style from "../components/Navbar.module.css";
import Image from "next/image";
const Navbar = ({ Sidebar }) => {
  const reference = useRef(null);

  const [window, setWindow] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindow(window);
    }
  }, []);

  if (window) {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (90 > currentScrollPos) {
        reference.current.classList.add("py-4");
      } else {
        reference.current.classList.remove("py-4");
      }
    };
  }
  // const sidebar= useRef(null)
  // useEffect(()=>{
  //   // localStorage.setItem("sidebar_State", "hidden")

  // },[])

  return (
    <>
      <div
        ref={reference}
        className="  bgover body-font NavOver fixed z-50 w-[110vw] bg-transparent   text-gray-600 bg-blend-lighten backdrop-blur-sm transition-all hover:bg-blend-darken sm:w-[101vw] lg:w-5/6 "
      >
        <div className="animSide flex items-center justify-center overflow-hidden sm:flex-row sm:px-5 sm:py-8  md:mx-auto md:justify-start md:justify-between     ">
          {/* hamburger menu icon */}
          <div className="flex">
            {/* <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" h-6 w-6 cursor-pointer hover:scale-125 "
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                </button> */}
          </div>

          <span className="mt-4 flex items-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start md:justify-center ">
            <a className="ml-3 cursor-pointer rounded-xl text-gray-500 transition-all hover:scale-125 hover:bg-slate-200 hover:transition-all">
              <figure className={style.trs}></figure>
            </a>

            <a className="ml-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 cursor-pointer rounded-xl transition-all hover:scale-125 hover:bg-slate-200 hover:transition-all "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 cursor-pointer rounded-xl transition-all hover:scale-125 hover:bg-slate-200 hover:transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
            </a>
            <a href="">
              <figure>
                <img
                  width={30}
                  src="avatar.png"
                  alt=""
                  className="cursor-pointer rounded-2xl transition-all hover:scale-125 hover:transition-all "
                />
              </figure>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;