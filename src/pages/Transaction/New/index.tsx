import { useState } from "react"
import SelectInput from "../../../components/SelectInput"
import TextInput from "../../../components/TextInput"
import { Container, Header, HeaderTitle, HeaderSubtitle, Body, Footer, Loading, ErrorContainer } from "./styles"
import { Button } from "../../../components/Button"
import { ScaleLoader } from "react-spinners"
import { useTheme } from "styled-components"
import Error from "../../../components/Error"

export const NewTransaction = () => {
    const [loadingRequest, setLoadingRequest] = useState(false)
    const [titleValue, setTitleValue] = useState('')
    const [amountValue, setAmountValue] = useState('')
    const [statusValue, setStatusValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const theme = useTheme()

    const handleOnClick = async () => {
        if (!titleValue || !amountValue || !statusValue) {
            setErrorMessage('Preencha todos os campos!')
            return;
        }
    }

    return (
        <Container>
            <Header>
                <HeaderTitle>Nova transação</HeaderTitle>
                <HeaderSubtitle>Crie uma nova transação, preencha os campos abaixo e clique em salvar!</HeaderSubtitle>
            </Header>

            {errorMessage &&
                <ErrorContainer>
                    <Error message={errorMessage} />
                </ErrorContainer>
            }

            {loadingRequest &&
                <Loading>
                    <ScaleLoader color={theme.COLORS.primary} />
                </Loading>
            }

            {!loadingRequest &&
                <>
                    <Body>
                        <TextInput
                            label="Título da transação"
                            placeholder="Ex: Salário"
                            value={titleValue}
                            onChange={e => setTitleValue(e.target.value)}
                            borderRadius="sm"
                        />

                        <TextInput
                            label="Valor"
                            placeholder="Ex: 1.000,00"
                            value={amountValue}
                            onChange={e => setAmountValue(e.target.value)}
                            borderRadius="sm"
                        />

                        <SelectInput
                            label="Status"
                            options={[{ label: 'Pendente', value: 'pending' }, { label: 'Concluído', value: 'completed' }]}
                            value={statusValue}
                            onChange={e => setStatusValue(e.target.value)}
                        />
                    </Body>

                    <Footer>
                        <Button onClick={handleOnClick} size="md" width="110px">
                            Salvar
                        </Button>
                    </Footer>
                </>
            }
        </Container>
    )
}