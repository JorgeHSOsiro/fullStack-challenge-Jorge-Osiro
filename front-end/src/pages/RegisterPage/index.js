import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      <Link to="/directorRegister">Registrar como diretor</Link>
      <Link to="/teacherRegister">Registrar como professor</Link>
    </div>
  );
}
