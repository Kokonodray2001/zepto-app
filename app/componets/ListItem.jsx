import React from "react";
import Image from "next/image";
export default function ListItem({ name, eamil, imgpath }) {
  return (
    <div className='flex items-center p-2 h-fit w-fit'>
      <Image
        className='rounded-full'
        src={imgpath}
        alt='no image'
        width={32}
        height={32}
      ></Image>

      <span className='pl-2 pr-4'>{name}</span>
      <span className='text-gray-600'>{eamil}</span>
    </div>
  );
}
