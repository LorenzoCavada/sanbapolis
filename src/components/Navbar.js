import React, { useState } from "react";
import { Link } from "gatsby"
import ReorderIcon from '@material-ui/icons/Reorder';
import NavLink from "./NavLink";


function Navbar() {
  const [visible, setVisible] = useState(false)

  return (
    <header className="lg:px-16 px-10 flex flex-wrap items-center lg:py-4 py-6 shadow-lg">
      <div className="flex-1 flex justify-between items-center ">
        <Link to="/"><img src="https://www.operauni.tn.it/palestradiroccia/wp-content/uploads/2014/01/Logo_samba.png" alt="" /></Link>
        <div className="lg:hidden" onClick={() => setVisible(!visible)} >
          <ReorderIcon />
        </div>
      </div>

      <div className={"lg:flex lg:items-center lg:w-auto w-full" + (visible ? " block" : " hidden")} id="menu">
        <nav>
          <ul className="lg:flex items-center jusitfy-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <NavLink name={"Home"} url={"/"} />
            </li>
            <li>
              <NavLink name={"Fotografie"} url={"/fotografie/"} />
            </li>
            <li>
              <NavLink name={"Prezzi e Orari"} url={"/prezzi/"} />
            </li>
            <li>
              <NavLink name={"Regolamento"} url={"/regolamento/"} />
            </li>
            <li>
              <NavLink name={"Corsi"} url={"/corsi"} />
            </li>
            <li>
              <NavLink name={"Contatti"} url={"/contatti/"} />
            </li>
            <li>
              <NavLink name={"Regole Riapertura"} url={"/covid/"} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;