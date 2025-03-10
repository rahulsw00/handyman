"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var card_1 = require("@/components/ui/card");
var tabs_1 = require("@/components/ui/tabs");
var badge_1 = require("@/components/ui/badge");
var button_1 = require("@/components/ui/button");
var progress_1 = require("@/components/ui/progress");
var ProfilePage = function () {
    var _a = (0, react_1.useState)("overview"), activeTab = _a[0], setActiveTab = _a[1];
    // Sample user data - this would come from your API/backend
    var profile = {
        isHandyman: true,
        name: "Placeholder Username",
        avatar: "../src/assets/dummypfp.webp",
        location: "Dummy name, City",
        memberSince: "January 2023",
        rating: 4.8,
        totalReviews: 47,
        completedJobs: 52,
        bio: "Professional handyman with over 10 years of experience in home repair and maintenance. Specialized in plumbing, electrical work, and general carpentry. I take pride in delivering high-quality work with attention to detail.",
        jobType: "Handyman",
        specialties: ["Plumbing", "Electrical", "Carpentry", "Painting"],
        contactInfo: {
            email: "test@example.com",
            phone: "(0123) 123-4567",
        },
        availability: "Weekdays 8am-5pm",
        qualifications: [
            {
                name: "Certified Plumber",
                issuer: "National Plumbing Association",
                year: "2015",
            },
            {
                name: "Electrical Safety Certification",
                issuer: "Electrical Workers Union",
                year: "2017",
            },
        ],
        experience: [
            {
                role: "Lead Handyman",
                company: "Home Solutions Inc.",
                period: "2018 - Present",
                description: "Handling various home repair projects and leading a team of 3 handymen.",
            },
            {
                role: "Independent Contractor",
                company: "Self-employed",
                period: "2013 - 2018",
                description: "Provided home repair services to residential clients across the Bay Area.",
            },
        ],
        reviews: [
            {
                id: 1,
                name: "Jennifer S.",
                rating: 5,
                date: "March 15, 2024",
                comment: "Michael was prompt, professional, and fixed our leaky faucet in no time. Highly recommend!",
            },
            {
                id: 2,
                name: "Robert T.",
                rating: 4,
                date: "February 28, 2024",
                comment: "Great work installing our new light fixtures. Clean and efficient.",
            },
            {
                id: 3,
                name: "Sarah L.",
                rating: 5,
                date: "January 10, 2024",
                comment: "Michael went above and beyond with our kitchen cabinet repair. Very satisfied with his work.",
            },
        ],
        ratingBreakdown: {
            5: 35,
            4: 10,
            3: 2,
            2: 0,
            1: 0,
        },
    };
    // Function to render star ratings
    var renderStars = function (rating) {
        return (react_1.default.createElement("div", { className: "flex" }, [1, 2, 3, 4, 5].map(function (star) { return (react_1.default.createElement("svg", { key: star, xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 ".concat(star <= rating ? "text-yellow-400" : "text-gray-300"), viewBox: "0 0 20 20", fill: "currentColor" },
            react_1.default.createElement("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }))); })));
    };
    return (react_1.default.createElement("div", { className: "flex justify-center min-h-screen bg-gray-50 py-8 w-screen" },
        react_1.default.createElement("div", { className: "w-full max-w-6xl px-4" },
            react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
                react_1.default.createElement("div", { className: "md:col-span-1" },
                    react_1.default.createElement(card_1.Card, { className: "shadow-md overflow-hidden" },
                        react_1.default.createElement("div", { className: "bg-gradient-to-r from-blue-600 to-blue-800 h-24" }),
                        react_1.default.createElement("div", { className: "flex flex-col items-center -mt-12 px-4 pb-6" },
                            react_1.default.createElement("img", { src: profile.avatar, alt: profile.name, className: "w-24 h-24 rounded-full border-4 border-white bg-white" }),
                            react_1.default.createElement("h2", { className: "mt-4 text-xl font-bold" }, profile.name),
                            react_1.default.createElement("div", { className: "flex items-center mt-1 text-gray-600" },
                                react_1.default.createElement("svg", { className: "h-4 w-4 mr-1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                                    react_1.default.createElement("path", { fillRule: "evenodd", d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", clipRule: "evenodd" })),
                                profile.location),
                            react_1.default.createElement("div", { className: "flex items-center mt-3" },
                                renderStars(profile.rating),
                                react_1.default.createElement("span", { className: "ml-2 font-medium" }, profile.rating),
                                react_1.default.createElement("span", { className: "ml-1 text-gray-500" },
                                    "(",
                                    profile.totalReviews,
                                    " reviews)")),
                            profile.isHandyman && (react_1.default.createElement(badge_1.Badge, { className: "mt-3 bg-blue-600" }, profile.jobType)),
                            react_1.default.createElement("div", { className: "mt-4 w-full" },
                                react_1.default.createElement("div", { className: "flex justify-between text-sm" },
                                    react_1.default.createElement("span", null, "Member since"),
                                    react_1.default.createElement("span", { className: "font-medium" }, profile.memberSince)),
                                react_1.default.createElement("div", { className: "flex justify-between text-sm mt-2" },
                                    react_1.default.createElement("span", null, "Completed jobs"),
                                    react_1.default.createElement("span", { className: "font-medium" }, profile.completedJobs))),
                            react_1.default.createElement("div", { className: "flex flex-wrap gap-2 mt-4" }, profile.specialties.map(function (specialty, index) { return (react_1.default.createElement(badge_1.Badge, { key: index, variant: "outline", className: "bg-gray-100" }, specialty)); })),
                            react_1.default.createElement(button_1.Button, { className: "w-full mt-6" }, "Contact"))),
                    react_1.default.createElement(card_1.Card, { className: "mt-6 shadow-md" },
                        react_1.default.createElement(card_1.CardContent, { className: "pt-6" },
                            react_1.default.createElement("h3", { className: "font-semibold text-lg mb-4" }, "Contact Information"),
                            react_1.default.createElement("div", { className: "space-y-3" },
                                react_1.default.createElement("div", { className: "flex" },
                                    react_1.default.createElement("svg", { className: "h-5 w-5 mr-3 text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                                        react_1.default.createElement("path", { d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" }),
                                        react_1.default.createElement("path", { d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" })),
                                    react_1.default.createElement("span", null, profile.contactInfo.email)),
                                react_1.default.createElement("div", { className: "flex" },
                                    react_1.default.createElement("svg", { className: "h-5 w-5 mr-3 text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                                        react_1.default.createElement("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })),
                                    react_1.default.createElement("span", null, profile.contactInfo.phone)),
                                react_1.default.createElement("div", { className: "flex" },
                                    react_1.default.createElement("svg", { className: "h-5 w-5 mr-3 text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                                        react_1.default.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", clipRule: "evenodd" })),
                                    react_1.default.createElement("span", null,
                                        "Available ",
                                        profile.availability)))))),
                react_1.default.createElement("div", { className: "md:col-span-2" },
                    react_1.default.createElement(card_1.Card, { className: "shadow-md" },
                        react_1.default.createElement(card_1.CardContent, { className: "pt-6" },
                            react_1.default.createElement(tabs_1.Tabs, { defaultValue: activeTab, onValueChange: setActiveTab },
                                react_1.default.createElement(tabs_1.TabsList, { className: "grid grid-cols-3 mb-6" },
                                    react_1.default.createElement(tabs_1.TabsTrigger, { value: "overview" }, "Overview"),
                                    react_1.default.createElement(tabs_1.TabsTrigger, { value: "experience" }, "Experience"),
                                    react_1.default.createElement(tabs_1.TabsTrigger, { value: "reviews" }, "Reviews")),
                                react_1.default.createElement(tabs_1.TabsContent, { value: "overview", className: "space-y-6" },
                                    react_1.default.createElement("div", null,
                                        react_1.default.createElement("h3", { className: "font-semibold text-lg mb-2" }, "About"),
                                        react_1.default.createElement("p", { className: "text-gray-600" }, profile.bio)),
                                    profile.isHandyman &&
                                        profile.qualifications.length > 0 && (react_1.default.createElement("div", null,
                                        react_1.default.createElement("h3", { className: "font-semibold text-lg mb-3" }, "Qualifications"),
                                        react_1.default.createElement("div", { className: "space-y-3" }, profile.qualifications.map(function (qualification, index) { return (react_1.default.createElement("div", { key: index, className: "flex justify-between border-b pb-2" },
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("p", { className: "font-medium" }, qualification.name),
                                                react_1.default.createElement("p", { className: "text-sm text-gray-600" }, qualification.issuer)),
                                            react_1.default.createElement("span", { className: "text-gray-500" }, qualification.year))); }))))),
                                react_1.default.createElement(tabs_1.TabsContent, { value: "experience", className: "space-y-6" }, profile.experience.map(function (exp, index) { return (react_1.default.createElement("div", { key: index, className: "border-b pb-4 last:border-b-0" },
                                    react_1.default.createElement("div", { className: "flex justify-between" },
                                        react_1.default.createElement("h3", { className: "font-semibold" }, exp.role),
                                        react_1.default.createElement("span", { className: "text-gray-500" }, exp.period)),
                                    react_1.default.createElement("p", { className: "text-gray-600" }, exp.company),
                                    react_1.default.createElement("p", { className: "mt-2" }, exp.description))); })),
                                react_1.default.createElement(tabs_1.TabsContent, { value: "reviews", className: "space-y-6" },
                                    react_1.default.createElement("div", { className: "flex items-center space-x-6" },
                                        react_1.default.createElement("div", { className: "text-center" },
                                            react_1.default.createElement("div", { className: "text-3xl font-bold" }, profile.rating),
                                            react_1.default.createElement("div", { className: "mt-1" }, renderStars(profile.rating)),
                                            react_1.default.createElement("div", { className: "text-sm text-gray-500 mt-1" },
                                                profile.totalReviews,
                                                " reviews")),
                                        react_1.default.createElement("div", { className: "flex-1 space-y-2" }, [5, 4, 3, 2, 1].map(function (rating) { return (react_1.default.createElement("div", { key: rating, className: "flex items-center" },
                                            react_1.default.createElement("span", { className: "w-3" }, rating),
                                            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 text-yellow-400 mx-1", viewBox: "0 0 20 20", fill: "currentColor" },
                                                react_1.default.createElement("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })),
                                            react_1.default.createElement(progress_1.Progress, { value: (profile.ratingBreakdown[rating] /
                                                    profile.totalReviews) *
                                                    100, className: "h-2 flex-1" }),
                                            react_1.default.createElement("span", { className: "ml-2 text-sm text-gray-500 w-8" },
                                                Math.round((profile.ratingBreakdown[rating] /
                                                    profile.totalReviews) *
                                                    100),
                                                "%"))); }))),
                                    profile.reviews.map(function (review) { return (react_1.default.createElement("div", { key: review.id, className: "border-b pb-4 last:border-b-0" },
                                        react_1.default.createElement("div", { className: "flex justify-between" },
                                            react_1.default.createElement("div", null,
                                                react_1.default.createElement("h4", { className: "font-semibold" }, review.name),
                                                react_1.default.createElement("div", { className: "flex items-center mt-1" },
                                                    renderStars(review.rating),
                                                    react_1.default.createElement("span", { className: "ml-2 text-sm text-gray-500" }, review.date))),
                                            react_1.default.createElement("span", { className: "text-gray-500" }, review.rating)),
                                        react_1.default.createElement("p", { className: "mt-2 text-gray-600" }, review.comment))); }))))))))));
};
exports.default = ProfilePage;
