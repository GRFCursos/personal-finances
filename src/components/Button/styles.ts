import styled from "styled-components";

export const ButtonElement = styled.button<{ $borderRadius: string }>`
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.$borderRadius == 'sm' ? '8px' : '11px'} 0;
    outline: none;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    background-color: ${(props) => props.theme.COLORS.violet600};
    color: ${(props) => props.theme.COLORS.neutral100};
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: ${(props) => props.theme.COLORS.violet500};
    }
`