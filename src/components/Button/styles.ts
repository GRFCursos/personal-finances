import styled from "styled-components";

export const ButtonElement = styled.button<{ $borderRadius: string, $size: string }>`
    width: ${(props) => props.$borderRadius == 'rounded' ? (props.$size == 'sm' ? '40px' : '48px') : '100%'};
    height: ${(props) => props.$borderRadius == 'rounded' && (props.$size == 'sm' ? '40px' : '48px')};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.$borderRadius != 'rounded' && (props.$size == 'sm' ? '5px' : '11px')} 0;
    outline: none;
    border: none;
    border-radius: ${(props) => props.$borderRadius == 'sm' ? '5px' : props.$borderRadius == 'md' ? '11px' : '50%'};
    font-weight: 600;
    background-color: ${(props) => props.theme.COLORS.violet600};
    color: ${(props) => props.theme.COLORS.neutral100};
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: ${(props) => props.theme.COLORS.violet500};
    }
`