import React, { useState } from "react";
import { useHistory } from "react-router";

import api from "../../services/schoolApi";
import styles from "./styles.module.scss";

export default function FormEscola() {
  const [schoolName, setSchoolName] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const registraNovaEscola = () => {
    if (schoolName === "") {
      setMessage("Campos não podem ser em branco");
    } else {
      api
        .registerSchool(schoolName)
        .then(() => history.push("/"))
        .catch(() => setMessage("Escola ja cadastrada"));
    }
  };

  return (
    <div>
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}
      <form className={styles.formContainer}>
        <label>
          Nome{" "}
          <input
            type="text"
            name="name"
            placeholder="Digite o nome da escola"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <input
          type="button"
          value="Enviar"
          onClick={() => registraNovaEscola()}
        />
      </form>
    </div>
  );
}
