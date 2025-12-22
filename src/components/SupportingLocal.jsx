import React from "react";
import { FiHeart, FiTruck } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi2";

const SupportingLocal = () => {
    return (
        <section className="py-20 bg-white">
            <div className="w-11/12 mx-auto text-center">

                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                    Supporting Local Communities
                </h2>

                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                    Every subscription directly supports local creators,
                    artisans, and small businesses
                </p>

                {/* Features */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100">
                            <FiHeart size={32} className="text-primary" />
                        </div>

                        <h3 className="mt-6 text-xl font-medium text-gray-800">
                            Local First
                        </h3>

                        <p className="mt-3 text-gray-600 max-w-sm">
                            We partner with local artisans and creators to bring
                            you authentic, hand-crafted products
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100">
                            <HiOutlineCube size={32} className="text-primary" />
                        </div>

                        <h3 className="mt-6 text-xl font-medium text-gray-800">
                            Quality Guaranteed
                        </h3>

                        <p className="mt-3 text-gray-600 max-w-sm">
                            Every item is carefully selected and quality-checked
                            to ensure you receive only the best
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100">
                            <FiTruck size={32} className="text-primary" />
                        </div>

                        <h3 className="mt-6 text-xl font-medium text-gray-800">
                            Eco-Friendly
                        </h3>

                        <p className="mt-3 text-gray-600 max-w-sm">
                            Sustainable packaging and local sourcing to minimize
                            our environmental impact
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SupportingLocal;
