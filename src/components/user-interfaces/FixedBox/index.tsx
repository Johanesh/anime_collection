/** @jsxImportSource @emotion/react */
'use client'

import { MoveableBoxProps } from "../AbsoluteBox/index.type"

export default function FixedBox({
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
        <div
            css={[
                {
                    display: display || "block",
                    position: "fixed",
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
                }
            ]}
        >
            {children}
        </div>
    )
};