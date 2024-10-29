import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { TechStackIcon } from "./TechStack"

export const TechStackItems = ({techStack, className, innerClassName}: 
    {
        techStack: {
            title: string;
            img: React.ElementType;
        }[],
        className?: string;
        innerClassName?: string;
    }
    ) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
        <div className={twMerge("flex flex-none py-0.5 pr-2 gap-4", innerClassName)}>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {techStack.map(item => (
                    <div key={item.title} className="text-gray-100 dark:text-gray-800 inline-flex items-center font-semibold gap-2 py-2 px-3 outline outline-2 dark:outline-white/10 outline-gray-800/10 rounded-lg">
                        <TechStackIcon component={item.img} />
                        <span className="dark:text-white text-gray-800">{item.title}</span>
                    </div>
                ))}
              </Fragment>
            ))}
        </div>
    </div>
  )
}