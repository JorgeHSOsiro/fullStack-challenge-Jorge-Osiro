import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Escola({name}) {
  return (
    <div className={styles.escolaContainer}>
      <p className={styles.escolaNome}>{name}</p>
      <div>
        <Link to='/detalhes-escola' className={styles.link}>Detalhes</Link>
        <Link to='/editar-escola' className={styles.link}>Editar</Link>
        <button type="button">Excluir</button>
      </div>
    </div>
  );
}
