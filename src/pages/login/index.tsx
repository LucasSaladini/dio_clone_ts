import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';

import { Column, Wrapper, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Container, TitleHighlight, TextContent } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { AuthContext } from '../../context/auth';

const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Email é obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required()
})

type IFormData = yup.InferType<typeof schema>;

const Login = () => {
    const { handleLogin} = useContext(AuthContext);

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });


    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData);
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        <TitleHighlight>Implemente <br /></TitleHighlight>
                        o seu futuro global agora
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare
                        seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input errorMessage={errors.email?.message} name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail color="#8647AD" />} />
                            <Input errorMessage={errors.password?.message} name="password" control={control} placeholder="Senha" type="password" leftIcon={<MdLock color="#8647AD" />} />
                            <Button title="Entrar" variant="secondary" type="submit"></Button>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }