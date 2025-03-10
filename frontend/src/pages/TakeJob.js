"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TakeJob;
var react_1 = __importDefault(require("react"));
var select_1 = require("@/components/ui/select");
// Inline JobNode component to remove external import
var JobNode = function () {
    return (react_1.default.createElement("div", { className: "w-[350px] p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" },
        react_1.default.createElement("div", { className: "mb-2" },
            react_1.default.createElement("h3", { className: "text-xl font-bold" }, "Plumber")),
        react_1.default.createElement("div", { className: "space-y-2" },
            react_1.default.createElement("div", { className: "flex items-center text-muted-foreground" },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mr-2 h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })),
                react_1.default.createElement("span", null, "Dummy, Location")),
            react_1.default.createElement("div", { className: "flex items-center text-muted-foreground" },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mr-2 h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })),
                react_1.default.createElement("span", null, "$####"))),
        react_1.default.createElement("div", { className: "mt-4 text-sm text-muted-foreground" }, "Looking for plumber"),
        react_1.default.createElement("div", { className: "mt-4 flex justify-between" },
            react_1.default.createElement("button", { className: "px-4 py-2 border rounded bg-white hover:bg-gray-100" }, "Learn More"),
            react_1.default.createElement("button", { className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" },
                react_1.default.createElement("a", { href: "/job", className: "text-black" }, "Take job")))));
};
function TakeJob() {
    var jobNodes = Array.from({ length: 10 }, function (_, index) { return (react_1.default.createElement(JobNode, { key: index })); });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "category flex flex-wrap gap-1 mb-4" },
            react_1.default.createElement(select_1.Select, null,
                react_1.default.createElement(select_1.SelectTrigger, { className: "w-[180px]" },
                    react_1.default.createElement(select_1.SelectValue, { placeholder: "Category" })),
                react_1.default.createElement(select_1.SelectContent, null,
                    react_1.default.createElement(select_1.SelectItem, { value: "Category1" }, "Category1"),
                    react_1.default.createElement(select_1.SelectItem, { value: "Category2" }, "Category2"),
                    react_1.default.createElement(select_1.SelectItem, { value: "Category3" }, "Category3"),
                    react_1.default.createElement(select_1.SelectItem, { value: "Category4" }, "Category4"))),
            react_1.default.createElement(select_1.Select, null,
                react_1.default.createElement(select_1.SelectTrigger, { className: "w-[180px]" },
                    react_1.default.createElement(select_1.SelectValue, { placeholder: "Location" })),
                react_1.default.createElement(select_1.SelectContent, null,
                    react_1.default.createElement(select_1.SelectItem, { value: "Location1" }, "Location1"),
                    react_1.default.createElement(select_1.SelectItem, { value: "Location2" }, "Location2"),
                    react_1.default.createElement(select_1.SelectItem, { value: "Location3" }, "Location3"),
                    react_1.default.createElement(select_1.SelectItem, { value: "Location5" }, "Location4")))),
        react_1.default.createElement("div", { className: "flex flex-wrap justify-center items-center w-screen" },
            react_1.default.createElement("div", { className: "container w-full h-full flex flex-wrap gap-4 justify-center items-start" }, jobNodes))));
}
