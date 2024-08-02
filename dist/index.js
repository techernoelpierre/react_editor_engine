"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
exports.Test = Test;
var engine_1 = require("./engine");
Object.defineProperty(exports, "Engine", { enumerable: true, get: function () { return __importDefault(engine_1).default; } });
function Test() {
    return "Hello world";
}
/*export default function RenderApp(root: ReactDom.Container) {
    ReactDom.createRoot(root).render(
        React.createElement(Engine,
            { elements: { "/": { type: "ELEMENT", key: "p", children: "Salut à tous" }} }
        ))
}*/ 
