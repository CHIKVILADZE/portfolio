import Image from 'next/image';
import React from 'react';

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What Can I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/./assets/skills/html-5.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css-3.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/js.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/typescript.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ReactJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/next.png"
                  width="120"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nodejs.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mongodb.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDb</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mysql.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="100"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/styled-components.png"
                  width="65"
                  height="65"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Styled-Components</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
