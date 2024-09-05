"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
function Nested() {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
         
          <title>First Nested Folder</title>
          <meta name="description" content="Information about nested folders"/>
           
  
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl text-center transform transition duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            First Nested Folder
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Make a folder within a folder. We can use parenthesis "()" to hide the file from routing, but it will work the same. It will keep folders inside it.
          </p>
          <link_1.default href={"/"} className="text-lg font-medium text-blue-600 hover:text-blue-800"> Home</link_1.default>
        </div>
      </div>);
}
exports.default = Nested;
