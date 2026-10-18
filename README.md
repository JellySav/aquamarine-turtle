# Aquamarine Turtle // EX-01 Ocean Exploration Protocol

**Simulador interactivo de exploración marina** desarrollado con Next.js y Tailwind CSS.


## Visión General del Proyecto
**Aquamarine Turtle** es una experiencia interactiva donde el usuario toma el control de la nave de exploración **EX-01**, enviada por una civilización futura para documentar la salud de los océanos terrestres.

A través de dinámicas de escaneo estilo *Pokédex*, el juego sumerge a los visitantes en los desafíos críticos de la vida marina (contaminación lumínica, plásticos, ruido acústico y acidificación) y destaca a las profesiones que lideran la conservación marina.



## Misiones y Sectores de Exploración

El **Diario 01: Aquamarine Turtle** comienza en las costas y se amplía con tres niveles oceánicos:

| Nivel | Código Sci-Fi | Especie Objetivo | Amenaza Marina | Profesión Marina |
| :--- | :--- | :--- | :--- | :--- |
| **01. Costas** | `AQUAMARINE-TURTLE` | Tortuga Laúd / Verde | Contaminación lumínica y plásticos | Buzo Científico / Voluntario |
| **02. Pelágico (nivel extra)** | `AZURE-JELLYFISH` | Medusa bioluminiscente | Sopa de microplásticos | Oceanógrafo / Analista |
| **03. Altamar (nivel extra)** | `SAPPHIRE-WHALE` | Ballena azul / Cetáceos | Contaminación acústica y colisiones | Especialista en Bioacústica |
| **04. Arrecifes profundos (nivel extra)** | `PEARL-NAUTILUS` | Nautilus / Corales | Acidificación y blanqueamiento | Ecólogo / Ingeniero Ambiental |

> *Nota: Los Diarios 02 (`EMERALD-CHAMELEON`) y 03 (`AMBER-ANT`) están preparados en la arquitectura para futuras expansiones terrestres.*


## Stack Tecnológico
* **Framework:** Next.js 16 (App Router)
* **Estilos:** Tailwind CSS
* **Iconos:** Lucide React
* **Despliegue:** Vercel


## Desarrollo local

```bash
# Desde la raíz del repositorio
cd aquamarine-turtle
npm install
npm run dev
```

Abre `http://localhost:3000`. Para validar la compilación de producción:

```bash
npm run lint
npm run build
npm run start
```

## Despliegue en Vercel

Importa el repositorio en Vercel y configura **Root Directory** como `aquamarine-turtle`.
Vercel detectará Next.js y ejecutará `npm run build`; la experiencia actual no requiere
variables de entorno. El proyecto requiere Node.js 20.9 o superior. Para desplegar desde el workflow de GitHub Actions, configura
`VERCEL_TOKEN`, `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID` como secretos del repositorio.