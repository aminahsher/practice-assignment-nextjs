"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
function page() {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-4">
  <div className="text-center bg-white p-10 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-6">
      Welcome to the World of Technologies
    </h1>
    <img src="/mobile.jpg" alt="Mobile image" className="h-40 w-auto mx-auto rounded-lg shadow-md"/>
    <link_1.default href={"/"} className="text-lg font-medium text-blue-600 hover:text-blue-800"> Home</link_1.default>
  </div>
    </div>);
}
exports.default = page;
