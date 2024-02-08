import { ChangeEvent } from "react"
import { InputElement } from "./styles"

type Props = {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    borderRadius?: 'sm' | 'md'
}

export const Input = ({ value, onChange, placeholder, borderRadius = 'md' }: Props) => {
    return (
        <InputElement
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            $borderRadius={borderRadius}
        />
    )
}