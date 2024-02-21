import { Iheader } from './Iheader';
import { TopHeader } from './style';
 
const Header = ({ title, date }:Iheader) => {
    return(
        <TopHeader>
            <h1>{ title }</h1>
            <span>{ date }</span>
        </TopHeader>
    );
}

export default Header;