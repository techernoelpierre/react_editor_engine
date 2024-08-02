export type Nullable<T = any> = T | null | undefined;
export type DomElementType = "ELEMENT" | "MAP";
export interface DomElement {
    type: DomElementType;
    key: string;
    custom?: boolean;
    props?: Nullable;
    data?: Nullable;
    children: Nullable<DomElement[] | string>;
}
export interface Customs {
    [key: string]: (props: any) => JSX.Element;
}
export interface RenderingData {
    [key: string]: DomElement;
}
