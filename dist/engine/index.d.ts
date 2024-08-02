import React from "react";
import type { RenderingData, DomElement, Customs } from "./entities";
export default class Engine extends React.Component<{
    elements: RenderingData;
    customs?: CustomElements;
}> {
    renderElement(element: DomElement): any;
    render(): React.ReactNode;
}
export declare class CustomElements {
    elements: Customs;
    constructor();
    registerElements(elements: ((props: any) => JSX.Element)[]): void;
    getElement(key: string): (props: any) => JSX.Element;
}
