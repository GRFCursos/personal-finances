import styled from "styled-components";

export const InputElement = styled.input<{ $borderRadius?: 'sm' | 'md' }>`
    width: 100%;
    background-color: ${(props) => props.theme.COLORS.neutral100};
    color: ${(props) => props.theme.COLORS.neutral800}; 
    border: 1px solid ${(props) => props.theme.COLORS.neutral400};
    outline: none; 
    padding: 11px 20px; 
    box-sizing:  border-box;
    margin: 0;
    transition: all .3s;
    border-radius: ${(props) => props.$borderRadius == 'sm' ? '4px' : '40px'}; 

    &::placeholder {
        color: ${(props) => props.theme.COLORS.neutral700}; 
    }

    &:hover {  
        background-color: ${(props) => props.theme.COLORS.neutral200};
    }

    &:focus {
        border-color: ${(props) => props.theme.COLORS.violet500};;
    }
`