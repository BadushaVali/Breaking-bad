import React from "react";
import styles from "./App.module.css";

const Card = (props) => {
  return (
    <>
      <div className={styles.container}>
        <p key={props.char_id}> D.O.B:- {props.birthday}</p>
        <img src={props.img} alt="pic"></img>
        <h1>Name:- {props.name}</h1>
        <h2>Nick name:-{props.nickname}</h2>
      </div>
    </>
  );
};

export default Card;
