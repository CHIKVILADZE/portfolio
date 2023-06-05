import Image from 'next/image';
import { Inter } from 'next/font/google';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
