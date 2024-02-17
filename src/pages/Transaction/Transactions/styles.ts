import { MdSearch } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.COLORS.background};
    height: 100%;
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 60px 40px 50px;
    border-bottom: 1px solid ${(props) => props.theme.COLORS.borderColor};
`

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column; 
`

export const HeaderSearch = styled.div`
    display: flex;
    gap: 15px;
    min-width: 25%; 
`

export const HeaderSearchInput = styled.div`
    flex: 1;
`

export const HeaderSearchIcon = styled(MdSearch)`
    font-size: ${(props) => props.theme.FONT_SIZES.md};
`

export const HeaderTitle = styled.span`
    font-size: ${(props) => props.theme.FONT_SIZES.xl};
    color: ${(props) => props.theme.COLORS.textColor500};
    font-weight: 800;
`

export const HeaderSubtitle = styled.span`
    font-size: ${(props) => props.theme.FONT_SIZES.sm};
    color: ${(props) => props.theme.COLORS.textColor400};
`

export const Body = styled.div`
    padding: 30px 50px;
    flex: 1;
`