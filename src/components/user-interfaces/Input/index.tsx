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
    placeholder,
    onChange,
    onKeyUp,
}: InputProps) {
    return (
        <input
            type={type || "text"}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange ? onChange(e.target.value, e.target.name) : () => {}}
            onKeyUp={(e) => onKeyUp ? onKeyUp(e.keyCode) : () => {}}
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