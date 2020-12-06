import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/checklists">Checklists</Link>
    <Link to="/counters">Counters</Link>
    <Link to="/reasons">Reasons</Link>
    <ThemeChanger/>
  </nav>
  
)
