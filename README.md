# ProgramacionIIIAngular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 22.1.8.

## Servidor de desarrollo

Para iniciar el servidor local, ejecuta:

```bash
ng serve
```

Una vez en marcha, abre el navegador en `http://localhost:4200/`. La aplicación se recarga automáticamente cada vez que modifiques los archivos fuente.

## Rutas de la aplicación

- `/dashboard`: panel principal.
- `/registro`: formulario de registro con `FormBuilder`, grupo anidado `direccion` y `FormArray` de pasatiempos.

## Generación de código

Angular CLI incluye herramientas de scaffolding. Para generar un componente nuevo:

```bash
ng generate component nombre-componente
```

Para ver la lista completa de schematics (como `components`, `directives` o `pipes`):

```bash
ng generate --help
```

## Compilación

Para compilar el proyecto:

```bash
ng build
```

Esto compila el proyecto y deja los artefactos en el directorio `dist/`. Por defecto, la compilación de producción optimiza la aplicación para rendimiento y velocidad.

## Pruebas unitarias

Para ejecutar las pruebas unitarias con [Vitest](https://vitest.dev/):

```bash
ng test
```

## Pruebas end-to-end

Para pruebas end-to-end (e2e):

```bash
ng e2e
```

Angular CLI no trae un framework e2e por defecto. Puedes elegir el que prefieras.

## Recursos adicionales

Para más información sobre Angular CLI, incluyendo la referencia de comandos, visita la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
