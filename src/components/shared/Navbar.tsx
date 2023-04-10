import React,{useState} from 'react'
import Image from "next/image"
import {UserIcon,HeartIcon,MagnifyingGlassIcon} from "@heroicons/react/24/outline"

import useMediaQuery from "@/hooks/useMediaQuery"

function Navbar() {
  const [showSideMenu ,setShowSideMenu] = useState(false)
  return (
    <nav className="">
      {/* desktop */}
      <div className="hidden xl:block divide-y divide divide-[#BA4640] pt-6">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center">
            <Image
              src="/assets/map-pin.svg"
              height={24}
              width={24}
              alt="map pin"
              className="mr-1"
            />
            <span className="text-sm hover:cursor-pointer hover:underline decoration-secondary underline-offset-4">Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex items-center">
            <Image
              src="/assets/Food-Pizza.svg"
              height={48}
              width={48}
              alt="Logo"
            />
            <span className="uppercase font-bold text-4xl ml-2">PIZZAPIZZA</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-4">
              <Image
                src="/assets/delivery-person.svg"
                height={24}
                width={24}
                alt="delivery person"
                className="mr-1"              
              />
              <span className="text-sm">call and order: +1 123-456-789</span>
            </div>
            <div className="flex items-center ml-4">
              <span className="text-sm hover:cursor-pointer hover:text-secondary">location</span>
              <Image
                src="/assets/chevron-down.svg"
                height={24}
                width={24}
                alt="select location"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center pt-3">
            <a href="#" className="mr-6 text-xl text-secondary">Home</a>
            <a href="#" className="mr-6 text-xl hover:text-secondary">Menu</a>
            <a href="#" className="mr-6 text-xl hover:text-secondary">About</a>
            <a href="#" className="mr-6 text-xl hover:text-secondary">Shop</a>
            <a href="#" className="mr-6 text-xl hover:text-secondary">Blog</a>
            <a href="#" className="text-xl hover:text-secondary">Contact</a>
          </div>
          <div className="flex items-center pt-3">
            <UserIcon className="h-6 w-6 mr-3 hover:cursor-pointer" />
            <HeartIcon className="h-6 w-6 mr-3 hover:cursor-pointer" />
            <MagnifyingGlassIcon className="h-6 w-6 mr-8 hover:cursor-pointer" />
            <button className="flex items-center bg-secondary rounded-[40px] text-gray-500">
              <Image
                src="/assets/shopping-cart.svg"
                height={24}
                width={24}
                alt="shopping cart"
                className="ml-6 mr-1"
              />
              <span className="text-xl py-5 pr-6">0 Items : $0.00</span>
            </button>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="xl:hidden pt-3 px-5 mb-16 divide-y divide divide-[#BA4640]">
        <div>
          <div className="flex justify-around mb-5">
            <div className="flex items-center">
                <Image
                  src="/assets/map-pin.svg"
                  height={12}
                  width={12}
                  alt="map pin"
                  className="mr-1"
                />
                <span className="text-xs hover:cursor-pointer hover:underline decoration-secondary underline-offset-4">Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <div className="flex justify-around mb-2">
            <div className="flex items-center">
              <div className="flex items-center ml-4">
                <Image
                  src="/assets/delivery-person.svg"
                  height={12}
                  width={12}
                  alt="delivery person"
                  className="mr-1"              
                />
                <span className="text-xs">call and order: +1 123-456-789</span>
              </div>
              <div className="flex items-center ml-4">
                <span className="text-xs hover:cursor-pointer hover:text-secondary">location</span>
                <Image
                  src="/assets/chevron-down.svg"
                  height={12}
                  width={12}
                  alt="select location"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-3">
          <div>
            <button onClick={() => setShowSideMenu(!showSideMenu)}>
              <Image
                  src="/assets/burger-menu.svg"
                  height={24}
                  width={24}
                  alt="Logo"
                />
            </button>
          </div>
          <div>
            <div className="flex items-center">
              <Image
                src="/assets/Food-Pizza.svg"
                height={24}
                width={24}
                alt="Logo"
              />
              <span className="uppercase font-bold text-2xl ml-2">PIZZAPIZZA</span>
            </div>
          </div>
          <div>
            <Image
                src="/assets/shopping-cart-2.svg"
                height={24}
                width={24}
                alt="Logo"
              />
          </div>
        </div>
        <div className={`absolute top-0 xl:hidden ${showSideMenu ? 'left-0' : 'hidden -left-full'} flex flex-col z-50 transition-all  p-6 side-menu bg-[#0A033C] h-screen w-full`}>
          <button onClick={() => setShowSideMenu(false)} className="mb-6">
            <Image
              src="/assets/close.svg"
              height={24}
              width={24}
              alt="close"
            />
          </button>
          <a href="#" className="mb-3 text-xl text-secondary">Home</a>
          <a href="#" className="mb-3 text-xl hover:text-secondary">Menu</a>
          <a href="#" className="mb-3 text-xl hover:text-secondary">About</a>
          <a href="#" className="mb-3 text-xl hover:text-secondary">Shop</a>
          <a href="#" className="mb-3 text-xl hover:text-secondary">Blog</a>
          <a href="#" className="mb-3 text-xl hover:text-secondary">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar