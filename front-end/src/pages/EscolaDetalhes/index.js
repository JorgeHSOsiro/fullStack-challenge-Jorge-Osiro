import React, { useEffect, useState } from 'react';

import api from '../../services/schoolApi';
import styles from './styles.module.scss';

export default function EscolaDetalhes() {
    const [schoolName, setSchoolName] = useState('');
    const [directorName, setDirectorName] = useState('');

    return(
        <div className={styles.detalhesContainer}>
            <h1>Escola da vila</h1>
            <h2>Diretor: Fulano de Tal</h2>
            <h2>Turmas</h2>
        </div>
    )
}