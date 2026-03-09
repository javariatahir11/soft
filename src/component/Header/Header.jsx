import { FaBars, FaSearch, FaBell, FaUser, FaMoon, FaSun } from "react-icons/fa";
import { TiBook } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
function Header({ darkMode, setDarkMode }) {

  return (

      <header className="header">

        <div className="left">
          <TiBook className="menuIcon"/>
           <AiOutlineStar className="menuIcon"/>
          <span className="title">Dashboards</span>
          <span className="arrow">›</span>
          <span className="sub">Default</span>
        </div>

        <div className="searchBox">
          <FaSearch className="searchIcon"/>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="right">

          <div className="iconBox" onClick={() => setDarkMode(prev => !prev)}>
            {darkMode ? <FaSun/> : <FaMoon/>}
          </div>

          <div className="iconBox">
            <FaBell/>
          </div>

          <div className="iconBox">
            <FaUser/>
          </div>

        </div>

      </header>

  );
}

export default Header;