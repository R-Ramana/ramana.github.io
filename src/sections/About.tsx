import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import techTeam from "@/assets/images/techTeam.png"
import Image from "next/image"

import JS from "@/assets/icons/square-js.svg";
import HTML from "@/assets/icons/html5.svg";
import CSS from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Wordpress from "@/assets/icons/wordpress.svg";
import Tableau from "@/assets/icons/tableau.svg";
import Flask from "@/assets/icons/flask.svg";
import Pandas from "@/assets/icons/pandas.svg";
import Python from "@/assets/icons/python.svg";
import Java from "@/assets/icons/java.svg";
import Spring from "@/assets/icons/spring.svg";
import Figma from "@/assets/icons/figma.svg";
import AdobeXD from "@/assets/icons/adobexd.svg";
import C from "@/assets/icons/c.svg";
import SQL from "@/assets/icons/sql.svg";
import Pi from "@/assets/icons/pi.svg";
import Arduino from "@/assets/icons/arduino.svg";
import Git from "@/assets/icons/git.svg";
import Verilog from "@/assets/icons/verilog.svg";
import Tensorflow from "@/assets/icons/tensorflow.svg";
import { CardHeader } from "@/components/CardHeader";
import { TechStackItems } from "@/components/TechStackItems";

const techStack = [
  {
    title: 'Java',
    img: Java
  },
  {
    title: 'Spring',
    img: Spring
  },
  {
    title: 'SQL',
    img: SQL
  },
  {
    title: 'Python',
    img: Python
  },
  {
    title: 'Flask',
    img: Flask
  },
  {
    title: 'Pandas',
    img: Pandas
  },
  {
    title: 'Tensorflow',
    img: Tensorflow
  },
  {
    title: 'C/C++',
    img: C
  },
  {
    title: 'Tableau',
    img: Tableau
  },
  {
    title: 'JavaScript',
    img: JS
  },
  {
    title: 'React',
    img: ReactIcon
  },
  {
    title: 'CSS3',
    img: CSS
  },
  {
    title: 'HTML5',
    img: HTML
  },
  {
    title: 'Arduino',
    img: Arduino
  },
  {
    title: 'Raspberry Pi',
    img: Pi
  },
  {
    title: 'Git',
    img: Git
  },
  {
    title: 'Figma',
    img: Figma
  },
  {
    title: 'Adobe XD',
    img: AdobeXD
  },
  {
    title: 'WordPress',
    img: Wordpress
  },
  {
    title: 'Verilog',
    img: Verilog
  },
  // {
  //   title: 'ContikiOS',
  //   img: ReactIcon
  // },
  // {
  //   title: 'Real-Time OS',
  //   img: ReactIcon
  // },
]

export const About = () => {
  return (
    <section className="pt-20 pb-16 lg:py-24" id="about">
      <div className="container">
        <SectionHeader title="About Me" description="View some of the articles I have written or the tech stack I have expierience with."/>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 hover:-rotate-3 transition duration-300 cursor-pointer">
              <a href="https://medium.com/@techteamwriting" target="_blank">
                <CardHeader title="My Blog" description="Explore the articles I have written over the years!" className="px-6 pt-6 pb-2 md:pt-8 md:pb-6 lg:pb-5"/>
                <div className="relative w-[250px] md:w-[200px] mx-auto">
                  <Image src={techTeam} alt="book cover"/>
                  <Image src={techTeam} alt="book cover" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pinging opacity-25"/>
                </div>
              </a>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Tech Stack" description="The technologies in my arsenal!" className="p-6 md:py-8"/>            
              <TechStackItems techStack={techStack} innerClassName="animate-move-left [animation-duration:24s]" />
              <TechStackItems techStack={techStack} className="mt-6" innerClassName="-translate-x-[50%] animate-move-right [animation-duration:24s]" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};