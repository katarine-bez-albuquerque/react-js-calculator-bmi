import styled from "styled-components";

export const ItemArticle = styled.article`
    width: 450px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.1rem;
        font-weight: 500;
        color: #FFF;
    }

    h5 {
        color: #ffd42a;
    }

    @media(min-width: 576px) {
        width: 250px;
    }    

    @media(min-width: 992px) {
        width: 300px;
    }

    @media(min-width: 1200px) {
        width: 350px;
    }    
`