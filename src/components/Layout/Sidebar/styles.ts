import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div<{ $expanded: boolean }>`
    display: flex;
    flex-direction: column; 
    background-color: ${(props) => props.theme.COLORS.violet1000};
    width: ${(props) => props.$expanded ? '300px' : '80px'};
    transition: all .6s; 
`

export const Link = styled(LinkRouter)`
    text-decoration: none;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 26px 0;
    height: 44px;
    overflow: hidden;
`

export const HeaderLogo = styled.img``

export const HeaderIcon = styled(GiHamburgerMenu)`
    font-size: ${(props) => props.theme.FONT_SIZES.md};
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    flex: 1;
`

export const NavigationItem = styled.div<{ $isActive: boolean }>`
    display: flex;   
    padding: 14px 20px;
    gap: 14px; 
    border-radius: 4px; 
    cursor: pointer; 
    overflow: hidden;
    color: ${(props) => props.theme.COLORS.neutral500};
    background: ${(props) => props.$isActive && `${props.theme.COLORS.violet900}`};
 
    &:hover {
        background-color: ${(props) => props.theme.COLORS.violet900};
    }
`

export const NavigationItemIcon = styled.div`
    display: flex; 
    font-size: ${(props) => props.theme.FONT_SIZES.xl}; 
`

export const NavigationItemLabel = styled.span`
    display: flex; 
    align-items: center; 
    font-size: ${(props) => props.theme.FONT_SIZES.md};
    font-weight: 700;
`

export const Footer = styled.div`  
    border-top: 1px solid ${(props) => props.theme.COLORS.neutral900};
    margin: 10px; 
`

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 12px; 
    padding: 20px 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    
    &:hover {
        background-color: ${(props) => props.theme.COLORS.violet900};
    }
`

export const UserAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    min-height: 38px;
    border-radius: 50%;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.COLORS.violet500};
    color: ${(props) => props.theme.COLORS.neutral100};
    font-weight: 700;
`

export const UserName = styled.span`
    flex: 1;
    color: ${(props) => props.theme.COLORS.neutral400};
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
` 