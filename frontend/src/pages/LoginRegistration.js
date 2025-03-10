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
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var label_1 = require("@/components/ui/label");
var checkbox_1 = require("@/components/ui/checkbox");
var card_1 = require("@/components/ui/card");
var tabs_1 = require("@/components/ui/tabs");
var alert_1 = require("@/components/ui/alert");
var AuthPages = function () {
    var _a = (0, react_1.useState)("register"), activeTab = _a[0], setActiveTab = _a[1];
    var _b = (0, react_1.useState)(1), registrationStep = _b[0], setRegistrationStep = _b[1];
    var _c = (0, react_1.useState)(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    var _d = (0, react_1.useState)(""), email = _d[0], setEmail = _d[1];
    var _e = (0, react_1.useState)(""), otpCode = _e[0], setOtpCode = _e[1];
    var _f = (0, react_1.useState)(false), otpVerified = _f[0], setOtpVerified = _f[1];
    var _g = (0, react_1.useState)(false), termsAccepted = _g[0], setTermsAccepted = _g[1];
    // Handle registration form submission
    var handleRegister = function (e) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call to send verification email
        setTimeout(function () {
            setIsSubmitting(false);
            setRegistrationStep(2);
        }, 1500);
    };
    // Handle OTP verification
    var handleVerifyOTP = function (e) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate OTP verification
        setTimeout(function () {
            setIsSubmitting(false);
            if (otpCode.length === 6) {
                setOtpVerified(true);
                setTimeout(function () {
                    setRegistrationStep(3);
                }, 1000);
            }
        }, 1500);
    };
    // Handle final registration step
    var handleCompleteRegistration = function (e) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate final registration
        setTimeout(function () {
            setIsSubmitting(false);
            setActiveTab("login");
        }, 1500);
    };
    // Handle login form submission
    var handleLogin = function (e) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate login
        setTimeout(function () {
            setIsSubmitting(false);
            alert("Logged in successfully!");
        }, 1500);
    };
    var renderRegistrationStep = function () {
        switch (registrationStep) {
            case 1:
                return (react_1.default.createElement("form", { onSubmit: handleRegister },
                    react_1.default.createElement("div", { className: "space-y-4" },
                        react_1.default.createElement("div", { className: "space-y-2" },
                            react_1.default.createElement(label_1.Label, { htmlFor: "email" }, "Email Address"),
                            react_1.default.createElement(input_1.Input, { id: "email", type: "email", placeholder: "name@example.com", required: true, value: email, onChange: function (e) { return setEmail(e.target.value); } })),
                        react_1.default.createElement("div", { className: "flex items-center space-x-2" },
                            react_1.default.createElement(checkbox_1.Checkbox, { id: "terms", checked: termsAccepted, onCheckedChange: function (checked) {
                                    return setTermsAccepted(checked === true);
                                } }),
                            react_1.default.createElement(label_1.Label, { htmlFor: "terms", className: "text-sm" },
                                "I have read and agree to the",
                                " ",
                                react_1.default.createElement("a", { href: "#", className: "text-blue-600 hover:underline" }, "Terms of Service"),
                                " ",
                                "and",
                                " ",
                                react_1.default.createElement("a", { href: "#", className: "text-blue-600 hover:underline" }, "Privacy Policy"))),
                        react_1.default.createElement(button_1.Button, { type: "submit", className: "w-full", disabled: !termsAccepted || isSubmitting }, isSubmitting ? (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent text-white rounded-full" }),
                            "Sending verification...")) : ("Continue with Email")))));
            case 2:
                return (react_1.default.createElement("form", { onSubmit: handleVerifyOTP },
                    react_1.default.createElement("div", { className: "space-y-4" },
                        react_1.default.createElement(alert_1.Alert, { className: "bg-blue-50 text-blue-800 border-blue-200" },
                            react_1.default.createElement(alert_1.AlertDescription, { className: "text-sm" },
                                "We've sent a verification code to",
                                " ",
                                react_1.default.createElement("span", { className: "font-medium" }, email))),
                        react_1.default.createElement("div", { className: "space-y-2" },
                            react_1.default.createElement(label_1.Label, { htmlFor: "otp" }, "Enter Verification Code"),
                            react_1.default.createElement(input_1.Input, { id: "otp", type: "text", placeholder: "6-digit code", required: true, value: otpCode, onChange: function (e) {
                                    return setOtpCode(e.target.value.replace(/[^0-9]/g, "").slice(0, 6));
                                }, maxLength: 6, pattern: "\\d{6}", className: "text-center text-lg tracking-widest" })),
                        otpVerified && (react_1.default.createElement(alert_1.Alert, { className: "bg-green-50 text-green-800 border-green-200" },
                            react_1.default.createElement("div", { className: "flex items-center" },
                                react_1.default.createElement("svg", { className: "h-4 w-4 mr-2", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" },
                                    react_1.default.createElement("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" })),
                                react_1.default.createElement(alert_1.AlertDescription, { className: "text-sm" }, "Email verified successfully!")))),
                        react_1.default.createElement(button_1.Button, { type: "submit", className: "w-full", disabled: otpCode.length !== 6 || isSubmitting || otpVerified }, isSubmitting ? (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent text-white rounded-full" }),
                            "Verifying...")) : ("Verify Code")),
                        react_1.default.createElement("div", { className: "text-center text-sm" },
                            react_1.default.createElement("span", { className: "text-gray-500" }, "Didn't receive a code?"),
                            " ",
                            react_1.default.createElement("button", { type: "button", className: "text-blue-600 hover:underline", onClick: function () {
                                    alert("New code sent!");
                                    setOtpCode("");
                                } }, "Resend")))));
            case 3:
                return (react_1.default.createElement("form", { onSubmit: handleCompleteRegistration },
                    react_1.default.createElement("div", { className: "space-y-4" },
                        react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4" },
                            react_1.default.createElement("div", { className: "space-y-2" },
                                react_1.default.createElement(label_1.Label, { htmlFor: "firstName" }, "First Name"),
                                react_1.default.createElement(input_1.Input, { id: "firstName", required: true })),
                            react_1.default.createElement("div", { className: "space-y-2" },
                                react_1.default.createElement(label_1.Label, { htmlFor: "lastName" }, "Last Name"),
                                react_1.default.createElement(input_1.Input, { id: "lastName", required: true }))),
                        react_1.default.createElement("div", { className: "space-y-2" },
                            react_1.default.createElement(label_1.Label, { htmlFor: "password" }, "Choose a Password"),
                            react_1.default.createElement(input_1.Input, { id: "password", type: "password", required: true }),
                            react_1.default.createElement("p", { className: "text-xs text-gray-500" }, "Password must be at least 8 characters")),
                        react_1.default.createElement("div", { className: "space-y-2" },
                            react_1.default.createElement(label_1.Label, { htmlFor: "workspace" }, "Workspace Name"),
                            react_1.default.createElement(input_1.Input, { id: "workspace", placeholder: "Your Company Name", required: true }),
                            react_1.default.createElement("p", { className: "text-xs text-gray-500" }, "This is where you'll collaborate with your team")),
                        react_1.default.createElement(button_1.Button, { type: "submit", className: "w-full", disabled: isSubmitting }, isSubmitting ? (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement("div", { className: "mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent text-white rounded-full" }),
                            "Creating account...")) : ("Complete Registration")))));
            default:
                return null;
        }
    };
    return (react_1.default.createElement("div", { className: "flex items-center justify-center min-h-screen bg-gray-50 p-4 w-screen" },
        react_1.default.createElement("div", { className: "w-full max-w-md" },
            react_1.default.createElement(card_1.Card, { className: "shadow-lg" },
                react_1.default.createElement(card_1.CardHeader, { className: "space-y-1 text-center" },
                    react_1.default.createElement("div", { className: "flex justify-center mb-2" },
                        react_1.default.createElement("div", { className: "flex items-center" },
                            react_1.default.createElement("h2", { className: "text-2xl font-semibold text-gray-700" }, "Handyman"))),
                    react_1.default.createElement(tabs_1.Tabs, { defaultValue: activeTab, value: activeTab, onValueChange: setActiveTab, className: "w-full" },
                        react_1.default.createElement(tabs_1.TabsList, { className: "grid w-full grid-cols-2" },
                            react_1.default.createElement(tabs_1.TabsTrigger, { value: "login" }, "Login"),
                            react_1.default.createElement(tabs_1.TabsTrigger, { value: "register" }, "Register")),
                        react_1.default.createElement(tabs_1.TabsContent, { value: "register", className: "mt-4" },
                            react_1.default.createElement(card_1.CardContent, { className: "pt-4" },
                                react_1.default.createElement(card_1.CardDescription, { className: "text-center mb-4" },
                                    registrationStep === 1 &&
                                        "Create your account to get started",
                                    registrationStep === 2 && "Verify your email address",
                                    registrationStep === 3 &&
                                        "Just a few more details to complete setup"),
                                renderRegistrationStep())),
                        react_1.default.createElement(tabs_1.TabsContent, { value: "login", className: "mt-4" },
                            react_1.default.createElement(card_1.CardContent, { className: "pt-4" },
                                react_1.default.createElement(card_1.CardDescription, { className: "text-center mb-4" }, "Welcome back! Enter your credentials to continue."),
                                react_1.default.createElement("form", { onSubmit: handleLogin },
                                    react_1.default.createElement("div", { className: "space-y-4" },
                                        react_1.default.createElement("div", { className: "space-y-2" },
                                            react_1.default.createElement(label_1.Label, { htmlFor: "loginEmail" }, "Email Address"),
                                            react_1.default.createElement(input_1.Input, { id: "loginEmail", type: "email", required: true })),
                                        react_1.default.createElement("div", { className: "space-y-2" },
                                            react_1.default.createElement("div", { className: "flex items-center justify-between" },
                                                react_1.default.createElement(label_1.Label, { htmlFor: "loginPassword" }, "Password"),
                                                react_1.default.createElement("a", { href: "#", className: "text-xs text-blue-600 hover:underline" }, "Forgot password?")),
                                            react_1.default.createElement(input_1.Input, { id: "loginPassword", type: "password", required: true })),
                                        react_1.default.createElement(button_1.Button, { type: "submit", className: "w-full", disabled: isSubmitting }, isSubmitting ? (react_1.default.createElement(react_1.default.Fragment, null,
                                            react_1.default.createElement("div", { className: "mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent text-white rounded-full" }),
                                            "Logging in...")) : ("Sign In")))))))),
                react_1.default.createElement(card_1.CardFooter, { className: "border-t border-gray-100 p-4" },
                    react_1.default.createElement("p", { className: "text-center text-xs text-gray-500 w-full" }, "By using our service, you agree to our Terms of Service and Privacy Policy."))))));
};
exports.default = AuthPages;
