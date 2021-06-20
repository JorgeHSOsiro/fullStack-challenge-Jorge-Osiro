import React from 'react';
import styles from './styles.module.scss';

export default function EscolaDetalhes() {
    return(
        <div className={styles.detalhesContainer}>
            <h1>Escola da vila</h1>
            <h2>Diretor: Fulano de Tal</h2>
            <h2>Turmas</h2>
        </div>
    )
}