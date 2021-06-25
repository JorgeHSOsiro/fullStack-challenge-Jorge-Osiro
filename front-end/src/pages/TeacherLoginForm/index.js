import React, { useState } from "react";
import { useHistory } from "react-router";
import userApi from "../../services/userApi";
import styles from "./styles.module.scss"

export default function TeacherLoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const loginUser = () => {
    if (email === "" || password === "") {
      setMessage("Campos não podem ser em branco");
    } else {
      userApi
        .loginTeacher(email, password)
        .then(() => history.push("/"))
        .catch((e) => setMessage(e.response.data.message));
    }
  };

  return (
    <div className={styles.container}>
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}
      <form>
        <label>
          Email{" "}
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Nome{" "}
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input className={styles.sendBtn} type="button" value="Entrar" onClick={() => loginUser()} />
      </form>
    </div>
  );
}
