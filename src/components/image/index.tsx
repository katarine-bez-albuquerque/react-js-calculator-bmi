import { Iimage } from "./Iimage";

const Image = ({ src, alt }:Iimage) => {
    return(
        <img src={ src } alt={ alt } />
    );
}

export default Image;