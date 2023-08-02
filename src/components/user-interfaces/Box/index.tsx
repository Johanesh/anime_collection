/** @jsxImportSource @emotion/react */
'use client'

import { BoxProps } from "./index.type"

export default function Box({
    children,
    display,
    width,
    maxWidth,
    height,
    border,
    borderBottom,
    padding,
    margin,
    overflow,
    backgroundColor,
    backgroundImg,
    backgroundSize,
    backgroundRepeat,
    whiteSpace,
    color,
    cursor,
    textAlign,
    zIndex,
    onClick,
}: BoxProps) {
    return (
        <div 
            css={[
                {
                    display: display || "block",
                    position: "relative",
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
                borderBottom && {
                    borderBottom: borderBottom,
                },
                overflow && {
                    overflow: overflow,
                },
                backgroundColor && {
                    backgroundColor: backgroundColor
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
                whiteSpace && {
                    whiteSpace: whiteSpace,
                },
                color && {
                    color: color,
                },
                cursor && {
                    cursor: cursor,
                },
                textAlign && {
                    textAlign: textAlign,
                },
                zIndex && {
                    zIndex: zIndex,
                },
            ]}
            onClick={onClick}
        >
            {children}
        </div>
    )
};