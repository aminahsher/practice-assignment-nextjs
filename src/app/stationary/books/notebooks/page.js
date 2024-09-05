"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
function hello() {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
  
      <title>Stock Page</title>
      <meta name="description" content="12 copies in stock"/>
    <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl text-center transform transition duration-500 hover:scale-105">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
        12 Copies in Stock
      </h1>
      <img src="/copy.jpg" alt="copy" className="mx-auto mb-4 rounded-lg shadow-md w-full h-auto max-w-sm"/>
      <br />
      
      <link_1.default href={"/stationary/books"} className="text-lg font-medium text-blue-600 hover:text-blue-800"> Books </link_1.default>
      <br />
      <link_1.default href={"/"} className="text-lg font-medium text-blue-600 hover:text-blue-800"> Home</link_1.default>
    </div>
  </div>);
}
exports.default = hello;
