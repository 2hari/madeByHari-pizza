import React from 'react'
import Button from "./shared/Button"
import Image from "next/image"

import useMediaQuery from "@/hooks/useMediaQuery"

function Footer() {
  const isXl = useMediaQuery("(min-width:1280px)")
  return (
    <footer >
      <div className="max-w-[1240px] mx-auto px-5 xl:px-0">
        <div className="text-center mb-6 xl:mb-12">
          <h2 className="font-bold text-3xl xl:text-5xl mb-2 xl:mb-6">Subscribe to newsletter</h2>
          <p className="text-gray-100 text-base xl:text-xl">Subscrible to recive our weekly hot promotion every monday!</p>
        </div>
        <div className="flex justify-around mb-6 xl:mb-24">
          <div className="flex items-center border border-soilid border-[#DCDBDB] rounded-[20px] w-full max-w-[840px] p-2">
            <input type="text" placeholder="Enter your Email" className="flex-1 xl:px-12 placeholder:text-gray-100 placeholder:text-xl focus:outline-none py-2 xl:py-4"/>
            <Button includeIcon={false} text="Sign Up" textColor="text-white" color="bg-primary" padding="xl:px-12 xl:py-4 py-3" borderRadius="20px"/>
          </div>
        </div>
        <div className="hidden xl:flex items-center space-x-4 mb-6">
          <div className="flex-grow border-t border-[#DCDBDB]"></div>
          <div className="flex-shrink flex items-center">
            <Image
              src="/assets/Food-Pizza.svg"
              height={48}
              width={48}
              alt="Logo"
            />
            <span className="uppercase font-bold text-4xl ml-2">PIZZAPIZZA</span>
          </div>
          <div className="flex-grow border-t border-[#DCDBDB]"></div>
        </div>
        <div className="hidden xl:flex justify-between pb-12">
          <div><p>Copyright © 2022. All Right Reserved.</p></div>
          <div><p className="text-sm">Lorem ipsum dolor sit amet.</p></div>
          <div className="flex items-center">
            <span className="text-xl mr-2">follow us</span>
            <div className="flex space-x-4">
              <a href="#">
                <Image
                  src="/assets/vector-6.svg"
                  height={24}
                  width={24}
                  alt="social media"
                />
              </a>
              <a href="#"><Image
                src="/assets/Twitter-logo-6.svg"
                height={24}
                width={24}
                alt="social media"
              /></a>
              <a href="#"><Image
                src="/assets/facebook-logo1-6.svg"
                height={24}
                width={24}
                alt="social media"
              /></a>
              <a href="#"><Image
                src="/assets/youtube-1.svg"
                height={24}
                width={24}
                alt="social media"
              /></a>
              
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="flex xl:hidden justify-around border-y border-gray-100">
          <div className="flex items-center py-6">
            <Image
                src="/assets/Food-Pizza.svg"
                height={isXl ? 48 : 24}
                width={isXl ? 48 : 24}
                alt="Logo"
              />
            <span className="uppercase font-bold text-2xl xl:text-4xl ml-2">PIZZAPIZZA</span>
          </div>
        </div>
        <p className="xl:hidden text-sm py-6 text-center">Copyright © 2022. All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer