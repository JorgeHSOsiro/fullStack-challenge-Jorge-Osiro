import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import api from "../../services/schoolApi";
import styles from "./styles.module.scss";

export default function EditEscola() {
  const [schoolName, setSchoolName] = useState("");
  const [directorName, setDirectorName] = useState("");

  const { id } = useParams();
  const history = useHistory();
  useEffect(() =>
    api.getSchool(id).then(
      ({ data }) => {
        setSchoolName(data.name);
        setDirectorName(data.director);
      },
      [id]
    )
  );

  const updateSchoolData = (schoolName, directorName) => {
    api.updateSchool(id, schoolName, directorName).then(() => history.push("/"));
  };

  const handleNewSchoolName = (value) => {
    setSchoolName(value);
  }
  const handleNewDirectorName = (value) => {
    setDirectorName(value);
  }

  return (
    <div>
      <form className={styles.formContainer}>
        <label>
          Nome{" "}
          <input
            type="text"
            name="name"
            value={schoolName}
            onChange={(e) => handleNewSchoolName(e.target.value)}
          />
        </label>
        <label>
          Diretor{" "}
          <input
            type="text"
            name="name"
            value={directorName}
            onChange={(e) => handleNewDirectorName(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={() => updateSchoolData(schoolName, directorName)}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
