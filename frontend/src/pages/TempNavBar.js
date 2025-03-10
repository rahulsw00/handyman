"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TempNavBar = function () {
    return (react_1.default.createElement("div", { className: "bg-gray-500" },
        react_1.default.createElement("h3", null, "Temp Nav Bar"),
        react_1.default.createElement("div", { className: "flex" },
            react_1.default.createElement("a", { href: "/profile", className: "text-red-400" }, "Profile page"))));
};
exports.default = TempNavBar;
