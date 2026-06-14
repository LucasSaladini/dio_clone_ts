import { useNavigate  } from "react-router-dom";
import { HomeContainer, Column, Title, TitleHighlight } from "./styles";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

const Feed = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
        <Header autenticado={true} />
            <HomeContainer>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight> # RANKING DA SEMANA </TitleHighlight>
                    <UserInfo percent={80} name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                    <UserInfo percent={27} name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                    <UserInfo percent={9} name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                    <UserInfo percent={5} name="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=4" />
                </Column>
            </HomeContainer>
        </>
    )
}

export { Feed }