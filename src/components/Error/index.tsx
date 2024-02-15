import { MdInfoOutline } from "react-icons/md"
import { Container } from "./styles"

type Props = {
    message: string
}

export const Error = ({ message }: Props) => {
    return (
        <Container>
            <MdInfoOutline className="icon" />

            <span>{message}</span>
        </Container>
    )
}

export default Error;