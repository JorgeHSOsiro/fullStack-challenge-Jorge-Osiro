import React from 'react';
import styles from './styles.module.scss';

export default function EditEscola() {
    return (
        <div>
      <form className={styles.formContainer} >
        <label>
          Nome <input type="text" name="name" />
        </label>
        <label>
          Diretor <input type="text" name="name" />
        </label>
        <input type="button" value="Enviar" />
      </form>
    </div>
    )
}