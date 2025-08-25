import { Metadata } from 'next';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-wave.png"; //instead of using url use var 
import frontend from "../public/frontend.png";
import api from "../public/api-integration.png";
import backend from "../public/backend.png";
import data from "../public/Data analysis & visualization.jpg"
import web1 from "../public/Products_Shop_HomePage.png"
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
  {/* text-center helps create a clear visual hierarchy */}
  <div className="card mx-auto mb-10 text-center shadow-lg rounded-xl w-1/2 px-10 py-10 bg-sky-200 backdrop-blur">
         <h1 className="text-5xl py-2 text-teal-600 font-medium"> Mostafa Taher </h1>
         <h2 className="text-2xl py-2"> Fullstack web developer</h2>

         {/* Avatar circle: parent defines size and is relative; image fills it */}
         <div className="relative mx-auto justify-center w-50 h-50 rounded-full bg-gradient-to-br from-teal-400 to-blue-500">
          <Image src={deved} alt="Developer Wave" className="object-cover" fill />
         </div>

         <p className="text-md leading-6 text-gray-800">
           .Net and Django for backend and<br />
           React, Angular and Next for frontend in addition to JS, TS, Tailwind CSS,
           Bootstrap, HTML, CSS
         </p>

        <div className="m-10 flex justify-center gap-10 text-3xl text-slate-700">
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
            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded transition-colors">
            <AiFillLinkedin />
          </a>
        </div>
        {/* Developer Wave Image i want to be image circled so h and w are same size with use of rounded-full and bckg color we can use gradient for combining colors*/}
        {/*Context: You often set a parent element's position to relative when you want to absolutely position a child element inside it.*/}
        {/*How it works:
        If a child has position: absolute;, it looks for the closest ancestor with a position other than static (relative, absolute, or fixed).
        If no such ancestor exists, it positions itself relative to the viewport (the whole page).
        By setting the parent to position: relative;, you make it the reference for the child’s absolute positioning.*/}
        
        {/*
            Why doesn’t justify-center center an image, but mx-auto does?
            Tailwind CSS context:
            justify-center:
            Used on flex containers (display: flex;)
            Centers child elements horizontally along the main axis, but only works if the parent is a flex container.
            mx-auto:
            Adds margin-left: auto; margin-right: auto; to the element.
            Works with block elements that have a defined width.
            Centers the element itself in its parent.
        */}
      
          {/*Don’t use layout="fill" anymore. It’s deprecated. Use the boolean prop fill instead.
           fill makes the image absolutely positioned to fill its parent. Width/height props are ignored; you must size the parent box and make it position: relative.
           objectFit='cover' (now use className="object-cover" or style={{ objectFit: 'cover' }}) keeps the image’s aspect ratio while filling the box. Without it, the image can stretch.*/}
          {/* Two quick examples
                1) Big hero (fills container)
                Parent defines size and is relative; image fills it and crops neatly.<div className="relative h-[60vh] w-full"> <Image src={deved} alt="Hero" fill className="object-cover" sizes="100vw" priority /> </div>
  
                2) Avatar circle (not using width/height props with fill)
                Parent sets a fixed square; rounded and overflow-hidden clip to a circle.<div className="relative size-48 rounded-full overflow-hidden"> <Image src={deved} alt="Avatar" fill className="object-cover" /> </div> */}
     </div>
        </section>
        <section>
          <div className="text-center">
            <h2 className="text-3xl py-1">Services I offer</h2>
            <p className="text-md py-2 leading-5 text-gray-800">
             Since the beginning of my journey as a web developer, I've done <span className="text-teal-500">fullstack web projects, APIs, Dashboards and Reports </span> with a purpose to deliver high-quality web & data analysis & visualization solutions customized based on the needs of requirements of projects to their needs.
            </p>
            <p className="text-md py-2 leading-5 text-gray-800">
              I offer wide range of services including Fullstack, frontend and backend development, API integration, and data analysis & visualization.
            </p>
           </div>
           <div className="mt-8 space-y-8">
            <div className="p-6 text-center rounded-xl bg-white shadow-sm ring-1 ring-black\/10">
              <Image src={frontend} width={100} height={100} alt="Frontend Development" className="mx-auto" />
              <h3 className="text-lg pt-8 pb-2"> Beautiful Designs </h3>
              <p className="text-md py-5 leading-5 text-gray-800"> Creating Beautiful Designs customized according to the needs of the requirements of the project.</p>
              <h4 className="text-teal-500 py-4"> Design Frameworks I use </h4>
              <ul className="flex flex-row justify-center gap-5 text-md py-1 text-gray-800">
                <li>React</li>
                <li>Next.js</li>
                <li>Angular</li>
                <li>Html & CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="p-6 text-center rounded-xl bg-white shadow-sm ring-1 ring-black\/10">
              <Image src={api} width={100} height={100} alt="API Integration" className="mx-auto" />
              <h3 className="text-lg pt-8 pb-2"> Seamless API Integration </h3>
              <p className="text-md py-5 leading-5 text-gray-800"> Ensuring seamless integration with various APIs to enhance functionality and user experience.</p>
              <h4 className="text-teal-500 py-4"> Frameworks used </h4>
              <ul className="flex flex-row justify-center gap-5 text-md py-1 text-gray-800">
                <li>.Net Core</li>
                <li>Django</li>
                <li>FastApi</li>
              </ul>
            </div>

            <div className="p-6 text-center rounded-xl bg-white shadow-sm ring-1 ring-black\/10">
              <Image src={backend} width={100} height={100} alt="Backend Development" className="mx-auto" />
              <h3 className="text-lg pt-8 pb-2"> Backend Features </h3>
              <p className="text-md py-5 leading-5 text-gray-800"> Implementing robust backend solutions to support web applications and APIs.</p>
              <h4 className="text-teal-500 py-4"> Frameworks used </h4>
              <ul className="flex flex-row justify-center gap-5 text-md py-1 text-gray-800">
                <li>.Net Core</li>
                <li>Django</li>
                <li>FastApi</li>
              </ul>
            </div>
          
            <div className="p-6 text-center rounded-xl bg-white shadow-sm ring-1 ring-black\/10">
              <Image src={data} width={100} height={100} alt="Data Analysis & Visualization" className="mx-auto" />
              <h3 className="text-lg pt-8 pb-2"> Data Analysis & Visualization </h3>
              <p className="text-md py-5 leading-5 text-gray-800"> Leveraging data to provide insights and drive decision-making through visualization.</p>
              <h4 className="text-teal-500 py-4"> Tools & Technologies I use </h4>
              <ul className="flex flex-row justify-center gap-5 text-md py-1 text-gray-800">
                <li>Python</li>
                <li>Tableau</li>
                <li>Power BI</li>
              </ul>
            </div>
          </div>
          <div>
           <h3 className="text-center text-3xl py-1">Portfolio</h3>
            <div>
                <Image src={web1} width={150} height={80} alt="Products_Shop_HomePage_web" className="mx-auto" />
            </div>
          </div>
        </section>
    </main>
  );
}
