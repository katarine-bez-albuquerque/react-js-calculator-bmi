import { Iform } from "./Iform";
import { FormSection } from "./style";

const Form = ({ children, onsubmit }:Iform) => {
    return(
        <FormSection onSubmit={ onsubmit }>
            { children }
        </FormSection>
    );
}

export default Form;