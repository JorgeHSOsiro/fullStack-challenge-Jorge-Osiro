import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import api from "../../services/schoolApi";
import styles from "./styles.module.scss";

export default function EscolaDetalhes() {
  const [schoolName, setSchoolName] = useState("");
  const [directorName, setDirectorName] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    api.getSchool(id).then(({ data }) => {
      setSchoolName(data.response.name);
      if (data.director) {
        setDirectorName(data.director.name);
      } else {
        setDirectorName('sem diretor');
      }
      
    });
  }, [id]);

  const deleteSchoolData = (idSchool) => {
    api.deleteSchool(idSchool).then(() => history.push("/"));
  };

  return (
    <div className={styles.detalhesContainer}>
      <h1>{schoolName}</h1>
      <h2>Diretor: {directorName}</h2>
      <Link to={`/edit-school/${id}`} type="button" className={styles.link}>
        Editar
      </Link>
      <Link type="button" className={styles.linkExcluir} onClick={() => deleteSchoolData(id)}>
        Excluir
      </Link>
    </div>
  );
}
