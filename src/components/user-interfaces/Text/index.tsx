/** @jsxImportSource @emotion/react */
'use client'

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
                width: width || "auto",
                height: height || "auto",
                margin: margin || "auto",
                fontSize: fontSize || "14px",
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