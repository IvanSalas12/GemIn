---
name: create-skills
description: Crea nuevas skills siguiendo la estructura estandarizada obligatoria en .gemini/skills.
---

# Generador de Skills Estandarizado

Esta skill define el procedimiento OBLIGATORIO para crear nuevas skills en este proyecto.
Cuando el usuario solicite crear una nueva skill, DEBES seguir estos pasos estrictamente.

## Reglas Inquebrantables de Creación

1.  **Ubicación Directa**: Todas las skills se crean DIRECTAMENTE en la ruta `.gemini/skills/<nombre-skill>`.
    *   **PROHIBIDO** crear archivos en la raíz del proyecto para luego moverlos.
    *   **PROHIBIDO** usar carpetas temporales.

2.  **Nomenclatura**:
    *   El nombre de la carpeta `<nombre-skill>` debe estar en **ESPAÑOL**.
    *   Usa `kebab-case` (ejemplo: `gestor-base-datos`, `analisis-logs`).

3.  **Estructura de Archivos**:
    Debes generar la siguiente estructura completa para CADA nueva skill:
    *   `📂 .gemini/skills/<nombre-skill>/`
        *   `📄 SKILL.md` (Debe llamarse exactamente así, en MAYÚSCULAS).
        *   `📂 scripts/`
        *   `📂 references/`
        *   `📂 assets/`

## Procedimiento Paso a Paso

Ejecuta estas acciones utilizando tus herramientas:

1.  **Crear Estructura de Directorios**:
    Usa el comando de shell para crear la carpeta principal y las subcarpetas requeridas directamente en el destino.
    Comando sugerido (adaptar nombre):
    `mkdir -p ".gemini/skills/<nombre-skill>/scripts" ".gemini/skills/<nombre-skill>/references" ".gemini/skills/<nombre-skill>/assets"`

2.  **Crear Archivo de Definición (SKILL.md)**:
    Crea el archivo `.gemini/skills/<nombre-skill>/SKILL.md` con el siguiente contenido base (ajustando el nombre y descripción):

    ```markdown
    ---
    name: <nombre-skill>
    description: Descripción breve de la funcionalidad de esta skill.
    ---

    # <Nombre de la Skill Formateado>

    [Escribe aquí las instrucciones detalladas, reglas y flujos que debe seguir el agente al usar esta skill]
    ```

## Ejemplo de Resultado Final

Si el usuario pide "una skill para revisar ortografía", el resultado en el sistema de archivos debe ser:

```text
.gemini/
└── skills/
    └── revisor-ortografia/
        ├── SKILL.md
        ├── scripts/
        ├── references/
        └── assets/
```
