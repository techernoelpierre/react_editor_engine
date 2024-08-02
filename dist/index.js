"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RenderApp;
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const engine_1 = __importDefault(require("./engine"));
function RenderApp(root) {
    client_1.default.createRoot(root).render(react_1.default.createElement(engine_1.default, { elements: { "/": { type: "ELEMENT", key: "p", children: "Salut à tous" } } }));
}
