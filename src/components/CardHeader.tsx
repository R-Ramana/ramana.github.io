import Star from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge";

export const CardHeader = ({title, description, className}: {title: string; description: string; className?: string;}) => {
  return (
    <div className={twMerge("flex flex-col md:px-10", className)}>
        <div className="inline-flex items-center gap-2">
            <Star className="size-9 dark:text-[#fbc7d4] text-[#9796f0]" />
            <h3 className="font-serif text-3xl dark:text-white text-gray-800">{title}</h3>
        </div>
        <p className="text-sm lg:text-base max-w-xs dark:text-white/60 text-gray-800/60 mt-2">{description}</p>
    </div>
  )
}