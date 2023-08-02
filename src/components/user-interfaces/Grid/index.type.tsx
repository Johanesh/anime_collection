import { BoxProps } from "../Box/index.type";

export interface GridBoxProps extends BoxProps {
    templateCol?: string,
    templateRow?: string,
    justify?: string,
    align?: string,
    gap?: string,
}