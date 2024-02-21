import { ILink } from "./ILink";

const Link = ({ href, children, onclick }:ILink) => {
    return(
        <a target="_blank" href={ href } onClick={onclick}>{ children }</a>
    );
}

export default Link;