import Image from 'next/image';
import React from 'react';
import graphcms from '../public/assets/projects/graphcms.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

export default function planetsApp() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={graphcms}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>CMS Blog</h2>
          <h3>Next JS - GraphQl</h3>
        </div>
      </div>

      <div className="max-w-[1240px] max-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2>Overview</h2>
          <p>
            This project created by NextJs and GraphQl. There is many libraries
            also. This is my first steps in GraphQl. You can add posts, add
            comments, here is information about some of programming languages,
            like Javascript, NodeJs, React and Next. It was very intresting
            challage for me.
          </p>

          <Link
            href="https://next-graphql-rho.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/CHIKVILADZE/next-graphql.git"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                GraphQl
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
