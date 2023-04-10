import React from 'react'
import { Tab } from '@headlessui/react'
import Image from "next/image"
import Button from "./shared/Button"

function Catogaries() {
  return (
    <section className="max-w-[1240px] mx-auto mt-[1350px] xl:mt-[350px] mb-12">
      <Tab.Group>
        <div className="flex justify-around mb-12 px-5 xl:px-0">
          <Tab.List className="text-base xl:text-xl space-x-6">
            <Tab className="tab-selected">Pizza Sets</Tab>
            <Tab className="tab-selected">Burgers</Tab>
            <Tab className="tab-selected">Sauses</Tab>
            <Tab className="tab-selected hidden xl:inline-block">Soups</Tab>
            <Tab className="tab-selected hidden xl:inline-block">Fries</Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex flex-col items-center xl:flex-row justify-between px-5 xl:px-0">
              {
                [1,2,3,4].map((i) => {
                  return (
                    <div key={i} className="border border-dashed	border-[#DCDBDB] rounded-[20px] mb-3 xl:mb-0 max-w-[335px] xl:max-w-none">
                      <div className="flex justify-around">
                        <Image
                          src="/assets/mini-pizza.png"
                          height={214}
                          width={203}
                          alt="pizza item"
                          className="mx-12 mt-6 xl:mt-12 mb-3 xl:mb-6"
                        />
                      </div>
                      <div className="text-center mx-11 mb-3 ">
                        <h4 className="text-black xl:text-xl mb-3 xl:mb-6">Sleek Iron Clock</h4>
                        <p className="text-gray-100 text-sm mb-3 xl:mb-6">Pizza, Uncatogarised</p>
                        <span className="text-sm xl:text-2xl text-primary">$100.00-$200.00</span>
                      </div>
                      <div className="mx-3 mb-6 flex justify-around">
                        <Button text="select Options" icon="/assets/shopping-cart-1.svg" border="border-solid border-[1px] border-[#DCDBDB]" textColor="text-primary"/>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-col items-center xl:flex-row px-5 xl:px-0 justify-between xl:space-x-3">
              {
                [1,2,3].map((i) => {
                  return (
                    <div key={i} className="border border-dashed	border-[#DCDBDB] rounded-[20px] flex-1 mb-3 xl:mb-0 max-w-[335px] xl:max-w-none">
                      <div className="flex justify-around">
                        <Image
                          src="/assets/mini-burger.png"
                          height={214}
                          width={203}
                          alt="pizza item"
                          className="mx-12 mt-6 xl:mt-12 mb-3"
                        />
                      </div>
                    <div className="text-center mx-11 mb-3">
                      <h4 className="text-black text-xl mb-3 xl:mb-6">Sleek Iron Clock</h4>
                      <p className="text-gray-100 text-sm mb-3 xl:mb-6">Pizza, Uncatogarised</p>
                      <span className="line-through">$100.00</span><span> - </span><span className="text-2xl text-primary">$200.00</span>
                    </div>
                    <div className="mx-3 mb-6 flex justify-around">
                      <Button text="Add to Cart" icon="/assets/shopping-cart-1.svg" border="border-solid border-[1px] border-[#DCDBDB]" textColor="text-primary"/>
                    </div>
                    </div>
                  )
                })
              }
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-col items-center xl:flex-row justify-between px-5 xl:px-0">
              {
                [1,2,3,4].map((i) => {
                  return (
                    <div key={i} className="border border-dashed	border-[#DCDBDB] rounded-[20px] mb-3 xl:mb-0 max-w-[335px] xl:max-w-none">
                      <div className="flex justify-around">
                        <Image
                          src="/assets/mini-pizza.png"
                          height={214}
                          width={203}
                          alt="pizza item"
                          className="mx-12 mt-6 xl:mt-12 mb-3 xl:mb-6"
                        />
                      </div>
                      <div className="text-center mx-11 mb-3 ">
                        <h4 className="text-black xl:text-xl mb-3 xl:mb-6">Sleek Iron Clock</h4>
                        <p className="text-gray-100 text-sm mb-3 xl:mb-6">Pizza, Uncatogarised</p>
                        <span className="text-sm xl:text-2xl text-primary">$100.00-$200.00</span>
                      </div>
                      <div className="mx-3 mb-6 flex justify-around">
                        <Button text="select Options" icon="/assets/shopping-cart-1.svg" border="border-solid border-[1px] border-[#DCDBDB]" textColor="text-primary"/>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-col items-center xl:flex-row px-5 xl:px-0 justify-between xl:space-x-3">
              {
                [1,2,3].map((i) => {
                  return (
                    <div key={i} className="border border-dashed	border-[#DCDBDB] rounded-[20px] flex-1 mb-3 xl:mb-0 max-w-[335px] xl:max-w-none">
                      <div className="flex justify-around">
                        <Image
                          src="/assets/mini-burger.png"
                          height={214}
                          width={203}
                          alt="pizza item"
                          className="mx-12 mt-6 xl:mt-12 mb-3"
                        />
                      </div>
                    <div className="text-center mx-11 mb-3">
                      <h4 className="text-black text-xl mb-3 xl:mb-6">Sleek Iron Clock</h4>
                      <p className="text-gray-100 text-sm mb-3 xl:mb-6">Pizza, Uncatogarised</p>
                      <span className="line-through">$100.00</span><span> - </span><span className="text-2xl text-primary">$200.00</span>
                    </div>
                    <div className="mx-3 mb-6 flex justify-around">
                      <Button text="Add to Cart" icon="/assets/shopping-cart-1.svg" border="border-solid border-[1px] border-[#DCDBDB]" textColor="text-primary"/>
                    </div>
                    </div>
                  )
                })
              }
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-col items-center xl:flex-row px-5 xl:px-0 justify-between xl:space-x-3">
              {
                [1,2,3].map((i) => {
                  return (
                    <div key={i} className="border border-dashed	border-[#DCDBDB] rounded-[20px] flex-1 mb-3 xl:mb-0 max-w-[335px] xl:max-w-none">
                      <div className="flex justify-around">
                        <Image
                          src="/assets/mini-burger.png"
                          height={214}
                          width={203}
                          alt="pizza item"
                          className="mx-12 mt-6 xl:mt-12 mb-3"
                        />
                      </div>
                    <div className="text-center mx-11 mb-3">
                      <h4 className="text-black text-xl mb-3 xl:mb-6">Sleek Iron Clock</h4>
                      <p className="text-gray-100 text-sm mb-3 xl:mb-6">Pizza, Uncatogarised</p>
                      <span className="line-through">$100.00</span><span> - </span><span className="text-2xl text-primary">$200.00</span>
                    </div>
                    <div className="mx-3 mb-6 flex justify-around">
                      <Button text="Add to Cart" icon="/assets/shopping-cart-1.svg" border="border-solid border-[1px] border-[#DCDBDB]" textColor="text-primary"/>
                    </div>
                    </div>
                  )
                })
              }
            </div>
          </Tab.Panel>   
        </Tab.Panels>
      </Tab.Group>
      <div className="text-primary text-lg xl:text-2xl text-center xl:text-right w-full mt-6 xl:mt-14">
        <a href="#" className="hover:cursor-pointer hover:underline decoration-primary underline-offset-4">All Products</a>
      </div>
    </section>
  )
}

export default Catogaries