import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

export const Star = ({ children, size, rotation, shouldSpin = false, shouldRotate = false, spinDuration, rotateDuration }: PropsWithChildren<{ size: number; rotation: number; shouldSpin?: boolean; shouldRotate?: boolean;  spinDuration?: string; rotateDuration?: string; }>) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
          {/* <div> */}
          <div className={twMerge(shouldSpin && "animate-spin")} style={{animationDuration: spinDuration}}>
            <div className="flex items-start justify-start" style={{transform: `rotate(${rotation}deg)`, height: `${size}px`, width: `${size}px`}}>
              <div className={twMerge(shouldRotate && "animate-spin")} style={{animationDuration: rotateDuration}}>
                <div className="inline-flex" style={{transform: `rotate(${rotation * -1}deg)`}}>{children}</div>
              </div>
            </div>
          </div>
        </div>
    )
}