import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;  
    gap: 5px;
    background-color: ${(props) => props.theme.COLORS.red500};
    padding: 15px;
    box-sizing: border-box;
    border-radius: 4px;
    color: white;
    font-size: ${(props) => props.theme.FONT_SIZES.sm};
    font-weight: 700;

    .icon {
        font-size: ${(props) => props.theme.FONT_SIZES.lg};
    }
`
