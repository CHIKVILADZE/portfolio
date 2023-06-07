import Image from 'next/image';
import React from 'react';
import clock from '../public/assets/projects/clock.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

export default function clockApp() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={clock}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>Clock App</h2>
          <h3>React JS / Typescript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] max-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2>Overview</h2>
          <p>
            The mmclock-app repository is a project focused on building a clock
            application. It contains code for displaying and managing
            time-related functionalities. This involve features such as
            displaying the current time, setting alarms, timers, or even
            implementing a stopwatch. The application have a user-friendly
            interface with customizable settings and possibly support for
            multiple time zones. With further exploration, the code in this
            repository can provide a more comprehensive understanding of the
            clock application&apos;s specific features and implementation
            details.
          </p>
          <Link
            href="https://chikviladze.github.io/clock-app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/CHIKVILADZE/clock-app.git"
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
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tyescript
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
