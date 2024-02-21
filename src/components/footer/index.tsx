import { Ifooter } from "./Ifooter";
import { BottonFooter } from "./style";

const Footer = ({ description }:Ifooter) => {
    return (
        <BottonFooter>
            <h6>{ description }</h6>
        </BottonFooter>
    );
}

export default Footer;