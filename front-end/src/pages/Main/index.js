import React from 'react';
import { Link } from 'react-router-dom';
import Escola from '../../components/Escola';
import styles from './styles.module.scss';

export default function Main() {

  return (
    <div className={styles.mainContainer}>
      <h1>Lista de escolas</h1>
      <Link to="/new-school" className={styles.newSchoolBtn}>Adicionar Escola</Link>
      <Escola />
      <Escola />
    </div>
  );
}
