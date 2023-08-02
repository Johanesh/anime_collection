import { TextProps } from "../Text/index.type";

export interface TextHeadingProps extends TextProps {
    children: React.ReactNode,
    as?: "h1" | "h2" | "h3",
}