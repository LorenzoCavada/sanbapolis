import React from "react";
import { Link } from "gatsby"

function NavLink(props){

  return(
    <Link to={props.url} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-green-500 transition duration-300">{props.name}</Link>
  )
}

export default NavLink;