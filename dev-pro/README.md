# Dev Pro - Vite + TS

## Instalamos Vite

Tenemos la documentación [aquí](https://es.vite.dev/). Nos aparecerá el siguiente comando para instalarlo en nuestro proyecto:

```shell
npm create vite@latest
```

Seleccionamos _Vanilla_ como framework y _TypeScript_ como variante.

Esto nos generará una carpeta que tendrá la siguiente distribución:

- root
  - .gitignore
  - tsconfig.json
  - package.json
  - index.html
- **src**
  - counter.ts
  - main.ts
  - styles.css
  - typescript.svg
- **public**
  - vite.svg (Favicon)

> [!IMPORTANT]
> A pesar de que contamos con el archivo `.gitignore`, eso no significa que Vite nos levante un repositorio de Git. Créalo si lo sientes necesario.

### TypeScript

Podemos obtener la documentación de TS [aquí](https://www.typescriptlang.org/). Lo bueno es que ya viene con la instalación del proyecto ya que lo seleccionamos como variante.

### ¿Por qué elegir Vite?

Es una herramienta de **compilación frontend** sumamente rápida, ya que su principal objetivo es proporcionar una experiencia ágil a la hora de construir proyectos web modernos. Cuenta con 2 partes principales:

- Un servidor que proporciona mejoras en la funcionalidad de los módulos nativos, ya que los convierte en módulos ESM usando **esbuild**. También escribe las direcciones de las importaciones como si fueran direcciones URL, haciendo que el navegador las importe mejor.
- Un comando que empaqueta el código usando [Rollup.js](https://rollupjs.org/), esto genera componentes estáticos optimizados para lanzar a producción.

Esta herramienta es perfecta para construir SPA, aplicaciones de alto rendimiento y PWA. Nos da alta velocidad de carga y recarga "en caliente" (HMR).
