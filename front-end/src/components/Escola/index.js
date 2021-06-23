import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export default function Escola({ name, id }) {
  return (
    <div className={styles.escolaContainer}>
      <p className={styles.escolaNome}>{name}</p>
      <div>
        <Link to={`/detalhes-escola/${id}`} className={styles.link}>
          Detalhes
        </Link>
        
      </div>
    </div>
  );
}
