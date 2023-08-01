/** @jsxImportSource @emotion/react */
'use client'

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
}: MoveableBoxProps) {
    return (
        <div css={[
                {
                    display: display || "block",
                    position: "fixed",
                    top: top || "auto",
                    right: right || "auto",
                    bottom: bottom || "auto",
                    left: left || "auto",
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