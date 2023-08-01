/** @jsxImportSource @emotion/react */
'use client'

import { transform } from "typescript"

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
    top,
    right,
    bottom,
    left,
    zIndex,
    transform,
}: MoveableBoxProps) {
    return (
        <div css={[
                {
                    display: display || "block",
                    position: "absolute",
                    top: top || "auto",
                    right: right || "auto",
                    bottom: bottom || "auto",
                    left: left || "auto",
                    transform: transform || "none",
                    zIndex: zIndex || 1,
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
                }
            ]}
        >
            {children}
        </div>
    )
};