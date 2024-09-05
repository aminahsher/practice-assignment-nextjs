"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
function page() {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
       
        <title>Books Page</title>
        <meta name="description" content="Books of all classes are available"/>
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
          Books of All Classes Are Available
        </h1>
        <img src="/books.jpg" alt="book"/>
        <br />
        <link_1.default href={"/"} className="text-lg font-medium text-blue-600 hover:text-blue-800"> Home</link_1.default>
       
      </div>
      
    </div>);
}
exports.default = page;