import { useEffect, useState } from "react"
import { Input } from "../../components/Input"
import {
    Card,
    CardBody,
    CardHeader,
    CardSubTitle,
    CardTitle,
    Container,
    CardFooter,
    Link,
    ErrorAlert,
    Wrapper
} from "./styles"
import { Button } from "../../components/Button"
import { MdInfoOutline } from "react-icons/md";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

type Props = {
    type: 'signin' | 'signup'
}

export const Auth = ({ type }: Props) => {
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [showError, setShowError] = useState('')

    const { handleSignIn, handleSignUp } = useAuth()

    const navigate = useNavigate()

    const handleOnClick = async () => {
        const [name, email, password] = [nameInput, emailInput, passwordInput]

        if ((type == 'signup' && !name) || !email || !password) {
            setShowError('Preencha todos os campos!')
            return;
        }

        const request = await (type == 'signin' ? handleSignIn({ email, password }) : handleSignUp({ name, email, password }))

        if (request != true) {
            setShowError(request)
            return;
        }

        // Redirect user after authentication
        navigate('/')
    }

    useEffect(() => {
        setShowError('')
    }, [type])

    return (
        <Wrapper>
            <Container>
                {showError &&
                    <ErrorAlert>
                        <MdInfoOutline className="icon" />
                        {showError}
                    </ErrorAlert>
                }

                <Card>
                    <CardHeader>
                        <CardTitle>
                            {type == 'signin' ? 'Entre na sua conta!' : 'Criar uma conta!'}
                        </CardTitle>
                        <CardSubTitle>Insira as informações necessárias!</CardSubTitle>
                    </CardHeader>

                    <CardBody>
                        {type == 'signup' &&
                            <Input
                                value={nameInput}
                                placeholder="Digite seu nome"
                                onChange={e => setNameInput(e.target.value)}
                                borderRadius="sm"
                            />
                        }

                        <Input
                            value={emailInput}
                            placeholder="Digite seu email"
                            onChange={e => setEmailInput(e.target.value)}
                            borderRadius="sm"
                        />
                        <Input
                            value={passwordInput}
                            placeholder="Digite sua senha"
                            onChange={e => setPasswordInput(e.target.value)}
                            borderRadius="sm"
                        />
                    </CardBody>

                    <CardFooter>
                        <Button onClick={handleOnClick}>
                            {type == 'signin' ? 'Entrar' : 'Registrar-se'}
                        </Button>

                        {type == 'signin' ?
                            <Link to='/signup'>
                                Não tem conta? Registrar-se
                            </Link>
                            :
                            <Link to='/signin'>
                                Já tem conta? Entrar
                            </Link>
                        }
                    </CardFooter>
                </Card>
            </Container>
        </Wrapper>
    )
}