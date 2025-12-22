import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0B1324] text-gray-300">
            <div className="w-11/12 mx-auto py-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary">
                            BoxCraft
                        </h2>
                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            Discover curated subscription boxes supporting
                            local creators and artisans.
                        </p>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            About
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Our Story
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                How It Works
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Local Partners
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Sustainability
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Terms & Conditions
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Privacy Policy
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Cookie Policy
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Refund Policy
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-white/10"></div>

                {/* Bottom */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    © 2025 BoxCraft. All rights reserved. Supporting local
                    communities one box at a time.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
