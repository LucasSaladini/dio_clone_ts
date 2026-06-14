import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { Column, Wrapper, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Container, TitleHighlight, TextContent } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { api } from "../../services/api";

const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Email é obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required()
})

type IFormData = yup.InferType<typeof schema>;

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });


    const onSubmit = async (formData: IFormData) => {
        console.log("Submitted formData:", formData);
        try {
            const url = `users?email=${formData.email}&senha=${formData.password}`;
            const { data } = await api.get(url);

            if (data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválidos');
            }
        } catch (err) {
            alert(`Houve um erro. Detalhes: ${err}`);
        }
    };

    return (
        <>
            <Header autenticado={false} />
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