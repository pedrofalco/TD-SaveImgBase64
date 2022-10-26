## TD save image base64 🧩

`ES`
Este es un componente de [TouchDesigner](https://derivative.ca/) para guardar fácilmente imágenes con codificación [Base64](https://es.wikipedia.org/wiki/Base64) en una base de datos. Esto puede ser muy útil si se está trabajando con imágenes que se tienen que postear en internet, ya sea en tiempo real o en otro momento.
El componente instala automáticamente las librerías [JSON](https://www.w3schools.com/python/python_json.asp) y [base64](https://docs.python.org/3/library/base64.html) de [Python](https://www.python.org/) que necesita.
No es necesario instalar [Python](https://www.python.org/) ya que viene con [TouchDesigner](https://derivative.ca/UserGuide/Category:Python).
> 💡 Nota: en las versiones actuales de Python, las librerías JSON y base64 ya vienen instaladas por default. No obstante, es necesario importarlas en TouchDesigner. El componente `TDSaveImgBase64.tox` se encarga de importarlas.


### Rápida instalación con Node.js y npm 🚩 

Para usar este respositorio es necesario descargar [Node.js](https://nodejs.org/es/).

1. Descargar o clonar el repositorio en tu computadora.

2. Instalar las dependencias en la carpeta de destino ejecutando en la consola `npm i` o manualmente `npm i express nedb`.

3. `npm start` para inicilizar la app.
> 💡 Nota: esto además creará el archivo `database.db` que funcionará como base de datos.

### Comentarios y comandos 🚏 

Una vez abierto el servidor, arrastrar el componente `TDSaveImgBase64.tox` al proyecto de TouchDesigner que tengas abierto trabajando.
Es necesario completar dos campos: 

- `Name`: el nombre con el que se guardará la imagen en la base de datos.
	> 💡 Nota: por default el nombre se elige manualmente. Si haces click en el parámetro y habilitas el modo "expression", el nombre se autocompletará con el nombre del operador indicado en `TOP`.

- `TOP`: la imagen que se va a codificar y guardar en la base de datos.

Para inicializar en modo *test* (la app se reiniciará cada vez que se haga un cambio en ella) ejecutar en la consola:

```
npm test

````
> 💡 Nota: para ello es necesario instalar previamente `npm nodemon -g`.

Para ver en el navegador los objetos guardados en la base de datos:

```
http://localhost:1111/save-img
```

Para limpiar la base de datos es necesario finalizar el server y ejecutar en la consola:
```
# limpiar la base de datos
npm run clear

# y luego reiniciar el server
npm start

# o reiniciar en modo test
npm test
```
> 💡 Nota: si no reinicias el servidor no verás los cambios.


👋 *Si lo usas, si tenés algún tipo de feedback o problema, hacemelo llegar por favor :)*


---


`EN`
This is a component of [TouchDesigner](https://derivative.ca/) to easily save [Base64](https://es.wikipedia.org/wiki/Base64) encoded images to a database. This can be very useful if you are working with images that you want to post on the Internet, either in real time or at another time.
The component automatically installs the [JSON](https://www.w3schools.com/python/python_json.asp) and [base64](https://docs.python.org/3/library/base64.html) [Python](https://www.python.org/) dependencies that the project needs.
You don't need to install [Python](https://www.python.org/) as it comes with [TouchDesigner](https://derivative.ca/UserGuide/Category:Python).
> 💡 Note: in current versions of Python, the JSON and base64 dependencies are already installed by default. However, it's necessary to import them into TouchDesigner. The `TDSaveImgBase64.tox` component takes care of this too.


### Quick installation with Node.js and npm 🚩 

To use this repository you'll need to download [Node.js](https://nodejs.org/es/).

1. Download or clone the repository on your computer.

2. Install the dependencies in the target folder by running `npm i` or manually `npm i express nedb` in the console.

3. `npm start` to start the app.
> 💡 Note: this will also create the `database.db` file that will work as a database.

### Comments and commands 🚏 

Once the server is open, drag the `TDSaveImgBase64.tox` component to the TouchDesigner project you have open working.
Two fields must be filled in: 

- `Name`: the name under which the image will be saved in the database.
	> Note: by default the name is chosen manually. If you click on the parameter and enable the "expression" mode, the name will be autocompleted with the name of the operator indicated in `TOP`.

- `TOP`: the image to be encoded and saved in the database.

To initialize in *test* mode (the app will restart every time a change is made to it) execute in the console:

```
npm test

````
> 💡 Note: it is necessary to install `npm nodemon -g` first.

To see in the browser the objects stored in the database:

```
http://localhost:1111/save-img
```

To clean the database it's necessary to terminate the server and run in the console:
```
# clear the database
npm run clear

# and then restart the server
npm start

# or restart in test mode
npm test
```
> 💡 Note: if you do not restart the server you will not see the changes.


👋 *If you use it or if you have any feedback or problem, please let me know :)*


🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳