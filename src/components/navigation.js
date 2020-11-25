import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <Link to="/checklists">Checklists</Link>
    <Link to="/counters">Counters</Link>
    <ThemeChanger/>
  </nav>
  
)
