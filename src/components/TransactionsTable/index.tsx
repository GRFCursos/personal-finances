import { ActionBtn, Actions, Container, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "./styles"

export const TransactionsTable = () => {

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell style={{ width: 1 }}>#ID</TableHeadCell>
                        <TableHeadCell>Título</TableHeadCell>
                        <TableHeadCell>Data</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell>Valor</TableHeadCell>
                        <TableHeadCell style={{ width: 1 }}>Ações</TableHeadCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell>#ID</TableCell>
                        <TableCell>Título</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>
                            <Actions>
                                <ActionBtn $variant="warning">D</ActionBtn>
                                <ActionBtn $variant="danger">D</ActionBtn>
                            </Actions>
                        </TableCell>
                    </TableRow> <TableRow>
                        <TableCell>#ID</TableCell>
                        <TableCell>Título</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>
                            <Actions>
                                <ActionBtn $variant="warning">D</ActionBtn>
                                <ActionBtn $variant="danger">D</ActionBtn>
                            </Actions>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    )
}