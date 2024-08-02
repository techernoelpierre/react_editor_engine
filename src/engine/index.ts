import React from "react";
import type { RenderingData, DomElement, Customs } from "./entities";
import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";

export default class Engine extends React.Component<{
    elements: RenderingData;
    customs?: CustomElements;
}> {

    renderElement(element: DomElement): any {
        if (element.custom && !this.props.customs)
            throw new Error("CustomElements is not passed to the engine");
        let children;
        switch(element.type) {
            default:
            children = Array.isArray(element.children)? element.children.map((el, index) => {
                el.props.key = index;
                return this.renderElement(el);
            }) : element.children;
            break;
        }
        const key = element.custom && this.props.customs? this.props.customs.getElement(element.key) : element.key;

        return React.createElement(key, {...element.props}, children)
    }
    
    render(): React.ReactNode {
        const routes: RouteObject[] = [];
        for (const key in this.props.elements) {
            const element = this.props.elements[key];
            routes.push({
                path: key,
                element: this.renderElement(element),
            });
        }

        const router = createBrowserRouter(routes);
        return React.createElement(RouterProvider, { router });
    }
}

export class CustomElements {
    elements: Customs;

    constructor() {this.elements = {}}

    registerElements(elements: ((props: any) => JSX.Element)[]) {
        elements.forEach((element) => {
            this.elements[element.name] = element;
        });
    }

    getElement(key: string): (props: any) => JSX.Element {
        if (key in this.elements)
            return this.elements[key];
        else throw new Error("Custom element with key: \"" + key + "\" is not found in the CustomElements register")
    }
}
