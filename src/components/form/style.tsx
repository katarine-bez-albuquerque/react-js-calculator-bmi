import styled from "styled-components";

export const FormSection = styled.form`
    width: 300px;
    height: 100%;
    padding: 1.5rem 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
        color: #FFF;
        font-size: 2rem;
        font-weight: 700;
    }

    h6 {
        font-size: 1rem;
        font-weight: 700;
        color: #FFF;
    }

    input[type="submit"],
    button[type="button"] {
        width: auto;
        height: auto;
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        box-sizing: border-box;
        border: 1px solid #ffd42a;
        color: #ffd42a;
        font-size: 1.2rem;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #333;
        cursor: pointer;
    }    

    button[type="button"]:focus {
        border: 1px solid #ffd42a;
        outline: 0 none;
    }

    section {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    article {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        box-sizing: border-box;
    }

    @media(max-width: 580px) {
        padding: 1.3rem 1rem;
    }
`