import { ButtonElement } from "./styles"

type Props = {
    children: React.ReactNode,
    onClick: () => void,
    borderRadius?: 'sm' | 'md'
}

export const Button = ({ children, onClick, borderRadius = 'md' }: Props) => {
    return (
        <ButtonElement
            onClick={onClick}
            $borderRadius={borderRadius}
        >
            {children}
        </ButtonElement>
    )
}