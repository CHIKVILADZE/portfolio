import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/entertainmentApp' ||
      router.asPath === '/chamazona' ||
      router.asPath === '/planetsApp' ||
      router.asPath === '/clockApp'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" scroll={false}>
          <Image src="/assets/logo3.png" alt="/" width="150" height="120" />
        </Link>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/" scroll={true}>
              <li className="ml-10 text-small uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li className="ml-10 text-small uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li className="ml-10 text-small uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className="ml-10 text-small uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact" scroll={false}>
              <li className="ml-10 text-small uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : ' '
        }
      >
        <div
          className={
            nav
              ? ' md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/assets/logo3.png" alt="/" width="100" height="70" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link onClick={() => setNav(false)} href="/#home" scroll={false}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#about" scroll={false}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/#skills"
                scroll={false}
              >
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/#projects"
                scroll={false}
              >
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                href="/#contact"
                scroll={false}
              >
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase  tracking-wides text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <div className="flex flex-col justify-between items-center my-4 w-full sm:w-[80%]  gap-[20px]">
                <div className="flex flex-col w-[90%] gap-[20px]">
                  <div className=" flex justify-between rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 wase-in duration-300">
                    <AiOutlineMail />
                    <span className="text-[#5651e5]">
                      chikviladze555@gmail.com
                    </span>
                  </div>
                  <div className=" flex justify-between rounded-full shadow-lg shadow-gray-400 p-3  hover:scale-105 wase-in duration-300">
                    <AiOutlinePhone />
                    <span className="text-[#5651e5]">(995) 551 13 99 07</span>
                  </div>
                </div>

                <div className=" flex justify-between w-[90%]">
                  <Link
                    href="https://www.linkedin.com/in/giorgi-chikviladze-514444261/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 wase-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/CHIKVILADZE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 wase-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
