import React from 'react'
import Navbar from "./shared/Navbar"
import Image from "next/image"
import Button from "./shared/Button"

import useMediaQuery from "@/hooks/useMediaQuery"

const categoryData = [
  {
    t1:'lorem Ipsum Dolor.',
    t2:'Lorem Ipsum Dolor Sit',
    img:'/assets/cat-pizza.png'
  },
  {
    t1:'lorem Ipsum Dolor.',
    t2:'Lorem Ipsum Dolor Sit',
    img:'/assets/cat-burger.png'
  },
  {
    t1:'lorem Ipsum Dolor.',
    t2:'Lorem Ipsum Dolor Sit',
    img:'/assets/cat-torr.png'
  }
]

const serviceFeaturesData = [
  {
    t1:'Free Shipping',
    t2:'sing up for updates and get free shipping',
    icon:'/assets/delivery-person-1.svg'
  },
  {
    t1:'30 minutes delivery',
    t2:'evrything you order will be quckly delivered to your door',
    icon:'/assets/clock-hand.svg'
  },
  {
    t1:'best quality gurantee',
    t2:'piizalian is a international chain of family resturnts',
    icon:'/assets/shop-store.svg'
  }
]

function Hero() {
  const isXl = useMediaQuery("(min-width:1280px)")
  return (
    <div className="bg-primary text-white h-[440px] xl:h-[1024px] ">
      <section className="max-w-[1240px] mx-auto">
        <Navbar/>
        <div className="relative">
          <div className="flex justify-around">
            <Image
              src="/assets/pizza-photo.png"
              height={isXl ? 820 : 178}
              width={isXl ? 1240 : 335}
              alt="pizza photo"
            />
          </div>
          <div className="absolute top-3 xl:top-[120px] left-1/2 -translate-x-1/2 w-full">
            <div className="flex flex-col items-center ">
              <span className="text-xl xl:text-2xl text-center">FREE PIZZA</span>
              <h1 className="font-bold text-2xl  xl:text-6xl text-center mt-6 xl:mt-8 mb-6 xl:mb-16">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Odio libero</h1>
              <Button text="order Now"/>
            </div>
          </div>
          <div className="absolute mt-16 px-5 xl:px-0 xl:-bottom-[200px] w-full flex flex-col items-center xl:flex-row justify-between">
              {categoryData.map((i,n) => {
                return(
                  <div key={n}>
                    <div className="relative mb-4">
                      <Image
                        src={i.img}
                        height={isXl ? 344 : 285}
                        width={isXl ? 403  : 335}
                        alt="catogary photo"
                        className=""
                      />
                      <div className="absolute top-0 left-0 w-full rounded-[20px] bg-gradient-to-b to-80% from-black/80">
                        <div className="ml-6 my-12">
                          <p className="text-base xl:text-xl">{i.t1}</p>
                          <h2 className="font-bold text-2xl xl:text-3xl mt-3 xl:mt-6 mb-12 xl:w-1/2">{i.t2}</h2>
                          <Button text="Order Now"/>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="flex flex-col xl:flex-row  items-center justify-between px-5 xl:px-0 mt-[960px] xl:mt-[200px]">
          {
            serviceFeaturesData.map((i,n) => {
              return(
                <div key={n} className="mt-4 flex flex-col xl:flex-row items-center h-[120px] max-w-[335px] xl:max-w-[403px] flex-1 px-6 py-3 xl:py-9 border border-dashed	border-[#DCDBDB] rounded-[20px] w-full">
                  <Image
                    src={i.icon}
                    height={isXl ? 48 : 24}
                    width={isXl ? 48 : 24}
                    alt="service feature"
                  />
                  <div className="ml-3 text-center xl:text-left">
                    <h4 className="text-black text-base xl:text-xl mb-3">{i.t1}</h4>
                    <p className="text-gray-100 text-xs xl:text-sm">{i.t2}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Hero