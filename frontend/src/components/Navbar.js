"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_1 = require("@/components/ui/button");
var Navbar = function () {
    return (react_1.default.createElement("header", { className: "sticky top-0 z-50 bg-white border-b shadow-sm" },
        react_1.default.createElement("div", { className: "container flex items-center justify-between py-4 mx-auto px-4" },
            react_1.default.createElement("div", { className: "flex items-center" },
                react_1.default.createElement("div", { className: "text-xl font-bold text-blue-700" }, "HANDYMAN")),
            react_1.default.createElement("nav", { className: "hidden md:flex items-center gap-8" },
                react_1.default.createElement("a", { href: "/", className: "text-gray-600 hover:text-blue-700" }, "Home"),
                react_1.default.createElement("a", { href: "/categories", className: "text-gray-600 hover:text-blue-700" }, "Categories"),
                react_1.default.createElement("a", { href: "/take-job", className: "text-gray-600 hover:text-blue-700" }, "Jobs"),
                react_1.default.createElement("a", { href: "/about-us", className: "text-gray-600 hover:text-blue-700" }, "About Us")),
            react_1.default.createElement("div", null,
                react_1.default.createElement(button_1.Button, { variant: "outline", className: "hidden md:inline-flex mr-2" },
                    react_1.default.createElement("a", { href: "/login" }, "Login"))))));
};
exports.default = Navbar;
