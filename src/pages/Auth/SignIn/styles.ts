import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"

export const Container = styled.div`
    background-color: ${(props) => props.theme.COLORS.neutral400};
    height: 100vh;
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center; 
`

export const Card = styled.div`
    background-color: ${(props) => props.theme.COLORS.neutral100};
    padding: 30px;
    box-shadow: ${(props) => props.theme.COLORS.neutral900} 0px 3px 7px -6px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 360px;

    @media (max-width: 440px) {
        width: fit-content;
        margin: 0 10px;
    }
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const CardTitle = styled.span` 
    font-size: ${(props) => props.theme.FONT_SIZES.lg}; 
    font-weight: 800;
    color: ${(props) => props.theme.COLORS.neutral900};
`

export const CardSubTitle = styled.span` 
    font-size: ${(props) => props.theme.FONT_SIZES.sm};
    color: ${(props) => props.theme.COLORS.neutral800};
    font-weight: 600;
`

export const CardBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const CardFooter = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const Link = styled(LinkRouter)`
    font-size: ${(props) => props.theme.FONT_SIZES.sm};
    color: ${(props) => props.theme.COLORS.violet500};
`