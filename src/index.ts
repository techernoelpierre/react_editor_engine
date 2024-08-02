import React from "react";
import ReactDom from "react-dom/client";
import Engine from "./engine";

export default function RenderApp(root: ReactDom.Container) {
    ReactDom.createRoot(root).render(
        React.createElement(Engine, 
            { elements: { "/": { type: "ELEMENT", key: "p", children: "Salut à tous" }} }
        ))
}