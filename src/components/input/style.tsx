import styled from "styled-components";

export const InputField = styled.input`
    width: 150px;
    height: 50px;
    padding: 1rem 0.5rem;
    box-sizing: border-box;
    color: #FFF;
    background-color: #333;
    border-bottom: 1px solid #FFF;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    &:focus {
        border-bottom: 1px solid #FFF;
        outline: 0 none!important;        
    }
    &:active {
        background-color: #333;
    }
`