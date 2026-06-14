import styled from "styled-components";
import banner from '../../assets/banner.png';

export const HomeContainer = styled.main`
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

export const Wrapper = styled.div`
    flex: 1;
    padding-left: 10%;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFF;
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