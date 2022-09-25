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
