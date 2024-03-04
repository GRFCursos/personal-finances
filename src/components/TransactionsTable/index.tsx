import { useTheme } from "styled-components"
import { Transaction } from "../../@types/Transaction"
import { ActionBtn, Actions, Container, DeleteIcon, EditIcon, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "./styles"

type Props = {
    data: Transaction[],
    onEdit: (id: number) => void,
    onDelete: (id: number) => void
}

export const TransactionsTable = ({ data, onEdit, onDelete }: Props) => {
    const theme = useTheme()

    const formatDate = (date: number) => (
        new Intl.DateTimeFormat('pt-BR').format(date)
    )

    const formatValue = (value: number) => (
        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    )

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
                    {data.map((transaction, key) => (
                        <TableRow key={key}>
                            <TableCell>
                                #{transaction.id}
                            </TableCell>
                            <TableCell>
                                {transaction.title}
                            </TableCell>
                            <TableCell>
                                {formatDate(transaction.created_at)}
                            </TableCell>
                            <TableCell>
                                {transaction.status === 'pending' ? 'Pendente' : 'Pago'}
                            </TableCell>
                            <TableCell
                                style={{ color: transaction.amount >= 0 ? theme.COLORS.success : theme.COLORS.danger }}
                            >
                                {formatValue(transaction.amount)}
                            </TableCell>
                            <TableCell>
                                <Actions>
                                    <ActionBtn $variant="warning" onClick={() => onEdit(transaction.id)}>
                                        <EditIcon />
                                    </ActionBtn>
                                    <ActionBtn $variant="danger" onClick={() => onDelete(transaction.id)}>
                                        <DeleteIcon />
                                    </ActionBtn>
                                </Actions>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}