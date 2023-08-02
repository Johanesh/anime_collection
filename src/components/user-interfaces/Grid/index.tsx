/** @jsxImportSource @emotion/react */
'use client'

import { GridBoxProps } from "./index.type"

export default function Grid({
    children,
    width,
    maxWidth,
    height,
    border,
    padding,
    margin,
    overflow,
    backgroundColor,
    color,
    cursor,
    textAlign,
    zIndex,
    templateCol,
    templateRow,
    justify,
    align,
    gap,
}: GridBoxProps) {
    return (
        <div 
            css={[
                {
                    display: "grid",
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
                    backgroundColor: backgroundColor
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
                templateCol && {
                    gridTemplateColumns: templateCol,
                },
                templateRow && {
                    gridTemplateRows: templateRow,
                },
                justify && {
                    justifyContent: justify,
                },
                align && {
                    alignContent: align,
                },
                gap && {
                    gap: gap,
                }
            ]}
        >
            {children}
        </div>
    )
};