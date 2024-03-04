import { useEffect, useState } from "react"
import { Container, Header, HeaderInfo, HeaderSearchInput, HeaderSearch, HeaderSubtitle, HeaderTitle, Loading, HeaderSearchIcon, Body } from "./styles"
import { ScaleLoader } from "react-spinners"
import { useTheme } from "styled-components"
import Alert from "../../../components/Alert"
import { Button } from "../../../components/Button"
import TextInput from "../../../components/TextInput"
import { TransactionsTable } from "../../../components/TransactionsTable"
import { deleteTransaction, getTransactions } from "../../../services/requests"
import { Transaction } from "../../../@types/Transaction"
import { useNavigate } from "react-router-dom"

export const Transactions = () => {
    const [loadingRequest, setLoadingRequest] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [showAlert, setShowAlert] = useState({ type: "error", message: "", show: false })
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [transactionsFiltered, setTransactionsFiltered] = useState<Transaction[]>([])

    const theme = useTheme()
    const navigate = useNavigate()

    const handleGetTransactions = async () => {
        setLoadingRequest(true)
        const request = await getTransactions()
        setLoadingRequest(false)

        if (request.data) {
            setTransactions(request.data?.transactions)
            setTransactionsFiltered(request.data?.transactions)
        }

        if (request.error) {
            setShowAlert({ type: "error", message: request.error, show: true })
        }
    }

    const handleSearch = () => {
        setTransactionsFiltered(transactions.filter(transaction => transaction.title.toLowerCase().includes(searchValue.toLowerCase())))
    }

    const handleEditTransaction = (id: number) => navigate(`/transacoes/${id}/editar`)

    const handleDeleteTransaction = async (id: number) => {
        if (window.confirm("Tem certeza que deseja excluir esta transação?")) {
            setLoadingRequest(true)
            await Promise.all([deleteTransaction(id), handleGetTransactions()])
            setLoadingRequest(false)
        }
    }

    useEffect(() => {
        handleGetTransactions()
    }, [])

    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <HeaderTitle>Transações</HeaderTitle>
                    <HeaderSubtitle>Consulte e gerencie todas as suas transações e filtre sua busca por título!</HeaderSubtitle>
                </HeaderInfo>

                <HeaderSearch>
                    <HeaderSearchInput>
                        <TextInput
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            placeholder="Pesquisar por..."
                        />
                    </HeaderSearchInput>

                    <Button
                        onClick={handleSearch}
                        borderRadius="rounded"
                    >
                        <HeaderSearchIcon />
                    </Button>
                </HeaderSearch>
            </Header>

            <Alert
                type={showAlert.type}
                title={showAlert.message}
                show={showAlert.show}
                setShow={show => setShowAlert({ ...showAlert, show })}
            />

            {loadingRequest &&
                <Loading>
                    <ScaleLoader color={theme.COLORS.primary} />
                </Loading>
            }

            {!loadingRequest &&
                <Body>
                    <TransactionsTable
                        data={transactionsFiltered}
                        onEdit={handleEditTransaction}
                        onDelete={handleDeleteTransaction}
                    />
                </Body>
            }
        </Container>
    )
}