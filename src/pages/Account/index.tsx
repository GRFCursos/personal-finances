import { useEffect, useState } from "react"
import TextInput from "../../components/TextInput"
import { Container, Header, HeaderTitle, HeaderSubtitle, Body, Footer, Loading } from "./styles"
import { Button } from "../../components/Button"
import { ScaleLoader } from "react-spinners"
import { useTheme } from "styled-components"
import Alert from "../../components/Alert"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { updateUser } from "../../services/requests"

export const Account = () => {
    const user = useAppSelector((state) => state.auth.user)

    const dispatch = useAppDispatch()

    const [loadingRequest, setLoadingRequest] = useState(false)
    const [nameValue, setNameValue] = useState(user?.name as string)
    const [emailValue, setEmailValue] = useState(user?.email as string)
    const [showAlert, setShowAlert] = useState({ type: "error", message: "", show: false })

    const theme = useTheme()

    const handleUpdateAccount = async () => {
        setLoadingRequest(true)
        const request = await updateUser(nameValue, emailValue)
        setLoadingRequest(false)

        if (request.error) {
            setShowAlert({ type: "error", message: request.error, show: true })
            return;
        }
    }

    return (
        <Container>
            <Header>
                <HeaderTitle>Minha Conta</HeaderTitle>
                <HeaderSubtitle>Edite os dados da sua conta, e depois clique em salvar!</HeaderSubtitle>
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
                <>
                    <Body>
                        <TextInput
                            label="Seu nome"
                            placeholder="Ex: João da Silva"
                            value={nameValue}
                            onChange={e => setNameValue(e.target.value)}
                            borderRadius="sm"
                        />

                        <TextInput
                            label="Seu email"
                            placeholder="Ex: joao1090@gmail.com"
                            value={emailValue}
                            onChange={e => setEmailValue(e.target.value)}
                            borderRadius="sm"
                        />
                    </Body>

                    <Footer>
                        <Button onClick={handleUpdateAccount} size="md" width="110px">
                            Salvar
                        </Button>
                    </Footer>
                </>
            }
        </Container>
    )
}