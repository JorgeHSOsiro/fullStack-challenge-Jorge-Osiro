import React from 'react';
import styles from './styles.module.scss';

export default function FormEscola() {
  const registraNovaEscola = (e) => {
    e.PreventDefault();
  };

  return (
    <div>
      <form className={styles.formContainer} onSubmit={registraNovaEscola}>
        <label>
          Nome <input type="text" name="name" />
        </label>
        <label>
          Diretor <input type="text" name="name" />
        </label>
        <input type="button" value="Enviar" />
      </form>
    </div>
  );
}
