import { Container, Links, Content } from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Section from "../../components/Section";
import Tag from "../../components/Tag";

export default function Details() {

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText title="Excluir nota" />

                    <h1>Introdução ao React</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorum quibusdam non perspiciatis odit? Quidem blanditiis 
                        fuga tempora. Harum odio voluptatem soluta voluptate 
                        consequuntur dicta, amet iste dignissimos cumque rem 
                        aspernatur. Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Dolorum quibusdam non perspiciatis 
                        odit? Quidem blanditiis fuga tempora. Harum odio 
                        voluptatem soluta voluptate consequuntur dicta, amet 
                        iste dignissimos cumque rem aspernatur.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://www.rocketseat.com.br/</a></li>
                            <li><a href="#">https://www.rocketseat.com.br/</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express" />
                        <Tag title="nodejs" />
                    </Section>

                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>
    )
}