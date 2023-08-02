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
    borderTop,
    borderBottom,
    padding,
    margin,
    overflow,
    background,
    backgroundColor,
    backgroundImg,
    backgroundSize,
    backgroundRepeat,
    backgroundPosition,
    verticalAlign,
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
                borderTop && {
                    borderTop: borderTop,
                },
                borderBottom && {
                    borderBottom: borderBottom,
                },
                overflow && {
                    overflow: overflow,
                },
                background && {
                    background: background
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
                backgroundPosition && {
                    backgroundPosition: backgroundPosition,
                },
                verticalAlign && {
                    verticalAlign: verticalAlign
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