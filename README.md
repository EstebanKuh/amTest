# Prueba de Ingreso Front Developer Aeroméxico

## Iniciar la aplicación

Instalar las dependencias

### `npm i`

Iniciar la aplicación

### `npm start`

## Generar el build

### `npm run build`

El resultado se guardara en la carpeta `dist/`

## Variables de entorno requeridas

Para uso local agregarlas al archivo
`.env`
```bash
    ENV=DEV
    FAKE_SERVICE=http://localhost:3001
```

## Usando json server

## instalar json-server de manera global

```bash
    `npm i -g json-server`
```

## Ejecutar el siguiente comando en la raíz del proyecto

```bash
    json-server --watch src/fakeService/hp-database.json --port 3001
```

### Se deberá levantar el servidor fake

```bash
    http://localhost:3001/characters
    http://localhost:3001/gryffindor
    http://localhost:3001/staff
    http://localhost:3001/students
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### ¿Qué es lo que más te gustó de tu desarrollo?

Aprendí sobre el uso de json-server para crear 'backend' falso, de igual manera aprendí sobre redux y cómo implementarlo.

### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

Agregar modo responsivo y pruebas unitarias, agregar una que otra validación y el actualizar datos de personajes.

### Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

El uso de redux es algo confuso y tiene varias maneras de implementarse, escogí una al respecto y sobre esa me enfoqué, buscando documentación, viendo ejemplos y vídeos de implemtación.
El despliegue en netlify, establecer su configuración y realizar el deploy del sitio.
