/** @jsxImportSource @emotion/react */
'use client'

import { TextProps } from "./index.type"

export default function Text({
    children,
    display,
    width,
    height,
    fontSize,
    fontWeight,
    color,
    padding,
    margin,
}: TextProps) {
    return (
        <p css={[
            {
                display: display || "inline-block",
                fontSize: fontSize || "14px",
                margin: margin || "auto",
                '& > a': {
                    color: "inherit",
                    textDecoration: "none"
                }
            },
            fontWeight && {
                fontWeight: fontWeight,
            },
            width && {
                width: width,
            },
            height && {
                height: height,
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