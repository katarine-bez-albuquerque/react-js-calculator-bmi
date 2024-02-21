import Link from "../link";
import Image from "../image";
import { Navbar } from "./style";
import { Inav } from "./Inav";

const Nav = ({ href1, href2, src1, src2, alt1, alt2 }:Inav) => {
    return (
        <Navbar>
            <Link href={ href1 }>
                <Image src={ src1 } alt={ alt1 } />
            </Link>
            <Link href={ href2 }>
                <Image src={ src2 } alt={ alt2 } />
            </Link>
        </Navbar>
    );
}

export default Nav;