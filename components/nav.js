import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="logo">LOGO</div>
        <ul>
          <li>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/hakkinda">
              <a>Hakkında</a>
            </Link>
          </li>
          <li>
            <Link activeClassName="active" href="/iletisim">
              <a>İletişim</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
