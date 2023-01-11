import Link from "next/link";
function Header() {
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link href="/">Contactos</Link>
        </li>
        <li className="nav-li">
          <Link href="/">Grupos</Link>
        </li>
        <li className="nav-li">
          <Link href="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
