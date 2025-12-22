import React from "react";

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white">
            <div className="w-11/12 mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                    How It Works
                </h2>
                <p className="mt-4 text-gray-600">
                    Getting started with BoxCraft is simple and seamless
                </p>

                {/* Steps */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Step 1 */}
                    <div className="relative bg-white rounded-2xl shadow-md  p-6 text-left">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                            1
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-gray-800">
                            Browse
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Explore our curated collection of subscription boxes
                        </p>

                        <div className="hidden md:block absolute top-11 right-[-50%] w-full h-[2px] bg-orange-200"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-white rounded-2xl shadow-md p-6 text-left">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                            2
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-gray-800">
                            Subscribe
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Choose your preferred box and subscription plan
                        </p>

                        <div className="hidden md:block absolute top-11 right-[-50%] w-full h-[2px] bg-orange-200"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-white rounded-2xl shadow-md p-6 text-left">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                            1
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-gray-800">
                            Receive
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Get your box delivered right to your doorstep

                        </p>

                        <div className="hidden md:block absolute top-11 right-[-50%] w-full h-[2px] bg-orange-200"></div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative bg-white rounded-2xl shadow-md p-6 text-left">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                            2
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-gray-800">
                            Enjoy
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm">
                            Discover and enjoy amazing local products

                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
