import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      {/* Refatorar : cria componente: nav-item.jsx, depois importa pra nav,jsx e depois faz tipo assim: <i className={`fa fa-${props.icon}`}></i> {props.title}
       */}
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Usuário
      </Link>
    </nav>
  </aside>
);
