import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import api from "../../services/schoolApi";
import directorApi from "../../services/directorApi";
import styles from "./styles.module.scss";

export default function EditSchool() {
  const [schoolName, setSchoolName] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [allDirectors, setAllDirectors] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    api.getSchool(id).then(({ data }) => {
      setSchoolName(data.response.name);
    });
    directorApi.getDirectors().then(({ data }) => {
      setAllDirectors(data);
    });
  }, [id]);

  const updateSchoolData = () => {
    api
      .updateSchool(id, schoolName, directorName)
      .then(() => history.push("/"));
  };

  const handleNewDirector = (val) => {
    setDirectorName(val);
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <label>
          Nome{" "}
          <input
            type="text"
            name="name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <div>
          <label>Diretor</label>
          <select
            value={directorName}
            onChange={(e) => handleNewDirector(e.target.value)}
          >
            {allDirectors.map((director) => (
              <option value={director.name}>{director.name}</option>
            ))}
          </select>
        </div>
        <input
        className={styles.sendBtn}
          type="button"
          value="Enviar"
          onClick={() => updateSchoolData()}
        />
      </form>
    </div>
  );
}
