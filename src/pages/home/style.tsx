import styled from "styled-components";

export const CalculateSection = styled.section`
    width: 90%;
    height: 60vh;
    padding: 3rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 768px) {
        height: auto;
    }

    @media(max-width: 580px) {
        padding: 1.3rem 1rem;
    }
`

export const ResultSection = styled.section`
    width: 90%;
    height: auto;
    padding: 3rem 1rem;
    margin: 2rem 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255, 0.05);

    h2 {
        font-size: 2rem;
        font-weight: 700;
        line-height: 3.5rem;
        color: #FFF;
    }

    .active {
        border: 3px solid #FFF;
    }

    .desactive {
        border: 0 none;
    }

    @media(max-width: 768px) {
        height: auto;
    }

    @media(max-width: 580px) {
        padding: 1.3rem 1rem;
      h2 {
         font-size: 1.7rem;
      }
   }
`

export const Items = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    h5 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #ffd42a;
        line-height: 2.3rem;
    }
`

export const SectionImage = styled.section`
    width: 100%;
    height: auto;
    padding: 0 3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 4rem;
        height: auto;
    }
`