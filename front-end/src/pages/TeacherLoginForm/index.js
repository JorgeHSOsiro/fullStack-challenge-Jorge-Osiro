import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function TeacherLoginForm() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const history = useHistory();
  
    const loginUser = () => {
      if (email === "" || password === "") {
        setMessage("Campos não podem ser em branco");
      } 
    };
  
    return (
      <div>
        {message && (
          <div>
            <p>{message}</p>
          </div>
        )}
        <form >
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
          <input
            type="button"
            value="Entrar"
            onClick={() => loginUser()}
          />
        </form>
      </div>
    );
  }