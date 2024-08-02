export { default  as Engine } from "./engine";
export * from "./engine/entities";

export function Test() {
    return "Hello world"
}
/*export default function RenderApp(root: ReactDom.Container) {
    ReactDom.createRoot(root).render(
        React.createElement(Engine, 
            { elements: { "/": { type: "ELEMENT", key: "p", children: "Salut à tous" }} }
        ))
}*/