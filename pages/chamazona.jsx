import Image from 'next/image';
import React from 'react';
import chamazonaImg from '../public/assets/projects/chamazonaImg.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

export default function chamazona() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={chamazonaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>Chamazona</h2>
          <h3>Next Js / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] max-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2>Overview</h2>
          <p>
            This repository comprises a Next.js project integrated with Tailwind
            CSS, designed for building an e-commerce platform. It encompasses
            key functionalities such as product listing and catalog display,
            product details showcasing comprehensive information, shopping cart
            management for users to add/remove products and calculate totals,
            user authentication and registration to personalize experiences,
            secure checkout and payment processing, search and filtering
            capabilities for products based on various criteria, and responsive
            design implementation for cross-device accessibility and visual
            appeal. This involves utilizing Next.js pages/components for
            fetching, rendering, and displaying product information, integrating
            with payment gateways or APIs, and leveraging Tailwind utility
            classes and responsive breakpoints.
          </p>
          <Link
            href="https://next-tailwind-chamazona.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/CHIKVILADZE/next-tailwind-chamazona.git"
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
                Next
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDb
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
