import { Container } from "./styles";

export default function ButtonText({ title, isActive = false, ...rest }) {

    return (
        <Container
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </Container>
    )
}