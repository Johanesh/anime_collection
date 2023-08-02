import { Property } from "csstype";

export interface TextProps {
    children: React.ReactNode,
    display?: string,
    width?: string,
    height?: string,
    fontSize?: string,
    color?:string,
    padding?: string,
    margin?: string,
    textAlign?: Property.TextAlign,
    overflow?: string,
    textOverflow?: string,
}