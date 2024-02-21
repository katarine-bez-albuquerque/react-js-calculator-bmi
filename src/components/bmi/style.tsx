import styled from "styled-components";

export const Total = styled.article`
    width: 300px;
    height: 100%;
    text-align: center;

    p {
        font-size: 2.3rem;
        font-weight: 500;
        color: #FFF;
    }

    h2 {
        font-size: 4.8rem;
        font-weight: 700;
        color: #ffd42a;
    }

    @media(max-width: 580px) {
        p {
            font-size: 1.8rem;
        }
        h2 {
            font-size: 3.5rem;
        }
    }
`