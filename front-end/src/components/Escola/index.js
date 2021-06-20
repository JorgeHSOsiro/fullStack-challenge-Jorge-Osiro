import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Escola() {
  return (
    <div className={styles.escolaContainer}>
      <p className={styles.escolaNome}>Escola da vila</p>
      <div>
        <Link to='/detalhes-escola' className={styles.link}>Detalhes</Link>
        <Link to='/editar-escola' className={styles.link}>Editar</Link>
        <button type="button">Excluir</button>
      </div>
    </div>
  );
}
