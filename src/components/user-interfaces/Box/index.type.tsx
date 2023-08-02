import { Property } from "csstype";

export interface BoxProps {
    children?: React.ReactNode,
    display?: string,
    width?: string,
    maxWidth?: string,
    height?: string,
    border?: string,
    padding?: string,
    margin?: string,
    overflow?: string,
    backgroundColor?: string,
    backgroundImg?: string,
    backgroundSize?: string,
    backgroundRepeat?: string,
    color?: string,
    cursor?: string,
    textAlign?: Property.TextAlign,
    zIndex?: number,
    onClick?: () => void,
}