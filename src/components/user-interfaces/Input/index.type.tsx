interface InputProps {
    display?: string,
    width?: string,
    maxWidth?: string,
    height?: string,
    border?: string,
    padding?: string,
    margin?: string,
    type?: string,
    value?: string | number,
    placeholder?: string,
    onChange?: (value: string, name?: string) => void,
    onKeyUp?: (key: number) => void;
}