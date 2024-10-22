import stanford from "@/assets/images/stanford.png";
import udemy from "@/assets/images/udemy.png";
import scrum from "@/assets/images/scrum.png";
import android from "@/assets/images/androidAtc.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";


const certifications = [
  {
    name: "Machine Learning Specialization",
    img: stanford,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PAAYL4RZDVZC",
  },
  {
    name: "Certified Android Developer",
    img: android,
    link: "https://androidatc.com/_transcript.php",
  },
  {
    name: "Professional Scrum Product Owner I",
    img: scrum,
    link: "https://www.scrum.org/certificates/1091568",
  },
  {
    name: "UX Research & UI Design",
    img: udemy,
    link: "https://www.udemy.com/certificate/UC-dda29871-6252-4d50-9bd2-07ad18641abc/",
  },  
  // {
  //   name: "SEO Strategy",
  //   img: udemy,
  //   link: "",
  // },
  // {
  //   name: "Agile Kanban",
  //   img: genman,
  //   link: "",
  // },
];

export const Certifications = () => {
  return (
    <section className="pb-16 lg:pb-24 relative z-10" id="certifications">
      <div className="container">
        <SectionHeader title="Certifications" description="Some of my professional qualifications attained over the years." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:10s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {certifications.map(certification => (
                  <Card key={certification.name} className="group max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300  cursor-pointer hover:bg-gray-800/40">
                    <a href={certification.link} target="_blank">
                      <div className="flex flex-col text-white/30 group-hover:bg-gradient-to-r group-hover:from-[#9796f0] group-hover:to-[#fbc7d4] group-hover:text-transparent group-hover:bg-clip-text transition duration-500">
                        <div className="grow-0">
                          <Image src={certification.img} alt={certification.name} className="h-[100px] md:h-[200px] w-auto mx-auto" />
                        </div>
                        <div>
                          <p className="text-center font-semibold md:text-xl">{certification.name}</p>
                        </div>          
                      </div>
                    </a>
                  </Card>
                  
                ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};
