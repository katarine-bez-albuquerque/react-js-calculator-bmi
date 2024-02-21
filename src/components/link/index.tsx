import { ILink } from "./ILink";

const Link = ({ href, children }:ILink) => {
    return(
        <a target="_blank" href={ href }>{ children }</a>
    );
}

export default Link;