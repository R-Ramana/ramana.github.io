import Image from "next/image";
import memojiImg from "@/assets/images/memoji.png";
import grainImg from "@/assets/images/grain.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarImg from "@/assets/icons/star.svg";
import SparkleImg from "@/assets/icons/sparkle.svg";
import { Star } from "@/components/Star";

export const Hero = () => {
  return (
    <section className="py-32 md:py-40 lg:py-48 relative z-0 overflow-x-clip" id="home">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImg.src})`}}></div>
        <div className="size-[420px] hero-ring"></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>
        <div className="size-[1620px] hero-ring"></div>
        <Star size={850} rotation={-10} shouldSpin spinDuration="42s" >
          <div className="size-2 rounded-full bg-[#fbc7d4]/20"></div>
        </Star>
        <Star size={810} rotation={150} shouldSpin spinDuration="40s" shouldRotate rotateDuration="4s">
          <SparkleImg className="size-14 text-[#fbc7d4]/20" />
        </Star>
        <Star size={800} rotation={112} shouldSpin spinDuration="38s" >
          <div className="size-1 rounded-full bg-[#fbc7d4]/20"></div>
        </Star>
        <Star size={790} rotation={-75} shouldSpin spinDuration="36s" shouldRotate rotateDuration="8s">
          <StarImg className="size-28 text-[#fbc7d4]" />
        </Star>
        <Star size={650} rotation={-20} shouldSpin spinDuration="34s" shouldRotate rotateDuration="4s">
          <SparkleImg className="size-8 text-[#fbc7d4]/20" />
        </Star>
        <Star size={400} rotation={20} shouldSpin spinDuration="32s" shouldRotate rotateDuration="8s">
          <StarImg className="size-12 text-[#fbc7d4]" />
        </Star>
        <Star size={600} rotation={-50} shouldSpin spinDuration="30s">
          <div className="size-2 rounded-full bg-[#fbc7d4]/20"></div>
        </Star>
        <Star size={590} rotation={95} shouldSpin spinDuration="28s" shouldRotate rotateDuration="8s">
          <StarImg className="size-8 text-[#fbc7d4]" />
        </Star>
        <Star size={530} rotation={190} shouldSpin spinDuration="26s" shouldRotate rotateDuration="4s">
          <SparkleImg className="size-10 text-[#fbc7d4]/20" />
        </Star>
        <Star size={400} rotation={-110} shouldSpin spinDuration="24s">
          <div className="size-2 rounded-full bg-[#fbc7d4]/20"></div>
        </Star>
        <Star size={380} rotation={70} shouldSpin spinDuration="22s">
          <div className="size-2 rounded-full bg-[#fbc7d4]/20"></div>
        </Star>
        <Star size={370} rotation={120} shouldSpin spinDuration="20s" shouldRotate rotateDuration="4s">
          <SparkleImg className="size-5 text-[#fbc7d4]/20"/>
        </Star>
      </div>
      <div className="container">
        <div className="relative flex flex-col items-center inset-0 [mask-image:linear-gradient(to_bottom,transparent,#111827_10%,#111827_66%,transparent)]">
          <Image src={memojiImg} className="size-[150px]" alt="Memoji image of Ramana" />
        </div>
        <div className="max-w-lg mx-auto">
          {/* <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide uppercase">Coding Ideas Into Tomorrow's Tech</h1> */}
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide uppercase">Building tech today for a better tomorrow</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
           I thrive on solving complex challenges, with a strong passion for IoT, AI, and a love for automating routine tasks.
        </p>
        </div>
        <div>
          <div className="relative flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-20">
            <div className="button-wrapper z-20 mt-12">
              <a href="/docs/RamanaCV.pdf" target="_blank">
                <button className="button-content inline-flex justify-center items-center gap-2 h-12 px-6 text-gray-900 rounded-xl">
                  <span className="font-semibold">View My CV</span>
                  <ArrowDown className="size-4" />
                </button>
              </a>
              <div className="gradient-border -z-10"></div>
            </div>
            <div className="-z-20 absolute -translate-x-20 translate-y-0 animate-pulse">
              <div className="absolute h-12 w-[160px] rounded-xl bg-[#fbc7d4] -z-10 blur-md"></div>
            </div>
          </div>
        </div>
      </div>  
      
    </section>
  );
};
