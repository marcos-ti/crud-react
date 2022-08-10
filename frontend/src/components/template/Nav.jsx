import "./Nav.css";
import React from "react";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      {/* Refatorar : cria componente: nav-item.jsx, depois importa pra nav,jsx e depois faz tipo assim: <i className={`fa fa-${props.icon}`}></i> {props.title}
       */}
      <a href="#/">
        <i className="fa fa-home"></i> Início
      </a>
      <a href="#/users">
        <i className="fa fa-users"></i> Usuário
      </a>
    </nav>
  </aside>
);
