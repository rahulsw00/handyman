"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var avatar_1 = require("@/components/ui/avatar");
var card_1 = require("@/components/ui/card");
var button_1 = require("@/components/ui/button");
require("../styles/HandymanNode.css");
var HandymanNode = function () {
    var Name = "Handyman Name";
    var AboutHandyman = "brief description about the handyman their job and experience";
    var ProfilePic = "../src/assets/dummypfp.webp";
    var Rating = "user rating: 4.5";
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
                        react_1.default.createElement("div", { className: "grid grid-rows-5 justify-center align-middle " },
                            react_1.default.createElement("div", { className: "row-start-1" },
                                react_1.default.createElement("p", { className: "title text-sm font-medium leading-none" }, Name)),
                            react_1.default.createElement("div", { className: "row-span-3" },
                                react_1.default.createElement("p", { className: "description text-sm text-muted-foreground text-wrap" }, AboutHandyman)),
                            react_1.default.createElement("div", { className: "row-span-1" },
                                react_1.default.createElement("p", { className: "description text-sm text-muted-foreground text-wrap" }, Rating)))),
                    react_1.default.createElement("div", { className: "col-3" },
                        react_1.default.createElement(button_1.Button, { className: "take" }, "Hire")))))));
};
exports.default = HandymanNode;
