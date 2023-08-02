import { BoxProps } from "../Box/index.type";

export interface MoveableBoxProps extends BoxProps {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
    zIndex?: number,
    transform?: string,
}