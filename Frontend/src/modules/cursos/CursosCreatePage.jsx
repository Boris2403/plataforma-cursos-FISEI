// src/modules/cursos/CursosCreatePage.jsx
import AppLayout from '../../layouts/AppLayout';
import FormCurso from './FormCurso';
import { useNavigate } from 'react-router-dom';

export default function CursosCreatePage({ auth }) {
  const nav = useNavigate();

  return (
    <AppLayout active="cursos">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Crear curso</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <FormCurso initial={{}} auth={auth} onSaved={() => nav('/cursos')} />
      </div>
    </AppLayout>
  );
}
