export const TechStackIcon = ({component}: {component: React.ElementType}) => {
    const Component = component;
    return (
    <div>
        <Component className="size-10 fill-[url(#icon-gradient)]" />
        <svg className="size-0 absolute">
            <linearGradient id="icon-gradient">
                <stop offset="0%" stopColor="rgb(151 150 240)" />
                <stop offset="100%" stopColor="rgb(251 199 212)" />
            </linearGradient>
        </svg>
    </div>
    );
};