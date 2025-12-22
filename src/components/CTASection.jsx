import React from "react";

const CTASection = () => {
    return (
        <section className="bg-[#E17100] py-20">
            <div className="w-11/12 mx-auto text-center text-white">

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                    Ready to Start Your Subscription Journey?
                </h2>

                <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
                    Join thousands of happy subscribers supporting local
                    communities
                </p>

                <button className="mt-8 px-8 py-4 bg-white text-primary font-medium rounded-xl hover:bg-gray-100 transition">
                    Explore Subscriptions
                </button>

            </div>
        </section>
    );
};

export default CTASection;
