import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"

export const Wrapper = styled.div`
    background-color: ${(props) => props.theme.COLORS.neutral400};
    min-height: 100vh;
    display: flex;
    justify-content: center; 
`

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 420px;
`

export const ErrorAlert = styled.div`
    width: 100%;
    display: flex;  
    gap: 5px;
    background-color: ${(props) => props.theme.COLORS.red500};
    padding: 15px;
    box-sizing: border-box;
    border-radius: 4px;
    color: ${(props) => props.theme.COLORS.neutral100};
    font-size: ${(props) => props.theme.FONT_SIZES.sm};
    font-weight: 700; 

    .icon {
        font-size: ${(props) => props.theme.FONT_SIZES.lg};
    }
`

export const Card = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.COLORS.neutral100};
    padding: 30px;
    box-shadow: ${(props) => props.theme.COLORS.neutral900} 0px 3px 7px -6px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px; 
    box-sizing: border-box;
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