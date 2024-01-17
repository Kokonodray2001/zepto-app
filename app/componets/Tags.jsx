import React from "react";
import Image from "next/image";

export default function Tags() {
  return (
    <div className='flex flex-row items-center w-fit h-8 rounded-full bg-slate-300'>
      <Image
        className='rounded-full'
        src='/assets/Images/KokonodRay.jpeg'
        alt='no image'
        width={32}
        height={100}
      ></Image>

      <span className='px-2'>Kokonod Ray</span>

      <span className='p-2'>⨉</span>
    </div>
  );
}
