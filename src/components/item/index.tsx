import { Iitem } from "./Iitem";
import { ItemArticle } from "./style";

const Item = ({ description, title, classname }:Iitem) => {
    return (
        <ItemArticle className={ classname }>
            <p>{ description }</p>
            <h5>{ title }</h5>
        </ItemArticle>
    );
}

export default Item;