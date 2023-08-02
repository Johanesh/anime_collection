/** @jsxImportSource @emotion/react */
'use client'

import { TextProps } from "./index.type"

export default function Text({
    children,
    display,
    width,
    height,
    fontSize,
    color,
    padding,
    margin,
}: TextProps) {
    return (
        <p css={[
            {
                display: display || "inline-block",
                fontSize: fontSize || "14px",
                '& > a': {
                    color: "inherit",
                    textDecoration: "none"
                }
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
            color && {
                color: color,
            }
        ]}>
            {children}
        </p>
    )
};