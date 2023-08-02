/** @jsxImportSource @emotion/react */
'use client'

import { MoveableBoxProps } from "./index.type"

export default function AbsoluteBox({
    children,
    display,
    width,
    maxWidth,
    height,
    border,
    padding,
    margin,
    overflow,
    backgroundColor,
    backgroundImg,
    backgroundSize,
    backgroundRepeat,
    top,
    right,
    bottom,
    left,
    zIndex,
    transform,
    transition,
}: MoveableBoxProps) {
    return (
        <div
            css={[
                {
                    display: display || "block",
                    position: "absolute",
                },
                top && {
                    top: top,
                },
                right && {
                    right: right,
                },
                bottom && {
                    bottom: bottom,
                },
                left && {
                    left: left,
                },
                transform && {
                    transform: transform,
                },
                zIndex && {
                    zIndex: zIndex,
                },
                width && {
                    width: width,
                },
                height && {
                    height: height,
                },
                margin && {
                    margin: margin,
                },
                padding && {
                    padding: padding,
                },
                maxWidth && {
                    maxWidth: maxWidth,
                },
                border && {
                    border: border,
                },
                overflow && {
                    overflow: overflow,
                },
                backgroundColor && {
                    backgroundColor: backgroundColor,
                },
                backgroundImg && {
                    backgroundImage: backgroundImg,
                },
                backgroundSize && {
                    backgroundSize: backgroundSize,
                },
                backgroundRepeat && {
                    backgroundRepeat: backgroundRepeat,
                },
                transition && {
                    transition: transition,
                }
            ]}
        >
            {children}
        </div>
    )
};