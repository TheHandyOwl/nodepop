# practica_node  

Desarrollar el software que se ejecutará en el servidor dando servicio a una app (API) de venta de artículos de segunda mano, llamada Nodepop.  


## Tabla de contenido  

* [Repositorio GitHub](#repositorio-github)  
* [Instalacion](#instalacion)  
  * [Dependencias necesarias](#dependencias-necesarias)  
  * [Archivo www](#archivo-www)  
* [Desarrollo](#desarrollo)  
* [Rutas](#rutas)  
* [Changelog](#changelog)  


## Repositorio GitHub  

[https://github.com/TheHandyOwl/practica_node](https://github.com/TheHandyOwl/practica_node)  


## Instalacion  

### Dependencias necesarias  

Las dependencias locales pueden consultarse en el archivo package.json.  
Para instalarlas desde el directorio raíz de la aplicación, ejecutando el siguiente comando:  
```
npm install
```

O también dejando desde npm
```
npm run setup
```

El script de inicio arranca nodemon  
```
  "scripts": {
    "start": "node ./bin/www",
    "setup": "npm install"
  },
```


## Desarrollo  

### Archivo www  

Cambiamos el debug por un console.log() para visualizar la información por consola  
```
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  //debug('Listening on ' + bind);
  console.log('Listening on ' + bind);
}
```

Se han añadido datos de prueba.
ADVERTENCIA: LAS COLECCIONES EXISTENTES SERAN ELIMINADAS

La carga de datos se inicia con:  
```
npm run sample
```

El script de inicio arranca nodemon  
```
  "scripts": {
    "start": "nodemon ./bin/www",
    "setup": "npm install",
    "sample": "node ./lib/sample_data/install_db"
  },
```  


## Rutas  

| Ruta | Tipo | Archivo | Descripción |    
| ------------- | ------------- | ------------- | ------------- |  
| / | GET | ./ | |  
| / | POST | ./ | |  


## Changelog  

- Versión v.0.0.0  
    - README.md  
    - .gitignore  

- Versión v.1.0.0  
    - Aplicación generada  
    - Dependencias instaladas  
    - Servidor configurado y funcionando  

- Versión v.2.0.0  
    - Instalamos dependencia cluster  
    - Añadimos funcionalidad de clustering  
    - Completamos documentación de instalación y dependencias  

- Versión v.2.0.1  
    - Corregidos enlacen internos en la documentación  

- Versión v.3.0.0  
    - Añadimos mongoose  
    - Añadimos modelo anuncios  
    - Añadimos modelo usuarios  
    - Añadimos datos de prueba para autocarga  
    - Modificamos inicio de servidor con scripts de autocarga  
    