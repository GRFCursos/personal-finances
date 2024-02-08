import { ButtonElement } from "./styles"

type Props = {
    children: React.ReactNode,
    onClick: () => void,
    size?: 'sm' | 'md',
    borderRadius?: 'sm' | 'md' | 'rounded'
}

export const Button = ({ children, onClick, size = 'sm', borderRadius = 'sm' }: Props) => {
    return (
        <ButtonElement
            onClick={onClick}
            $size={size}
            $borderRadius={borderRadius}
        >
            {children}
        </ButtonElement>
    )
}