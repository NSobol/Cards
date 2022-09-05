import React from "react";
import s from "./card.module.css";

function Card(props) {
  return (
    <div className={s.card}>
      {props.children}
      <div className={s["card-body"]}>
        <h5 className={s["card-title"]}>{props.title}</h5>
        <p className={s["card-text"]}>{props.text}</p>
        <a href={props.href} className={s["btn"]}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
}

export default Card;
