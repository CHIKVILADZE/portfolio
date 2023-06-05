import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Main() {
  return (
    <div id="/" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Giorgi</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600  max-w-[70%] m-auto">
            I am front-end developer with no experience but I have an unwavering
            motivation to succeed. I want to learn and contribute to creating
            something special. I am Ready to embrace challenges and grow
            alongside your team. Let&apos;s build something extraordinary
            together.
          </p>
          <div className="flex -tems-center justify-between max-w-[200px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/giorgi-chikviladze-514444261/"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 wase-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/CHIKVILADZE" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 wase-in duration-300">
                <FaGithub />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
