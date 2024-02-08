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

export const SignIn = () => {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [showError, setShowError] = useState('')

    const handleOnClick = async () => {
        
    }

    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>Entre na sua conta!</CardTitle>
                    <CardSubTitle>Insira as informações necessárias!</CardSubTitle>
                </CardHeader>

                <CardBody>
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
                    <Button onClick={() => null} >Entrar</Button>

                    <Link to='/signup'>
                        Não tem conta? Registrar-se
                    </Link>
                </CardFooter>
            </Card>
        </Container>
    )
}