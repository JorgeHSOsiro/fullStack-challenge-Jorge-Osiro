import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function RegisterUserForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("")
    const [message, setMessage] = useState("");
  
    const history = useHistory();

    const handleRole = (option) => {
        setRole(option);
    };
  
    const registerUser = () => {
      if (name === "" ||  email === "" || password === "" || role === "") {
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
            Nome{" "}
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <select onChange={(e) => handleRole(e.target.value)}>
              <option value="Diretor">Diretor</option>
              <option value="Professor">Professor</option>
          </select>
          <input
            type="button"
            value="Enviar"
            onClick={() => registerUser()}
          />
        </form>
      </div>
    );
  }