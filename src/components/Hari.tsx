import { useState, useRef, useEffect } from "react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})
const buttonClasses = `after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:transition-opacity hover:after:opacity-100 after:shadow-md dark:after:shadow-none`

const Hari = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!sidebarRef.current?.contains(e.target as Node)) {
        setShowSidebar(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <div className={`${inter.className} z-99 group fixed right-5 bottom-5`}>
      <div className="absolute rounded-full -inset-0.5 bg-gradient-to-r from-[#00e0f3] to-[#00e887] blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="relative z-30 peer h-16 w-16 rounded-full bg-black overflow-hidden"
      >
        <img
          src={"/H.svg"}
          height={64}
          width={64}
          alt="logo Hari"
          className="z-99 object-cover"
        />
      </button>

      <div
        className={`z-99 fixed top-0 ${
          showSidebar ? "left-0" : "-left-96"
        } h-screen w-9/12 sm:w-72 bg-[#0e1111] shadow-2xl ease-out delay-150 duration-200`}
        ref={sidebarRef}
      >
        <nav role="admin" className="py-4">
          <div className="relative overflow-y-auto overflow-x-hidden h-[95vh] flex flex-col justify-between">
            <div className="pt-6 px-3 border-b-2 border-gray-700 pb-8">
              <span className="text-gray-200  text-xl md:text-3xl 2xl:text-4xl">
                Hello! I&apos;m{" "}
                <span className="text-transparent text-xl md:text-3xl 2xl:text-4xl font-bold bg-clip-text bg-gradient-to-r from-[#00e0f3] to-[#00e887]">
                  Hari
                </span>
              </span>
              <p
                className={
                  "mt-3 max-w-2xl text-gray-200  md:text-lg 2xl:text-xl"
                }
              >
                I Built this website.
              </p>
            </div>
            <div className="px-3">
              <h3 className="text-gray-200  md:text-lg 2xl:text-xl font-bold mb-2">
                Project overview
              </h3>
              <p className="text-gray-200 ">
                Piza store landing page built with Next js, Tailwind & Headless
                UI in typescript.
              </p>
              <div className="mt-1 mb-16">
                <a
                  href="https://www.figma.com/file/Y7vwR5sCy0IfMENptqbKus/Pizza?type=design&node-id=0%3A1&t=DbAKDFUrLJts8ueN-1"
                  className="text-[#00e0f3]"
                >
                  Compare with Figma design
                </a>
              </div>
              <h3 className="text-gray-200  md:text-lg 2xl:text-xl font-bold mb-2">
                Tech Stack
              </h3>
              <div className="space-y-2">
                <img
                  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="TypeScript"
                />
                <img
                  src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                  alt="Next JS"
                />
                <img
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  alt="React"
                />
                <img
                  src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  alt="TailwindCSS"
                />
              </div>
            </div>
            <div className="px-3 border-t-2 border-gray-700 pt-8">
              <h3 className={`md:text-lg 2xl:text-xl text-white mb-6`}>
                Want to build somethings similiar ? Reach me out 👇
              </h3>

              <a
                href="https://www.upwork.com/workwith/keshavm3"
                className={`text-black text-2xl font-semibold w-full p-2   rounded-md flex items-center justify-around ${buttonClasses} bg-gradient-to-r from-[#00e0f3] to-[#00e887]`}
              >
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Hari
