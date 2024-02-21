import { Ibmi } from "./Ibmi";
import { Total } from "./style";

const BMI = ({ description, value }:Ibmi) => {
    return(
        <Total>
            <p>{ description }</p>
            <h2>{ value }</h2>
        </Total>
    );
}

export default BMI;