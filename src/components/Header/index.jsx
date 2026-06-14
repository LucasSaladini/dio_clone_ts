import { useNavigate  } from 'react-router-dom';
import { 
    Wrapper, 
    Container, 
    Row, 
    Column, 
    Menu, 
    MenuRight, 
    UserPicture, 
    Input, 
    SearchInputContainer } from './styles';
import logo from '../../assets/dio.png';
import { Button } from '../Button';

const Header = ({ autenticado }) => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/login')
  }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo DIO"  width={100}/>
                {autenticado ? (
                    <>
                        <SearchInputContainer>
                            <Input placeholder="Buscar" />
                        </SearchInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
                ) : (
                    <>
                        <Button title="Entrar" onClick={handleClickSignIn} />
                        <Button title="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }