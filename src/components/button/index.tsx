import { Ibutton } from "./Ibutton";

const Button = ({ name, onclick }:Ibutton) => {
    return(
        <button type="button" onClick={ onclick }>{ name }</button>
    );
}

export default Button;