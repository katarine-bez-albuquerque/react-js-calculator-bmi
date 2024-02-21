import { Iinput } from "./Iinput";
import { InputField } from "./style";

const Input = ({ type, complete, value, placeholder, name, onchange }:Iinput) => {
    return(
        <InputField autoComplete={ complete } type={ type } placeholder={ placeholder } name={ name } value={ value } onChange={ onchange }/>
    );
}

export default Input;