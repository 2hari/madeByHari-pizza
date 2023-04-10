import React from 'react'
import Image from "next/image"
import Button from "./shared/Button"

import useMediaQuery from "@/hooks/useMediaQuery"

function Chefs() {
  const isXl = useMediaQuery("(min-width:1280px)")
  return (
    <section className="max-w-[1240px] mx-auto mb-12">
      <h2 className="text-center xl:text-left text-2xl xl:text-4xl mb-6 xl:mb-12">Our Talened Chefs</h2>
      <div className="flex flex-col items-center xl:flex-row justify-between px-5 xl:px-0">
          {
            [1,2,3].map((i) => {
              return (
                <div key={i} className="border border-dashed	border-[#DCDBDB] rounded-[20px] mb-3 xl:mb-0 max-w-[335px] xl:max-w-none">
                  <div className="flex justify-around">
                    <Image
                      src="/assets/chef.png"
                      height={isXl ? 376 : 375}
                      width={isXl ? 355 : 287}
                      alt="chef"
                      className="m-6"
                    />
                  </div>
                <div className="text-center mx-6 mb-6">
                  <h4 className="text-black text-xl mb-3">John D.</h4>
                  <p className="text-gray-100 text-xs xl:text-sm">evrything we pizza, we pizza with love. designer fasrfood</p>
                </div>
                <div className="mb-6 flex justify-around">
                  <Button text="Chef" includeIcon={false} color="bg-primary" textColor="text-white" padding="px-6 py-3" />
                </div>
                <div className="flex justify-around mb-6">
                  <div className="flex space-x-4">
                    <a href="#"><Image
                      src="/assets/vector-1.svg"
                      height={24}
                      width={24}
                      alt="social media"
                    /></a>
                    <a href=""><Image
                      src="/assets/Twitter-logo-1.svg"
                      height={24}
                      width={24}
                      alt="social media"
                    /></a>
                    <a href="#"> <Image
                      src="/assets/facebook-logo1-1.svg"
                      height={24}
                      width={24}
                      alt="social media"
                    /></a>
                    <a href=""><Image
                      src="/assets/youtube.svg"
                      height={24}
                      width={24}
                      alt="social media"
                    /></a>
                  </div>
                </div>
                </div>
              )
            })
          }
      </div>
    </section>
  )
}

export default Chefs