"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var avatar_1 = require("@/components/ui/avatar");
var card_1 = require("@/components/ui/card");
var button_1 = require("@/components/ui/button");
require("../styles/JobNode.css");
var JobNode = function () {
    var JobTitle = "Job Title";
    var JobDescription = "Job Description";
    var JobAmount = "$###";
    var ProfilePic = "../src/assets/dummypfp.webp";
    var UserName = "@shadcn";
    var AVFallback = UserName.slice(1, 2);
    return (react_1.default.createElement("div", { className: "jobnode" },
        react_1.default.createElement(card_1.Card, { className: "jobcard" },
            react_1.default.createElement(card_1.CardContent, { className: "jobcontent object-contain" },
                react_1.default.createElement("div", { className: "flex items-center space-x-8" },
                    react_1.default.createElement("div", { className: "col-1" },
                        react_1.default.createElement(avatar_1.Avatar, { className: "profile-pic" },
                            react_1.default.createElement(avatar_1.AvatarImage, { src: ProfilePic, alt: UserName }),
                            react_1.default.createElement(avatar_1.AvatarFallback, null, AVFallback.toUpperCase()))),
                    react_1.default.createElement("div", { className: "col-2 flex-1 space-y ml-0" },
                        react_1.default.createElement("div", { className: "grid grid-rows-4" },
                            react_1.default.createElement("div", { className: "row-start-1" },
                                react_1.default.createElement("span", { className: "flex items-center justify-between" },
                                    react_1.default.createElement("p", { className: "title text-sm font-medium leading-none" }, JobTitle),
                                    react_1.default.createElement("p", { className: "JobAmount text-sm font-medium leading-none" }, JobAmount))),
                            react_1.default.createElement("div", { className: "row-span-3" },
                                react_1.default.createElement("p", { className: "description text-sm text-muted-foreground text-wrap" }, JobDescription)))),
                    react_1.default.createElement("div", { className: "col-3" },
                        react_1.default.createElement(button_1.Button, { className: "take" },
                            react_1.default.createElement("a", { href: "/job" }, "Take"))))))));
};
exports.default = JobNode;
