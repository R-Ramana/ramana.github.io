import grainImg from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({className, children, ...other}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={twMerge("dark:bg-gray-800 bg-white rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl dark:after:outline-white/20 after:outline-gray-800/10 after:pointer-events-none", className)}{...other}>
              <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url(${grainImg.src})`}}></div>
              {children}
        </div>
    )
}