
import {useState} from 'react'
import { Link } from "react-router-dom";

function Header() {
  const [toggleHeader, setToggleHeader] = useState(false)

    const HeaderLinks = [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Shirts",
        link: "/shirts",
      },
      {
        title: "Add",
        link: "/shirts/add",
      },
    ];

  return (
    <body>
      <header class="site-header">
        <div class="site-identity">
          <h1>
            <a href="#">Good Cause T-shirts</a>
          </h1>
        </div>
        <nav class="site-navigation">
          <ul class="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shirts">T-shirts</Link>
            </li>
            <li>
              <Link to="/shirts/add">Add</Link>
            </li>
            
          </ul>
        </nav>
      </header>
    </body>
  );
}

export default Header