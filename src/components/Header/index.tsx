import { useNavigate  } from 'react-router-dom';
import { 
    Wrapper, 
    Container, 
    Row, 
    Menu, 
    UserPicture, 
    Input, 
    SearchInputContainer } from './styles';
import logo from '../../assets/dio.png';
import { Button } from '../Button';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const navigate = useNavigate();

  const { user, handleSignOut } = useAuth();

  const handleClickSignIn = () => {
      navigate('/login')
  }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo DIO"  width={100}/>
                {user.id ? (
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
                {user.id ? (
                    <>
                        <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
                        <a href='#' onClick={handleSignOut}>Sair</a>
                    </>
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