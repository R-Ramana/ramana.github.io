import Arrow from '@/assets/icons/arrow-up-right.svg'
import Github from "@/assets/icons/github-square.svg";
import Linkedin from "@/assets/icons/linkedin-square.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ramana-r/",
    icon: <Linkedin/>,
  },
  {
    title: "GitHub",
    link: "https://github.com/R-Ramana",
    icon: <Github/>,
  }
]

export const Footer = () => {
  return (
    <footer className='relative z-0 overflow-x-clip'>
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#fbc7d4]/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container z-50">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className='text-white/40'>Design adapted from Frontend Tribe.</div>
          <nav className='flex flex-col md:flex-row items-center gap-6'>
            {footerLinks.map(footerItem => (
              <a href={footerItem.link} target="_blank" key={footerItem.title} className="inline-flex items-center justify-center gap-2 hover:text-[#fbc7d4] transition group">
                <span className='font-semibold group-hover:bg-gradient-to-r group-hover:from-[#9796f0] hover:from-30% group-hover:to-[#fbc7d4] group-hover:text-transparent group-hover:bg-clip-text group-hover:[text-shadow:_3px_3px_5px_rgb(251_199_212_/_20%)]'>{footerItem.title}</span>
                <span className='size-5'>{footerItem.icon}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
