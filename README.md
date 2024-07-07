# Firmeasy Legal Landing

### Configuración

* Editar secciones desde el archivo `src/site.json`
* Crear articulos de blog desde la carpeta `src/content/blog` 
  * guia de sintaxis: https://www.markdownguide.org/basic-syntax/

### Levantar Proyecto

All commands are run from the root of the project, from a terminal:
First you need to install node js

1. Agrega el repositorio de NodeSource para Node.js 20:
   ```sh
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   ```

2. Instala Node.js 20:
   ```sh
   sudo apt-get install -y nodejs
   ```

3. Verifica la instalación:
   ```sh
   node -v
   ```
   Deberías ver la versión 20.x.x.

#### Instalación de pnpm

1. Instala pnpm globalmente usando npm:
   ```sh
   npm install -g pnpm
   ```
2. Verifica la instalación:
   ```sh
   pnpm -v
   ```
   Deberías ver la versión de pnpm instalada.


| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
