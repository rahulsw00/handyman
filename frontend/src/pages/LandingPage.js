"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HandymanLandingPage;
var react_1 = __importDefault(require("react"));
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var tabs_1 = require("@/components/ui/tabs");
function HandymanLandingPage() {
    return (react_1.default.createElement("div", { className: "flex items-center justify-center h-full w-screen" },
        react_1.default.createElement("div", { className: "flex flex-col min-h-screen font-sans bg-gray-50 items-center" },
            react_1.default.createElement("div", { className: "w-full max-w-5xl" },
                react_1.default.createElement("section", { className: "py-12 md:py-20 bg-white w-full" },
                    react_1.default.createElement("div", { className: "w-fill px-4 grid md:grid-cols-2 gap-12 items-center" },
                        react_1.default.createElement("div", { className: "space-y-6" },
                            react_1.default.createElement("h1", { className: "text-4xl md:text-5xl font-bold text-gray-800 leading-tight" }, "Find Trusted Handyman Services Anytime, Anywhere"),
                            react_1.default.createElement("p", { className: "text-lg text-gray-600" },
                                "Connecting you with",
                                " ",
                                react_1.default.createElement("span", { className: "text-blue-600 font-medium" }, "skilled professionals"),
                                " ",
                                "to get the job done right. From repairs to renovations, we've got you covered."),
                            react_1.default.createElement("div", { className: "flex flex-wrap gap-4 pt-4" },
                                react_1.default.createElement(button_1.Button, { size: "lg", className: "px-6" }, "Hire a Handyman"),
                                react_1.default.createElement(button_1.Button, { size: "lg", variant: "outline", className: "px-6" }, "Register as a Handyman"))),
                        react_1.default.createElement("div", { className: "bg-gray-100 rounded-lg aspect-video overflow-hidden" },
                            react_1.default.createElement("img", { src: "/api/placeholder/700/500", alt: "Handyman at work", className: "w-full h-full object-cover" })))),
                react_1.default.createElement("section", { className: "py-16 bg-gray-100 w-full" },
                    react_1.default.createElement("div", { className: "w-full px-4" },
                        react_1.default.createElement("h2", { className: "text-3xl font-bold text-center mb-12 text-gray-800" }, "HOW IT WORKS"),
                        react_1.default.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-center" },
                            react_1.default.createElement("div", { className: "bg-white rounded-lg aspect-video overflow-hidden shadow-md" },
                                react_1.default.createElement("img", { src: "/api/placeholder/600/400", alt: "Working process illustration", className: "w-full h-full object-cover" })),
                            react_1.default.createElement("div", { className: "space-y-6" },
                                react_1.default.createElement("h3", { className: "text-2xl font-bold text-gray-800" }, "A Big Title"),
                                react_1.default.createElement("div", { className: "space-y-4" },
                                    react_1.default.createElement("p", { className: "flex items-start" },
                                        react_1.default.createElement("span", { className: "mr-2 text-blue-600 flex-shrink-0" }, "\u203A"),
                                        react_1.default.createElement("span", null,
                                            "A paragraph of text with an",
                                            " ",
                                            react_1.default.createElement("a", { href: "#", className: "text-blue-600 underline" }, "unsigned link"),
                                            ".")),
                                    react_1.default.createElement("p", { className: "flex items-start" },
                                        react_1.default.createElement("span", { className: "mr-2 text-blue-600 flex-shrink-0" }, "\u203A"),
                                        react_1.default.createElement("span", null,
                                            "A second row of text with a",
                                            " ",
                                            react_1.default.createElement("a", { href: "#", className: "text-blue-600 underline" }, "web link"),
                                            ".")),
                                    react_1.default.createElement("p", { className: "flex items-center" },
                                        react_1.default.createElement("span", { className: "mr-2 text-blue-600 flex-shrink-0 inline-block w-4 h-4 text-center border border-blue-600 rounded-full text-xs" }, "\u2713"),
                                        react_1.default.createElement("span", null, "An icon inline with text."))))))),
                react_1.default.createElement("section", { className: "py-16 bg-white w-full" },
                    react_1.default.createElement("div", { className: "w-full px-4" },
                        react_1.default.createElement("h2", { className: "text-3xl font-bold text-center mb-12 text-gray-800" }, "WHY CHOOSE US"),
                        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
                            react_1.default.createElement("div", { className: "bg-blue-50 rounded-full p-8 text-center flex flex-col items-center" },
                                react_1.default.createElement("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4 text-xl font-bold" },
                                    react_1.default.createElement("span", { className: "text-2xl" }, "\uD83D\uDEE1")),
                                react_1.default.createElement("h3", { className: "text-xl font-bold mb-3 text-gray-800" }, "Trusted Professionals"),
                                react_1.default.createElement("p", { className: "text-gray-600" }, "All our handymen are vetted, background-checked, and skilled in their craft.")),
                            react_1.default.createElement("div", { className: "bg-blue-50 rounded-full p-8 text-center flex flex-col items-center" },
                                react_1.default.createElement("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4 text-xl font-bold" },
                                    react_1.default.createElement("span", { className: "text-2xl" }, "\u23F2")),
                                react_1.default.createElement("h3", { className: "text-xl font-bold mb-3 text-gray-800" }, "Quick Response"),
                                react_1.default.createElement("p", { className: "text-gray-600" }, "Get connected with available handymen in your area within minutes.")),
                            react_1.default.createElement("div", { className: "bg-blue-50 rounded-full p-8 text-center flex flex-col items-center" },
                                react_1.default.createElement("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4 text-xl font-bold" },
                                    react_1.default.createElement("span", { className: "text-2xl" }, "\u2714")),
                                react_1.default.createElement("h3", { className: "text-xl font-bold mb-3 text-gray-800" }, "Satisfaction Guaranteed"),
                                react_1.default.createElement("p", { className: "text-gray-600" }, "If you're not happy with the work, we'll make it right."))))),
                react_1.default.createElement("section", { className: "py-16 bg-gray-50 w-full" },
                    react_1.default.createElement("div", { className: "w-full px-4" },
                        react_1.default.createElement("h2", { className: "text-3xl font-bold text-center mb-8 text-gray-800" }, "About Us"),
                        react_1.default.createElement("div", { className: "max-w-3xl mx-auto text-center mb-16" },
                            react_1.default.createElement("p", { className: "text-gray-600 mb-6" }, "HandyMan Pro connects homeowners with qualified local professionals for all your home repair and improvement needs. Our platform makes it easy to find, book, and pay for handyman services, ensuring a hassle-free experience from start to finish."),
                            react_1.default.createElement("p", { className: "text-gray-600" }, "Founded in 2022, we've helped thousands of customers complete projects of all sizes, from simple repairs to complex renovations. Our mission is to make home maintenance accessible and affordable for everyone.")),
                        react_1.default.createElement("div", { className: "border-t border-dashed pt-12" },
                            react_1.default.createElement("h3", { className: "text-2xl font-bold text-center mb-8 text-gray-800" }, "Testimonials"),
                            react_1.default.createElement(tabs_1.Tabs, { defaultValue: "testimonial-1", className: "w-full" },
                                react_1.default.createElement(tabs_1.TabsContent, { value: "testimonial-1" },
                                    react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6" }, [1, 2, 3, 4].map(function (item) { return (react_1.default.createElement(card_1.Card, { key: item, className: "overflow-hidden" },
                                        react_1.default.createElement(card_1.CardContent, { className: "p-6" },
                                            react_1.default.createElement("div", { className: "flex items-center mb-4" }, [1, 2, 3, 4, 5].map(function (star) { return (react_1.default.createElement("span", { key: star, className: "text-yellow-500 text-lg" }, "\u2605")); })),
                                            react_1.default.createElement("p", { className: "text-gray-600 mb-4" }, "\"The handyman was professional, on time, and did excellent work fixing our kitchen sink. Will definitely use this service again!\""),
                                            react_1.default.createElement("p", { className: "font-medium" }, "- Sarah J.")))); }))),
                                react_1.default.createElement("div", { className: "flex justify-center mt-6" },
                                    react_1.default.createElement(tabs_1.TabsList, null,
                                        react_1.default.createElement(tabs_1.TabsTrigger, { value: "testimonial-1", className: "rounded-full w-2 h-2 p-0 mx-1" }),
                                        react_1.default.createElement(tabs_1.TabsTrigger, { value: "testimonial-2", className: "rounded-full w-2 h-2 p-0 mx-1" }),
                                        react_1.default.createElement(tabs_1.TabsTrigger, { value: "testimonial-3", className: "rounded-full w-2 h-2 p-0 mx-1" }))))))),
                react_1.default.createElement("section", { className: "py-16 bg-white w-full" },
                    react_1.default.createElement("div", { className: "w-full px-4 text-center" },
                        react_1.default.createElement("h2", { className: "text-3xl font-bold mb-6 text-gray-800" }, "Ready to get started?"),
                        react_1.default.createElement("div", { className: "max-w-xl mx-auto mb-8" },
                            react_1.default.createElement("p", { className: "mb-2" },
                                "A paragraph of text with an",
                                " ",
                                react_1.default.createElement("a", { href: "#", className: "text-blue-600 underline" }, "unsigned link"),
                                "."),
                            react_1.default.createElement("p", { className: "mb-2" },
                                "A second row of text with a",
                                " ",
                                react_1.default.createElement("a", { href: "#", className: "text-blue-600 underline" }, "web link"),
                                "."),
                            react_1.default.createElement("p", { className: "flex justify-center items-center" },
                                react_1.default.createElement("span", { className: "mr-2 text-blue-600 inline-block" }, "\uD83D\uDD27"),
                                react_1.default.createElement("span", null, "An icon inline with text."))),
                        react_1.default.createElement("div", { className: "flex flex-wrap justify-center gap-4" },
                            react_1.default.createElement(button_1.Button, { size: "lg", className: "px-8 py-6 text-lg" }, "Hire a Handyman"),
                            react_1.default.createElement(button_1.Button, { size: "lg", variant: "outline", className: "px-8 py-6 text-lg" }, "Register as a Handyman"))))),
            react_1.default.createElement("footer", { className: "bg-gray-100 border-t w-full" },
                react_1.default.createElement("div", { className: "container mx-auto py-8 px-4" },
                    react_1.default.createElement("div", { className: "mb-6" },
                        react_1.default.createElement("h3", { className: "text-lg font-bold text-gray-700 mb-4" }, "Stay connected"),
                        react_1.default.createElement("div", { className: "flex flex-wrap gap-4" },
                            react_1.default.createElement("a", { href: "#", className: "text-gray-600 hover:text-blue-700" }, "About Us"),
                            react_1.default.createElement("a", { href: "#", className: "text-gray-600 hover:text-blue-700" }, "Contact Us"),
                            react_1.default.createElement("a", { href: "#", className: "text-gray-600 hover:text-blue-700" }, "FAQs"),
                            react_1.default.createElement("a", { href: "#", className: "text-gray-600 hover:text-blue-700" }, "Privacy Policy"),
                            react_1.default.createElement("a", { href: "#", className: "text-gray-600 hover:text-blue-700" }, "Terms of Service"))),
                    react_1.default.createElement("div", { className: "border-t pt-6 text-center text-gray-500 text-sm" },
                        react_1.default.createElement("p", null, "\u00A9 2025 HandyMan. All rights reserved.")))))));
}
