/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React from 'react';
import entertainment from '../public/assets/projects/entertainment.jpg';
import chamazonaImg from '../public/assets/projects/chamazonaImg.png';
import planets from '../public/assets/projects/planets.jpg';
import clock from '../public/assets/projects/clock.jpg';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Chamazona"
            backgroundImg={chamazonaImg}
            projectUrl="/chamazona"
            technologies="Next Js"
          />
          <ProjectItem
            title="Entertainment App"
            backgroundImg={entertainment}
            projectUrl="/entertainmentApp"
            technologies="React Js"
          />
          <ProjectItem
            title="Planets App"
            backgroundImg={planets}
            projectUrl="/planetsApp"
            technologies="React Js"
          />
          <ProjectItem
            title="Clock App"
            backgroundImg={clock}
            projectUrl="/clockApp"
            technologies="React Js"
          />
        </div>
      </div>
    </div>
  );
}