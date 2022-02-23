import React from "react";
import "./styles.css";

const Pessoa = ({ props }) => (
  <>
    <h1 className="nome">{props.nome}</h1>
    <h2 className="idade">{props.idade}</h2>
  </>
);

export default Pessoa;
