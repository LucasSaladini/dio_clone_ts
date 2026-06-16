import { useNavigate  } from "react-router-dom";
import { HomeContainer, TextContent, Title, TitleHighlight, Wrapper } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <HomeContainer>
                <Wrapper>
                    <Title>
                        <TitleHighlight>Implemente <br />
                        </TitleHighlight>
                        o seu futuro global agora
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare
                        seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
                </Wrapper>
            </HomeContainer>
        </>
    )
}

export { Home }