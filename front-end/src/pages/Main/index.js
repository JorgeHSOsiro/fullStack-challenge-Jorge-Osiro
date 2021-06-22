import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Escola from '../../components/Escola';
import styles from './styles.module.scss';
import api from '../../services/schoolApi';

export default function Main() {
const [schools, setSchools] = useState([]);

  useEffect(() => {
    api.getSchools().then(({data}) => {
      setSchools(data);
    })
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1>Lista de escolas</h1>
      <Link to="/new-school" className={styles.newSchoolBtn}>Adicionar Escola</Link>
      {schools.map((school) => (
        <Escola name={school.name} />
      ))}
    </div>
  );
}
