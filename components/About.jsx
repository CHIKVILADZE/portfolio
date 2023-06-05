/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            &nbsp;&nbsp; Allow me to introduce myself. My name is Giorgi
            Chikviladze, and I am a passionate individual who is driven to
            succeed in my career. Every day, I strive to enhance my skills and
            knowledge, relentlessly pursuing personal and professional growth.
            Despite the challenges that may come my way, I am resolute in my
            commitment to progress and will not waver from my path. While I may
            currently lack professional experience, I am fueled by a clear goal
            and an unwavering determination to achieve it. I am seeking an
            environment that will enable me to develop both personally and
            professionally. I yearn to contribute to something meaningful, to be
            a part of creating something important. By hiring me, you will not
            only find a dedicated individual, but also someone who will prove to
            be the right choice for your company.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex-items-center justify-center p-2.5 hover:scale-105 ease-in duration-300 mt-[35px]">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt="laptop"
          />
        </div>
      </div>
    </div>
  );
}
