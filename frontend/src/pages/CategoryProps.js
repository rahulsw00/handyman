"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_1 = require("@/components/ui/button");
var CategoryLandingPage = function (_a) {
    var _b = _a.categoryName, categoryName = _b === void 0 ? "plumber" : _b;
    return (react_1.default.createElement("div", { className: "flex flex-col min-h-screen bg-gray-50" },
        react_1.default.createElement("div", { className: "relative w-full h-64 md:h-80 lg:h-96 bg-blue-600" },
            react_1.default.createElement("div", { className: "absolute inset-0 flex flex-col justify-center items-center text-center p-6" },
                react_1.default.createElement("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" },
                    "Looking for a ",
                    categoryName,
                    "?"),
                react_1.default.createElement("p", { className: "text-lg md:text-xl text-white" },
                    "Find a trusty ",
                    categoryName,
                    " in your area")),
            react_1.default.createElement("div", { className: "absolute bottom-4 right-4" },
                react_1.default.createElement(button_1.Button, { variant: "secondary", size: "lg", className: "font-semibold" }, "Post a job"))),
        react_1.default.createElement("div", { className: "w-full p-6 md:p-12" },
            react_1.default.createElement("h2", { className: "text-2xl font-bold mb-6" },
                "Top ",
                categoryName,
                "s near you"),
            react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" }, [1, 2, 3, 4, 5, 6, 8].map(function (item) { return (react_1.default.createElement("div", { key: item, className: "bg-white p-6 rounded-lg shadow-md" },
                react_1.default.createElement("h3", { className: "font-bold mb-2" },
                    "Professional ",
                    categoryName,
                    " ",
                    item),
                react_1.default.createElement("p", { className: "text-gray-600 mb-4" }, "\u2605\u2605\u2605\u2605\u2605 (4.8) \u00B7 24 reviews"),
                react_1.default.createElement("p", { className: "text-sm text-gray-500" }, "Available today \u00B7 3 KM away"))); })),
            react_1.default.createElement("div", { className: "mt-8 flex justify-center" },
                react_1.default.createElement(button_1.Button, { className: "w-full md:w-auto" },
                    "View all ",
                    categoryName,
                    "s")))));
};
exports.default = CategoryLandingPage;
