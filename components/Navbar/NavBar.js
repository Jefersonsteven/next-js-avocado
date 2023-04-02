import react from "react";
import Link from 'next/link';

function NavBar() {
  return ( 
    <nav>
      <menu>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
      </menu>
    </nav>
  );
}

export default NavBar;