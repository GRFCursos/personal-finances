import { useState } from "react"
import { Input } from "../../../components/Input"
import {
    Card,
    CardBody,
    CardHeader,
    CardSubTitle,
    CardTitle,
    Container,
    CardFooter,
    Link
} from "./styles"
import { Button } from "../../../components/Button"

export const SignUp = () => {
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>Criar uma conta!</CardTitle>
                    <CardSubTitle>Insira as informações necessárias!</CardSubTitle>
                </CardHeader>

                <CardBody>
                    <Input
                        value={nameInput}
                        placeholder="Digite seu nome"
                        onChange={e => setNameInput(e.target.value)}
                        borderRadius="sm"
                    />

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
                    <Button onClick={() => null}>Registrar-se</Button>

                    <Link to='/signin'>
                        Já tem conta? Entrar
                    </Link>
                </CardFooter>
            </Card>
        </Container>
    )
}