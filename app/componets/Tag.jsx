import React from "react";
import Image from "next/image";

export default function Tag({ imagepath, userName, onCLickFunc }) {
  return (
    <div className='flex flex-row items-center min-w-fit h-8 m-2 rounded-full bg-slate-300 hover:border-2 border-blue-800'>
      <Image
        className='rounded-full'
        src={imagepath}
        alt='no image'
        width={32}
        height={100}
      ></Image>

      <span className='px-2'>{userName}</span>

      <span
        className='p-2 hover:text-blue-700 cursor-pointer'
        onClick={onCLickFunc}
      >
        ⨉
      </span>
    </div>
  );
}
