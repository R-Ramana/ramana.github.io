export const SectionHeader = ({title, description}: {title: string; description: string;}) => {
    return(
        <>
            {/* <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">{subtitle}</p>
            </div> */}
            <h2 className="font-serif text-3xl md:text-5xl text-center">{title}</h2>
            <p className="text-center md:text-lg lg:text-xl bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] text-transparent bg-clip-text mt-4 mx-w-md mx-auto">{description}</p>
        </>
    )
}