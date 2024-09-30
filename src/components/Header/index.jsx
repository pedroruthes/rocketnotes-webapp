import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";

export default function Header() {

    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/pedroruthes.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Pedro Ruthes</strong>
                </div>
            </Profile>
            
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}