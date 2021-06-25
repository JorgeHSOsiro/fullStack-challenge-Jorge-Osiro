import React, { useState } from "react";
import { useHistory } from "react-router";

import userApi from "../../services/userApi";
import styles from "./styles.module.scss";

export default function RegisterUserForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Diretor");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleRole = (option) => {
    setRole(option);
  };

  const registerUser = () => {
    if (name === "" || email === "" || password === "") {
      setMessage("Campos não podem ser em branco");
    }
    userApi
      .registerUser(name, password, email, role)
      .then(() => history.push("/login"));
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
          Nome{" "}
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
          Senha{" "}
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <label>Cargo</label>
          <select value={role} onChange={(e) => handleRole(e.target.value)}>
            <option value="Diretor">Diretor</option>
            <option value="Professor">Professor</option>
          </select>
        </div>

        <input className={styles.sendBtn} type="button" value="Enviar" onClick={() => registerUser()} />
      </form>
    </div>
  );
}
