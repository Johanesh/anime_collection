/** @jsxImportSource @emotion/react */
'use client'

export default function TextHeading({
    as,
    children,
    display,
    width,
    height,
    fontSize,
    color,
    padding,
    margin,
}: TextHeadingProps) {
    const style = [
        {
            display: display || "block",
            margin: margin || "auto",
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
        padding && {
            padding: padding,
        },
        color && {
            color: color,
        },
        fontSize && {
            fontSize: fontSize,
        }
    ];
    
    switch (as) {
        case "h1":
            return (
                <h1
                    css={style}
                >
                    {children}
                </h1>
            )
        case "h2":
            return (
                <h2
                    css={style}
                >
                    {children}
                </h2>
            )
        case "h3":
            return (
                <h3
                    css={style}
                >
                    {children}
                </h3>
            )
        default:
            return (
                <h1
                    css={style}
                >
                    {children}
                </h1>
            )
    }
};