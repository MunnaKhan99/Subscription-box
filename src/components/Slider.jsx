import React from "react";

const Slider = ({ sliderData }) => {
    if (!sliderData || sliderData.length === 0) return null;

    return (
        /* Adjusted height: 400px on mobile, 500px on tablet, and full-screen on desktop */
        <div className="carousel w-full h-112 md:h-150 lg:h-[calc(100vh-64px)]">
            {sliderData.map((slide, index) => {
                const prevIndex = index === 0 ? sliderData.length - 1 : index - 1;
                const nextIndex = index === sliderData.length - 1 ? 0 : index + 1;

                return (
                    <div
                        key={slide.id}
                        id={`slide${index}`}
                        className="carousel-item relative w-full overflow-hidden"
                    >
                        {/* Background Image - Added object-cover to prevent stretching */}
                        <img
                            src={slide.thumbnail}
                            className="w-full h-full object-cover"
                            alt={slide.title}
                        />

                        {/* Dark overlay - slightly deeper on mobile for text readability */}
                        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
                            <div className="w-11/12 md:w-9/12 md:ml-20 lg:ml-32 max-w-2xl text-white text-center md:text-left space-y-3 md:space-y-6">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-sm md:text-lg lg:text-xl opacity-90 line-clamp-3 md:line-clamp-none">
                                    {slide.subtitle}
                                </p>
                                <div>
                                    <button className="btn btn-primary btn-sm md:btn-md px-6 md:px-8">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows - Smaller on mobile */}
                        <div className="absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a
                                href={`#slide${prevIndex}`}
                                className="btn btn-xs md:btn-md btn-circle bg-white/20 border-none text-white hover:bg-white/40 backdrop-blur-md"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${nextIndex}`}
                                className="btn btn-xs md:btn-md btn-circle bg-white/20 border-none text-white hover:bg-white/40 backdrop-blur-md"
                            >
                                ❯
                            </a>
                        </div>

                        {/* Bottom Dots - Hidden on very small screens to reduce clutter, or just made smaller */}
                        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                            {sliderData.map((_, dotIndex) => (
                                <a
                                    key={dotIndex}
                                    href={`#slide${dotIndex}`}
                                    className={`h-1.5 md:h-2 transition-all duration-300 rounded-full ${dotIndex === index
                                            ? "w-6 md:w-10 bg-primary"
                                            : "w-2 md:w-6 bg-white/50"
                                        }`}
                                ></a>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;

