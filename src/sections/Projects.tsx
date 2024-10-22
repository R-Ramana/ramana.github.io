import Image from "next/image";

import beyondVision from "@/assets/images/beyondVision.png";
import laserTag from "@/assets/images/laserTag.jpg";
import knewbie from "@/assets/images/knewbie.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Css from "@/assets/icons/css-col.svg";
import Html from "@/assets/icons/html-col.svg";
import Python from "@/assets/icons/python-col.svg";
import Mqtt from "@/assets/icons/mqtt-col.svg";
import C from "@/assets/icons/c-col.svg";
import Js from "@/assets/icons/js-col.svg";
import Flask from "@/assets/icons/flask.svg";
import Pandas from "@/assets/icons/pandas-col.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    // company: "Acme Corp",
    // year: "2022",
    title: "Beyond Vision",
    desc: [
      { info: "Smart walking cane for the visually impaired" },
      { info: "Detects falls, fires and obstructions" },
      { info: "Relays location information via message" },
      { info: "Data visualization for analysis" },
      // { info: "Data aggregation for predictions" },
    ],
    other_link: "/docs/BeyondVision.pdf",
    other_text: "Overview",
    link: "https://github.com/project-beyond-vision",
    image: beyondVision,
    iconList: [
      {logo: <C/>},
      {logo: <Mqtt/>},
      {logo: <Python/>},
      {logo: <Pandas/>},
      {logo: <Flask/>},
      {logo: <Js/>},
      {logo: <Html/>},
    ]
  },
  {
    // company: "Innovative Co",
    // year: "2021",
    // With a budget of $250, we came up with a laser tag game with gesture detection (for reload, grenade, shield and logout actions). We produced an immersive game experience that fuses both the modern First Person Shooter (FPS) games and laser tag sport. Through the use of sensory and Augmented Reality (AR) technologies, players can experience a shooting game in a simulated environment. Players will be able to interact with the environment and perform actions such as reloading, throwing grenades and raising shields, which will be visualized on a mobile device that is mounted on the gun. For a more realistic simulation, players will receive vibration and visual feedback from their vest and gun. A gameplay demo can be found here.
    title: "LaserTag++",
    desc: [
      { info: "AR Laser Tag game with gesture recognition" },
      { info: "Optimized AI processing with FPGA" },
      { info: "96.14 accuracy rate for gesture detection" },
      { info: "Led hardware design and coding" },
      // { info: "Project delivered with $250 budget" },
    ],
    other_link: "https://www.youtube.com/watch?v=nKTPNiXV2OA",
    other_text: "Demo",
    link: "https://github.com/CG4002-B3",
    image: laserTag,
    iconList: [
      {logo: <C/>},
      {logo: <Mqtt/>},
      {logo: <Python/>},
      {logo: <Pandas/>},
    ]
  },
  {
    // company: "Quantum Dynamics",
    // year: "2023",
    title: "Knewbie",
    desc: [
      { info: "Web app providing educational content" },
      { info: "Featured from a pool of 383 projects" },
      { info: "Tailored learning via ML (Adaptive Testing)" },
      { info: "Underwent full SDLC" },
    ],
    other_link: "https://www.youtube.com/watch?v=zTKKarQBiX8",
    other_text: "Demo",
    link: "https://github.com/Orbital-Knewbie/Knewbie",
    image: knewbie,
    iconList: [
      {logo: <Python/>},
      {logo: <Flask/>},
      {logo: <Js/>},
      {logo: <Html/>},
      {logo: <Css/>},
    ]
  },
];

export const Projects = () => {  
  return (
    <section className="pt-20 pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader title="Featured Projects" description="Some projects that I have worked on outside of my work." />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-10 md:px-10 lg:pt-12 lg:px-20 sticky" 
            style={{
              top: `calc(70px + ${projectIndex * 60}px)`
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex items-center">
                      <div className="flex items-center">
                        {project.iconList.map((icon,index) => (
                          <div className="outline outline-2 outline-gray-900/20 rounded-full size-9 lg:size-10 md:-mt-3 lg:-mt-0 p-[7px] bg-gray-700"
                          style={{
                            transform: `translateX(-${12 * index}px)`}}>
                            <span>{icon.logo}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  {/* <div className="binline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div> */}
                  <h3 className="font-serif text-2xl lg:text-3xl mt-2 md:mt-3 lg:mt-5 bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] text-transparent bg-clip-text">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 lg:mt-5" />
                  <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                    {project.desc.map(descr => (
                      <li className="flex gap-2 items-center text-sm lg:text-base text-white/60">
                        <CheckIcon className="size-4 shrink-0 md:size-5" />
                        <span>{descr.info}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex gap-4 mt-6">
                    <a href={project.other_link} target="_blank">
                      <button className="bg-white text-gray-900 h-12 w-auto px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2">
                        <span>{project.other_text}</span>
                        <ArrowIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-900 h-12 w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>Repo</span>
                        <ArrowIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  {/* <div className="flex items-center justify-between absolute mt-6 ml-4">
                    <div className="flex items-center">
                      {project.iconList.map((icon,index) => (
                        <div className="outline outline-2 outline-gray-800/10 rounded-full size-10 p-[7px] bg-gray-200" 
                        style={{
                          transform: `translateX(-${12 * index}px)`}}>
                          <span>{icon.logo}</span>
                        </div>
                      ))}
                    </div>
                  </div> */}
                  <a href={project.other_link} target="_blank">
                      <Image src={project.image} alt={project.title} className="rounded-t-2xl mt-6 -mb-4 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
