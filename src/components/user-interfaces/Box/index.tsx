/** @jsxImportSource @emotion/react */
'use client'

export default function Box({
    children,
    display,
    width,
    maxWidth,
    height,
    border,
    padding,
    margin,
    overflow,
}: BoxProps) {
    return (
        <div css={[
                {
                    display: display || "block",
                    width: width || "auto",
                    height: height || "auto",
                    margin: margin || "auto",
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
                }
            ]}
        >
            {children}
        </div>
    )
};