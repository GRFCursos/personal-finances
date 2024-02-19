import styled from "styled-components";

export const Container = styled.div` 
    height: 100%; 
`

export const Table = styled.table`
    width: 100%; 
    border: 1px solid ${(props) => props.theme.COLORS.tableHeaderBorderColor};
    border-spacing: 0;
    border-radius: 8px;
`

export const TableHead = styled.thead` 
    background-color: ${props => props.theme.COLORS.tableRowHover};
    color: ${props => props.theme.COLORS.textColor500};  
`

export const TableBody = styled.tbody``

export const TableHeadCell = styled.th`
    padding: 14px 20px;
    text-align: left;
    border-right: 1px solid ${(props) => props.theme.COLORS.tableHeaderBorderColor};  
    border-bottom: 1px solid ${(props) => props.theme.COLORS.tableHeaderBorderColor};
    
    &:first-child {
        border-top-left-radius: 8px;
    }

    &:last-child {
        border-top-right-radius: 8px;
    }
`

export const TableRow = styled.tr`
   
`

export const TableCell = styled.td` 
    padding: 10px 20px; 
    color: ${props => props.theme.COLORS.textColor500};   
    border-right: 1px solid ${(props) => props.theme.COLORS.tableHeaderBorderColor};
    border-bottom: 1px solid ${(props) => props.theme.COLORS.tableHeaderBorderColor};
`

export const Actions = styled.div`
    display: flex;
    gap: 10px;
`

export const ActionBtn = styled.button<{ $variant: string }>`
    padding: 5px 10px;
    border-radius: 4px;
    background-color: red;
    border: none;
    outline: none;
    background-color: ${props => props.$variant == 'warning' ? props.theme.COLORS.warning : props.theme.COLORS.success};
    color: ${props => props.theme.COLORS.white};
`