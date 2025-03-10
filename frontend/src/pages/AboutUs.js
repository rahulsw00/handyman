"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var card_1 = require("@/components/ui/card");
var avatar_1 = require("@/components/ui/avatar");
var button_1 = require("@/components/ui/button");
var AboutUs = function () {
    var teamMembers = [
        {
            name: "Dummy Name",
            role: "Founder & Senior Technician",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quos, quidem, quibusdam, quas fugit quod quae quia voluptates doloribus quae.",
            imageSrc: "../src/assets/dummypfp.webp",
        },
        {
            name: "Dummy Name2",
            role: "Operations Manager",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quos, quidem, quibusdam, quas fugit quod quae quia voluptates doloribus quae.",
            imageSrc: "../src/assets/dummypfp.webp",
        },
        {
            name: "Dummy Name3",
            role: "Lead Electrician",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quos, quidem, quibusdam, quas fugit quod quae quia voluptates doloribus quae.",
            imageSrc: "../src/assets/dummypfp.webp",
        },
    ];
    return (react_1.default.createElement("div", { className: "flex justify-center items-center h-full bg-gray-100 w-screen" },
        react_1.default.createElement("div", { className: "container mx-auto px-4 py-12" },
            react_1.default.createElement("div", { className: "text-center mb-12" },
                react_1.default.createElement("h1", { className: "text-4xl font-bold text-gray-800 mb-4" }, "About Handyman"),
                react_1.default.createElement("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto" }, "We're a dedicated team of skilled professionals committed to providing reliable, high-quality home repair and maintenance services. Our mission is to make home repairs hassle-free and efficient.")),
            react_1.default.createElement("div", { className: "grid md:grid-cols-3 gap-8" }, teamMembers.map(function (member, index) { return (react_1.default.createElement(card_1.Card, { key: index, className: "hover:shadow-lg transition-shadow duration-300" },
                react_1.default.createElement(card_1.CardHeader, { className: "flex flex-col items-center" },
                    react_1.default.createElement(avatar_1.Avatar, { className: "w-24 h-24 mb-4" },
                        react_1.default.createElement(avatar_1.AvatarImage, { src: member.imageSrc, alt: member.name }),
                        react_1.default.createElement(avatar_1.AvatarFallback, null, member.name
                            .split(" ")
                            .map(function (n) { return n[0]; })
                            .join(""))),
                    react_1.default.createElement(card_1.CardTitle, { className: "text-center" },
                        react_1.default.createElement("h2", { className: "text-xl font-semibold" }, member.name),
                        react_1.default.createElement("p", { className: "text-sm text-gray-500" }, member.role))),
                react_1.default.createElement(card_1.CardContent, { className: "text-center" },
                    react_1.default.createElement("p", { className: "text-gray-600 mb-4" }, member.bio)))); })),
            react_1.default.createElement("div", { className: "text-center mt-12" },
                react_1.default.createElement("h2", { className: "text-3xl font-bold text-gray-800 mb-6" }, "Our Commitment"),
                react_1.default.createElement("div", { className: "max-w-4xl mx-auto grid md:grid-cols-3 gap-6" },
                    react_1.default.createElement("div", { className: "bg-gray-100 p-6 rounded-lg" },
                        react_1.default.createElement("h3", { className: "text-xl font-semibold mb-4" }, "Quality Service"),
                        react_1.default.createElement("p", { className: "text-gray-600" }, "We guarantee professional, thorough, and reliable service for every job.")),
                    react_1.default.createElement("div", { className: "bg-gray-100 p-6 rounded-lg" },
                        react_1.default.createElement("h3", { className: "text-xl font-semibold mb-4" }, "Experienced Team"),
                        react_1.default.createElement("p", { className: "text-gray-600" }, "Our technicians are skilled professionals with years of specialized experience.")),
                    react_1.default.createElement("div", { className: "bg-gray-100 p-6 rounded-lg" },
                        react_1.default.createElement("h3", { className: "text-xl font-semibold mb-4" }, "Customer Satisfaction"),
                        react_1.default.createElement("p", { className: "text-gray-600" }, "We prioritize your needs and work until you're completely satisfied.")))),
            react_1.default.createElement("div", { className: "text-center mt-12" },
                react_1.default.createElement(button_1.Button, { variant: "default", size: "lg" }, "Contact Us Today")))));
};
exports.default = AboutUs;
