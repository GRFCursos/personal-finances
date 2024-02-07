import { HashLoader } from "react-spinners"
import { Container, Label } from "./styles"
import { useTheme } from "styled-components"

export const Loading = () => {
    const theme = useTheme()

    return (
        <Container>
            <HashLoader color={theme.COLORS.violet500} />
            <Label>Por favor aguarde ...</Label>
        </Container>
    )
}