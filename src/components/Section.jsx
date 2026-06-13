import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({ className, id, crosses, crossessOffset, customPaddings, children }) => {
    return (
        <div
            id={id}
            className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} ${className || ""}`}`}
        >
            {children}

            <div className="hidden absolute top-0 left-5 w-24 h-full bg-stroke-1 pointer-events-none mb:block lg:left-7.5 xl:left-10" />
            <div className="hidden absolute top-0 right-5 w-24 h-full bg-stroke-1 pointer-events-none mb:block lg:right-7.5 xl:right-10" />

            {crosses && (
                <>
                    <div
                        className={`hidden absolute top-0 left-7.5 right-7.5 h-px bg-stroke-1 ${crossessOffset && crossessOffset} pointer-events-none lg:block xl:left-10 xl:right-10`}
                    />
                    <SectionSvg crossesOffset={crossessOffset} />
                </>
            )}
        </div>
    );
};

export default Section;
