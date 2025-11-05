# 📘 Plataforma de Cursos - FISEI (U.T.A.)

Aplicación web colaborativa para la gestión de cursos y eventos académicos. Desarrollada como parte del proyecto del segundo parcial de la materia Manejo y Configuración de Software de la Universidad Técnica de Ambato.

## 🎯 Objetivo del proyecto

Implementar una aplicación que permita al administrador crear cursos, designar responsables, asignar encargados, registrar estudiantes, manejar asistencia, notas y generar certificados. Además, demostrar el uso de buenas prácticas de control de versiones (Git) y gestión de cambios (Jira Service Management).

## 👥 Integrantes del equipo

| Nombre | Rol |
|--------|-----|
| Damián | Líder técnico y gestor de configuración |
| Boris | Backend principal (API REST Node.js) |
| Jonathan | Base de datos y reportes |
| Andrés | Frontend (React) |
| Sebastián | Control de cambios y pruebas |
| Mauricio | QA y documentación |

## 🧩 Tecnologías utilizadas

| Tipo | Tecnología |
|------|------------|
| Frontend | React (Vite + TailwindCSS) |
| Backend | Node.js con Express |
| Base de datos | MySQL |
| Gestión de versiones | Git + GitHub |
| Gestión de cambios | Jira Service Management (JSM) |

## ⚙️ Estructura del repositorio
```
📦 plataforma-cursos
├── 📁 backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── db/
├── 📁 frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
├── 📁 docs/
│   ├── informe.pdf
│   ├── evidencias/
│   └── diagramas/
├── 📁 .github/
│   ├── ISSUE_TEMPLATE.md
│   └── PULL_REQUEST_TEMPLATE.md
├── README.md
├── CONTRIBUTING.md
├── LICENSE.md
└── database.sql
```

## 🚀 Ejecución del proyecto

### 🔧 Requisitos previos

- Tener Node.js y npm instalados
- Tener MySQL en ejecución
- Editor recomendado: Visual Studio Code

### ⚙️ Instalación (modo desarrollo)

1. **Clonar el repositorio:**
```bash
git clone https://github.com/josephch28/plataforma-cursos-FISEI.git
cd plataforma-cursos-FISEI
```

2. **Instalar dependencias del backend:**
```bash
cd backend
npm install
```

3. **Instalar dependencias del frontend:**
```bash
cd ../frontend
npm install
```

4. **Crear un archivo `.env` en la carpeta backend con la configuración de tu base de datos:**
```text
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=cursos_db
```

5. **Iniciar los servidores:**

   - **Backend:**
```bash
   npm start
```
   
   - **Frontend:**
```bash
   npm run dev
```

## 🧾 Control de cambios (Jira Service Management)

- Cada cambio o mejora se registra en Jira como un Issue de tipo "Solicitud de cambio".
- **Flujo de aprobación:**
  1. El desarrollador crea la solicitud en Jira.
  2. El comité de control de cambios (Sebastián y Mauricio) la revisa y aprueba o rechaza.
  3. El cambio se desarrolla en la rama correspondiente.
  4. Se documenta la evidencia del cambio y se enlaza con el Pull Request correspondiente.

## 📊 Evidencias del proyecto

El proyecto debe incluir dentro de la carpeta `docs/`:

- Capturas de Jira (issues, aprobaciones, tableros)
- Commits y ramas en GitHub
- Informe del proyecto final
- Presentación de exposición

## 🧠 Licencia

Este proyecto es de uso académico y pertenece al grupo de la asignatura Manejo y Configuración de Software de la Universidad Técnica de Ambato. Consulta los términos completos en el archivo LICENSE.md.