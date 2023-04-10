import React from 'react'
import Image from "next/image"

function Button({includeIcon=true,icon="/assets/shopping-cart.svg",text="0 Items : $0.00",color="bg-white",textColor="",border="",padding="",borderRadius=""}) {
  return (
    <button className={`flex items-center justify-around ${color} rounded-[${borderRadius ? borderRadius : '40px'}] text-gray-500 ${border} min-w-[96px] ${padding}`}>
      {includeIcon && <Image
        src={icon}
        height={24}
        width={24}
        alt="shopping cart"
        className="ml-6 mr-2"
      />}
      <span className={`text-sm xl:text-xl ${padding.length > 0 ? "": "py-3 xl:py-5"} ${includeIcon ? "pr-6" : ""} ${textColor} text-center`}>{text}</span>
    </button>
  )
}

export default Button