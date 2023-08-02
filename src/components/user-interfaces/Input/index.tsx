/** @jsxImportSource @emotion/react */
'use client'

export default function Input({
    display,
    width,
    maxWidth,
    height,
    border,
    padding,
    margin,
    type,
    value,
    onChange,
}: InputProps) {
    return (
        <input
            type={type || "text"}
            value={value}
            onChange={onChange}
            css={[
                {
                    display: display || "block",
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
            ]}
        />
    )
};