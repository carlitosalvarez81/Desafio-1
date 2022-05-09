
import React from "react";
import CartIcon from "../CartIcon/CARTICON";

export default function Header() {
    return (
      <header>
          <ul>
              <li> INICIO</li>
              <li> NOSOTROS</li>
              <li> PRODUCTOS</li>
              <li> CONTACTO</li>
          </ul>
          <CartIcon count={8}/>
      </header>
    );
  }
  