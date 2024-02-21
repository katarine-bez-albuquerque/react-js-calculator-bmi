import { Imain } from "./Imain";
import { Container } from "./style";

const Main = ({ children }:Imain) => {
    return(
       <Container>
            { children }
       </Container>
    );
}

export default Main;