import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { ButtonContainer, Container, Icon } from "./styles"

export const NotFound = () => {
    const navigate = useNavigate()

    const handleOnClick = () => navigate("/")

    return (
        <Container>
            <Icon />

            <ButtonContainer>
                <Button onClick={handleOnClick} size="md">
                    Voltar à página inicial
                </Button>
            </ButtonContainer>
        </Container>
    )
}