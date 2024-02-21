import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    height: 80px;
    padding: 1.2rem 3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a:focus {
        border: 0 none;
        outline: 0 none;
    }

    a img {
        width: 50px;
        height: 50px;
    }    

    @media(max-width: 786px) {
        justify-content: center;
    }

    @media(max-width: 786px) {
        padding: 0.5rem 3rem;
    }
`