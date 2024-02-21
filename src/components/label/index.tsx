import { ILabel } from "./ILabel";
import { TextLabel } from "./style";

const Label = ({ description }:ILabel) => {
    return(
        <TextLabel>{ description }</TextLabel>
    )
}

export default Label;