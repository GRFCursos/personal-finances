import { useState } from "react"
import { Container, Header, HeaderInfo, HeaderSearchInput, HeaderSearch, HeaderSubtitle, HeaderTitle, Loading, HeaderSearchIcon, Body } from "./styles"
import { ScaleLoader } from "react-spinners"
import { useTheme } from "styled-components"
import Alert from "../../../components/Alert"
import { Button } from "../../../components/Button"
import TextInput from "../../../components/TextInput"
import { TransactionsTable } from "../../../components/TransactionsTable"

export const Transactions = () => {
    const [loadingRequest, setLoadingRequest] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [showAlert, setShowAlert] = useState({ type: "error", message: "", show: false })

    const theme = useTheme()

    const handleSearch = () => {
        
    }

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

                    />
                </Body>
            }
        </Container>
    )
}