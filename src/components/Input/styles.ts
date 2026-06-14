import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 100%;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #3B3450;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background: transparent;
    color: #FFFFFF;
    border: 0;
    height: 30px;
`

export const ErrorText = styled.span`
    color: #FF0000;
    font-size: 12px;
    margin-top 5px 0;
`