import styled from 'styled-components';

export const TopHeader = styled.header`
   width: 100%;
   height: 70px;
   padding: 1rem 3rem;
   box-sizing: border-box;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: #333;
   background-color: #ffd42a;

   h1 {
      font-size: 2.5rem;
      font-weight: 700;
   }

   span {
      font-size: 2rem;
      font-weight: 700;
   }

   @media(max-width: 580px) {
      h1,
      span {
         font-size: 1.5rem;
      }
   }
`;