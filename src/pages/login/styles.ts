import styled from "styled-components";
import banner from '../../assets/banner.png';

export const Container = styled.main`
    width: 100%;
    height: calc(100vh - 40px);
    background-image: linear-gradient(90deg, #1E192C 30%, rgba(30, 25, 44, 0.4) 100%), url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
    color: #FFF;
`

export const Column = styled.div`
    flex: 1;
    &:first-child {
        padding-left: 5%;
    }
`

export const Wrapper = styled.div`
    max-width: 300px;
    margin-right: 5%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #E5E044;
`

export const CriarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #E23DD7;
`