"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomElements = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
class Engine extends react_1.default.Component {
    renderElement(element) {
        if (element.custom && !this.props.customs)
            throw new Error("CustomElements is not passed to the engine");
        let children;
        switch (element.type) {
            default:
                children = Array.isArray(element.children) ? element.children.map((el, index) => {
                    el.props.key = index;
                    return this.renderElement(el);
                }) : element.children;
                break;
        }
        const key = element.custom && this.props.customs ? this.props.customs.getElement(element.key) : element.key;
        return react_1.default.createElement(key, Object.assign({}, element.props), children);
    }
    render() {
        const routes = [];
        for (const key in this.props.elements) {
            const element = this.props.elements[key];
            routes.push({
                path: key,
                element: this.renderElement(element),
            });
        }
        const router = (0, react_router_dom_1.createBrowserRouter)(routes);
        return react_1.default.createElement(react_router_dom_1.RouterProvider, { router });
    }
}
exports.default = Engine;
class CustomElements {
    constructor() { this.elements = {}; }
    registerElements(elements) {
        elements.forEach((element) => {
            this.elements[element.name] = element;
        });
    }
    getElement(key) {
        if (key in this.elements)
            return this.elements[key];
        else
            throw new Error("Custom element with key: \"" + key + "\" is not found in the CustomElements register");
    }
}
exports.CustomElements = CustomElements;
