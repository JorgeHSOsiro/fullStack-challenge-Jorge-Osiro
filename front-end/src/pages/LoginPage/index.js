import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <div>
            <Link to='/directorLogin'>Entrar como diretor</Link>
            <Link to='/teacherLogin'>Entrar como professor</Link>
        </div>
    )
}