
# 🧭 Guía de Contribución - Plataforma de Cursos FISEI

Gracias por contribuir al proyecto **Plataforma de Cursos - FISEI (U.T.A.)** 🎓  
Este documento define las reglas, buenas prácticas y flujo de trabajo que todos los miembros del equipo deben seguir para mantener un desarrollo ordenado y colaborativo.

---

## 🔹 Objetivo

Asegurar que todos los cambios realizados en el repositorio se gestionen de forma controlada, transparente y coherente, aplicando buenas prácticas de **control de versiones (Git/GitHub)** y **control de cambios (Jira Service Management)**.

---

## 🔧 Flujo de trabajo Git (Gitflow)

Este proyecto utiliza el modelo **Gitflow**, que organiza el desarrollo en ramas con propósitos específicos.

### 🌿 Estructura de ramas

| Rama | Descripción |
|------|-------------|
| `main` | Versión estable y entregable del proyecto |
| `develop` | Rama de desarrollo principal (integra todas las features) |
| `feature/*` | Ramas para nuevas funcionalidades o mejoras |
| `hotfix/*` | Ramas para corregir errores urgentes en `main` |
| `release/*` | Rama temporal para preparar versiones antes de pasarlas a `main` |

### 🪜 Flujo básico

1. **Crear una nueva rama desde `develop`:**

```bash
git checkout develop
git pull origin develop
git checkout -b feature/<nombre_tarea>
```

2. **Realizar los cambios y guardar progreso:**

```bash
git add .
git commit -m "feat: descripción breve del cambio"
```

3. **Subir la rama al repositorio remoto:**

```bash
git push origin feature/<nombre_tarea>
```

4. **Crear un Pull Request (PR)** hacia `develop`, usando la plantilla del repositorio (`.github/PULL_REQUEST_TEMPLATE.md`).

5. **Esperar revisión** de al menos un compañero antes de aprobar el merge.

6. El **líder técnico (Damián)** se encargará de aprobar y fusionar los PR cuando cumplan con las reglas del proyecto.

---

## 🧾 Convenciones de commits

Usamos mensajes de commit semánticos y descriptivos para mantener un historial claro.

### Prefijos recomendados:

| Prefijo | Descripción |
|---------|-------------|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de error |
| `docs:` | Cambios o adiciones en la documentación |
| `refactor:` | Reestructuración de código sin cambio de comportamiento |
| `style:` | Cambios de formato, indentación, nombres o estilos visuales |
| `test:` | Adición o modificación de pruebas |
| `chore:` | Tareas menores o mantenimiento (no afectan el código principal) |

### Ejemplos:

```
feat: agregar validación de prerrequisitos en inscripción
fix: corregir error en carga de certificados
docs: actualizar guía de instalación en README
```

---

## 🔁 Pull Requests (PR)

Antes de hacer un merge, asegúrate de cumplir con lo siguiente:

- El código compila y funciona correctamente.
- El PR está vinculado a un Issue en Jira o GitHub.
- Se usó la plantilla de PR correctamente.
- Otro miembro del equipo revisó y aprobó los cambios.
- No hay conflictos con `develop`.

### Flujo de revisión

1. Crea el PR → `feature/<tarea>` → `develop`
2. Asigna al revisor correspondiente
3. Revisor comenta o aprueba el PR
4. Damián (líder técnico) aprueba el merge final

---

## 🧩 Issues y Jira Service Management

Toda tarea o cambio debe tener un Issue asociado:

### En GitHub

- Crear un Issue con la plantilla `.github/ISSUE_TEMPLATE.md`
- Etiquetar con tipo: `feature`, `bug`, `documentation`, `enhancement`
- Asignar responsable

### En Jira Service Management

Registrar la **Solicitud de cambio** con:

- Descripción clara
- Responsable
- Prioridad (Alta, Media, Baja)
- Estado (Pendiente → En revisión → Aprobado / Rechazado)

**Comité de control de cambios:**

- **Sebastián** → líder del comité
- **Mauricio** → auditor del comité

---

## 🧱 Estructura recomendada de ramas

```
main
│
└── develop
     ├── feature/login
     ├── feature/gestion-cursos
     ├── feature/pagos
     ├── hotfix/error-certificados
     └── release/v1.0.0
```

---

## 🧠 Buenas prácticas generales

- No trabajar directamente en `main` ni en `develop`.
- Actualizar tu rama antes de subir cambios:

```bash
git pull origin develop
```

- Commits pequeños y frecuentes, no uno gigante con todo.
- Usar nombres descriptivos en ramas y commits.
- Comentar código crítico o funciones importantes.
- Borrar ramas locales y remotas después de fusionarlas.
- No subir archivos innecesarios (`node_modules`, `.env`, etc.) gracias al `.gitignore`.

---

## 🧪 Pruebas y validación

Antes de subir un PR:

- Verifica que el backend y frontend ejecuten correctamente.
- Revisa que las rutas, componentes y endpoints no se rompan.
- Asegúrate de que las consultas SQL y validaciones funcionen.
- Ejecuta pruebas básicas si existen (manuales o automáticas).

---

## 📜 Documentación

- Toda documentación debe guardarse en la carpeta `/docs`.
- Los reportes, diagramas y evidencias deben tener nombres descriptivos.
- Los cambios importantes deben reflejarse también en el informe del proyecto.

---

## 🧠 Roles clave de gestión

| Rol | Miembro | Responsabilidades |
|-----|---------|-------------------|
| Líder técnico / Gestor de configuración | Damián | Revisión y aprobación final de PRs, mantenimiento de ramas |
| Comité de control de cambios | Sebastián / Mauricio | Revisión de solicitudes de cambio en Jira |
| Backend principal | Boris | Implementación de API y lógica de negocio |
| Base de datos y reportes | Jonathan | Estructura y consultas SQL |
| Frontend | Andrés | Interfaz y consumo de API |
| QA y documentación | Mauricio | Validaciones y reportes finales |

---

## 💬 Comunicación y colaboración

- **Canal de coordinación:** grupo oficial del curso o Discord.
- Toda tarea nueva debe ser registrada primero en Jira o GitHub Issues.
- Revisar el tablero de tareas antes de iniciar cualquier desarrollo.
- Usar mensajes de commit y PR en español claro y técnico.

---

## 🧾 Licencia

Este proyecto es de uso académico.  
Consulta los términos completos en `LICENSE.md`.
```