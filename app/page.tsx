import Image from "next/image";
import { Metadata } from 'next';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";

//we use it instead of Head/ metadata contains title
/*Metadata defined in layout.tsx applies to all pages within that layout
Metadata in page.tsx is specific to that page
Child pages can override parent layout metadata*/
export const metadata: Metadata = {
  title: 'Mostafa Taher Portfolio',
  description: 'Portfolio of Mostafa Taher, showcasing projects and skills.',
};

export default function Home() {
  return (
    /* if you forget down the utilities go to npx tailwindcss init -p */
    <main className="bg-gray-100 text-slate-900 min-h-screen">
      <section>
      <nav className="py-10 px-10 flex items-center justify-center">
        <h1 className="text-xl font-burtons mr-auto"> This portfolio </h1>
        <ul className="flex items-center gap-10">
          <li className="cursor-pointer text-2xl">
            <BsFillMoonStarsFill />
          </li>
          <li><a href="#" className="a-style">Home</a></li>
          <li><a href="#" className="a-style">Resume</a></li>
          <li><a href="#" className="a-style">Projects</a></li>
          <li><a href="#" className="a-style">Contact</a></li>
        </ul>
      </nav>
  /* text center is important to have this hierarcherial texting */
  <div className="m-10 w-1/2 px-10 py-10 text-center bg-sky-200 backdrop-blur">
         <h1> Mostafa Taher </h1>
         <h2> Fullstack web developer</h2>
         <p>A web developer providing services in frontend and backend development using frameworks
          <br /> .Net and django for backend and
          <br /> react, angular and next for frontend in addition to js,ts, tailwindcss,
          bootstrap, html, css</p>
        </div>
        <div className="m-10 flex gap-5 text-3xl text-slate-700">
          <a
            href="https://github.com/mostafataher9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded transition-colors"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mostafa-taher-4a20751a8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded transition-colors"
          >
            <AiFillLinkedin />
          </a>
        </div>
       </section>
    </main>
  );
}
