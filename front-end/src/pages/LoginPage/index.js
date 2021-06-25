import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to='/directorLogin'>Entrar como diretor</Link>
            <Link className={styles.link} to='/teacherLogin'>Entrar como professor</Link>
        </div>
    )
}