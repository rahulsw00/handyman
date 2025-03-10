"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenubarShortcut = exports.MenubarSubTrigger = exports.MenubarSubContent = exports.MenubarRadioItem = exports.MenubarCheckboxItem = exports.MenubarLabel = exports.MenubarSeparator = exports.MenubarItem = exports.MenubarContent = exports.MenubarTrigger = exports.Menubar = void 0;
exports.MenubarMenu = MenubarMenu;
exports.MenubarRadioGroup = MenubarRadioGroup;
exports.MenubarPortal = MenubarPortal;
exports.MenubarGroup = MenubarGroup;
exports.MenubarSub = MenubarSub;
var React = __importStar(require("react"));
var MenubarPrimitive = __importStar(require("@radix-ui/react-menubar"));
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
function MenubarMenu(_a) {
    var props = __rest(_a, []);
    return React.createElement(MenubarPrimitive.Menu, __assign({}, props));
}
function MenubarGroup(_a) {
    var props = __rest(_a, []);
    return React.createElement(MenubarPrimitive.Group, __assign({}, props));
}
function MenubarPortal(_a) {
    var props = __rest(_a, []);
    return React.createElement(MenubarPrimitive.Portal, __assign({}, props));
}
function MenubarRadioGroup(_a) {
    var props = __rest(_a, []);
    return React.createElement(MenubarPrimitive.RadioGroup, __assign({}, props));
}
function MenubarSub(_a) {
    var props = __rest(_a, []);
    return React.createElement(MenubarPrimitive.Sub, __assign({ "data-slot": "menubar-sub" }, props));
}
var Menubar = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)("flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm", className) }, props)));
});
exports.Menubar = Menubar;
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Trigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className) }, props)));
});
exports.MenubarTrigger = MenubarTrigger;
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
    return (React.createElement(MenubarPrimitive.SubTrigger, __assign({ ref: ref, className: (0, utils_1.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className) }, props),
        children,
        React.createElement(lucide_react_1.ChevronRight, { className: "ml-auto h-4 w-4" })));
});
exports.MenubarSubTrigger = MenubarSubTrigger;
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.SubContent, __assign({ ref: ref, className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)));
});
exports.MenubarSubContent = MenubarSubContent;
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.align, align = _b === void 0 ? "start" : _b, _c = _a.alignOffset, alignOffset = _c === void 0 ? -4 : _c, _d = _a.sideOffset, sideOffset = _d === void 0 ? 8 : _d, props = __rest(_a, ["className", "align", "alignOffset", "sideOffset"]);
    return (React.createElement(MenubarPrimitive.Portal, null,
        React.createElement(MenubarPrimitive.Content, __assign({ ref: ref, align: align, alignOffset: alignOffset, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props))));
});
exports.MenubarContent = MenubarContent;
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(MenubarPrimitive.Item, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className) }, props)));
});
exports.MenubarItem = MenubarItem;
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
    return (React.createElement(MenubarPrimitive.CheckboxItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked }, props),
        React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
            React.createElement(MenubarPrimitive.ItemIndicator, null,
                React.createElement(lucide_react_1.Check, { className: "h-4 w-4" }))),
        children));
});
exports.MenubarCheckboxItem = MenubarCheckboxItem;
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement(MenubarPrimitive.RadioItem, __assign({ ref: ref, className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props),
        React.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" },
            React.createElement(MenubarPrimitive.ItemIndicator, null,
                React.createElement(lucide_react_1.Circle, { className: "h-4 w-4 fill-current" }))),
        children));
});
exports.MenubarRadioItem = MenubarRadioItem;
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (React.createElement(MenubarPrimitive.Label, __assign({ ref: ref, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className) }, props)));
});
exports.MenubarLabel = MenubarLabel;
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(MenubarPrimitive.Separator, __assign({ ref: ref, className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-muted", className) }, props)));
});
exports.MenubarSeparator = MenubarSeparator;
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("span", __assign({ className: (0, utils_1.cn)("ml-auto text-xs tracking-widest text-muted-foreground", className) }, props)));
};
exports.MenubarShortcut = MenubarShortcut;
MenubarShortcut.displayname = "MenubarShortcut";
