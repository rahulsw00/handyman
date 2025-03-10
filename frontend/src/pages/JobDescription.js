"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JobDescription;
var react_1 = __importDefault(require("react"));
var avatar_1 = require("@/components/ui/avatar");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
function JobDescription() {
    // Sample job data - in a real app, this would likely come from props or a data fetch
    var jobData = {
        title: "Job Title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis inventore labore molestias exercitationem voluptates quasi recusandae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        amount: "50",
        location: "Location",
        avatarUrl: "/assets/dummypfp.webp",
        userInitials: "JD",
    };
    return (react_1.default.createElement("div", { className: "flex items-center justify-center h-screen w-screen" },
        react_1.default.createElement(card_1.Card, { className: "w-full max-w-md mx-auto" },
            react_1.default.createElement(card_1.CardHeader, { className: "pb-2" },
                react_1.default.createElement("div", { className: "flex items-center gap-4" },
                    react_1.default.createElement(avatar_1.Avatar, null,
                        react_1.default.createElement(avatar_1.AvatarImage, { src: jobData.avatarUrl, alt: "User Avatar" }),
                        react_1.default.createElement(avatar_1.AvatarFallback, null, jobData.userInitials)),
                    react_1.default.createElement("h2", { className: "text-xl font-bold" }, jobData.title))),
            react_1.default.createElement(card_1.CardContent, { className: "space-y-4" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "font-semibold mb-2" }, "Job Description:"),
                    react_1.default.createElement("p", { className: "text-gray-700" }, jobData.description)),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "font-semibold mb-2" }, "Job Location:"),
                    react_1.default.createElement("p", { className: "text-gray-700" }, jobData.location))),
            react_1.default.createElement(card_1.CardFooter, { className: "flex justify-between items-center border-t pt-4" },
                react_1.default.createElement("span", { className: "text-lg font-semibold" },
                    "$",
                    jobData.amount),
                react_1.default.createElement(button_1.Button, null, "Take Job")))));
}
