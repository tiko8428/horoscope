import Link from "next/link";
import { Signs } from "../constants/objects";

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  const SignsMenu = Signs.map(sign => (
    <li key={sign.id}>
      <Link as={`/${sign.name}`} href={`/?sign=${sign.name}`}>
        <a>{sign.name}</a>
      </Link>
    </li>
  ));
  return <ul>{SignsMenu}</ul>;
};

export default Header;
