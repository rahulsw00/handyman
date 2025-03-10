"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var react_1 = __importDefault(require("react"));
var react_router_1 = require("react-router");
var LandingPage_1 = __importDefault(require("./pages/LandingPage"));
var LoginRegistration_1 = __importDefault(require("./pages/LoginRegistration"));
var Categories_1 = __importDefault(require("./pages/Categories"));
var CategoryProps_1 = __importDefault(require("./pages/CategoryProps"));
var JobDescription_1 = __importDefault(require("./pages/JobDescription"));
var ProflePage_1 = __importDefault(require("./pages/ProflePage"));
var TakeJob_1 = __importDefault(require("./pages/TakeJob"));
var Navbar_1 = __importDefault(require("./components/Navbar"));
var AboutUs_1 = __importDefault(require("./pages/AboutUs"));
var TempNavBar_1 = __importDefault(require("./pages/TempNavBar"));
function App() {
    return (react_1.default.createElement(react_router_1.BrowserRouter, null,
        react_1.default.createElement(TempNavBar_1.default, null),
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement(react_router_1.Routes, null,
            react_1.default.createElement(react_router_1.Route, { path: "/", element: react_1.default.createElement(LandingPage_1.default, null) }),
            react_1.default.createElement(react_router_1.Route, { path: "/login", element: react_1.default.createElement(LoginRegistration_1.default, null) }),
            react_1.default.createElement(react_router_1.Route, { path: "/categories", element: react_1.default.createElement(Categories_1.default, null) }),
            react_1.default.createElement(react_router_1.Route, { path: "/categories/:categoryId", element: react_1.default.createElement(CategoryProps_1.default, { categoryName: "exampleCategoryName" }) }),
            react_1.default.createElement(react_router_1.Route, { path: "/job", element: react_1.default.createElement(JobDescription_1.default, null) }),
            react_1.default.createElement(react_router_1.Route, { path: "/profile", element: react_1.default.createElement(ProflePage_1.default, null) }),
            react_1.default.createElement(react_router_1.Route, { path: "/take-job", element: react_1.default.createElement(TakeJob_1.default, null) }),
            react_1.default.createElement(react_router_1.Route, { path: "/about-us", element: react_1.default.createElement(AboutUs_1.default, null) }))));
}
