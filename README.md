<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# **Pokémon** | Proyecto Individual

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

## **📌 TECNOLOGÍAS UTILIZADAS**

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![HTML5](https://img.shields.io/badge/-HTML5-E46625?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-385BF4?style=flat-square&logo=css3)
[![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&link=https://es.react.dev/)](https://es.react.dev/)
[![Redux](https://img.shields.io/badge/Redux-%237241BE.svg?style=flat-square&logo=redux&logoColor=white&link=https://es.redux.js.org/)](https://es.redux.js.org/)
[![Node.js](https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=Node.js&link=https://nodejs.org/es)](https://nodejs.org/es)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square&logo=express&logoColor=white&link=https://expressjs.com/es/)](https://expressjs.com/es/)
[![Sequelize](https://img.shields.io/badge/Sequelize-31396A?style=flat-square&logo=Sequelize&logoColor=68AEE8&link=https://sequelize.org/)](https://sequelize.org/)
[![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-%23404d59?style=flat-square&logo=postgresql&logoColor=%2361DAFB&link=https://www.postgresql.org/)](https://www.postgresql.org/)

---

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

-  **Node**: 12.18.3 o mayor
-  **NPM**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

**ACLARACIÓN:** las dependencias actuales se encuentran en las versiones que venimos trabajando durante el bootcamp.

-  **react**: 18.2.0
-  **react-dom**: 18.2.0
-  **react-router-dom**: 6.11.1
-  **redux**: 4.2.1
-  **react-redux**: 8.0.5

<br />

---

## **📋 PARA COMENZAR...**

1. Deberás forkear este repositorio para tener una copia del mismo en tu cuenta personal de GitHub.

2. Clona el repositorio en tu computadora para comenzar a trabajar. Este repositorio contiene un **`BoilerPlate`** con la estructura general del proyecto, tanto del servidor como del cliente. El boilerplate cuenta con dos carpetas: **`api`** y **`client`**. En estas carpetas estará el código del back-end y el front-end respectivamente.

3. En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

4. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

5. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`pokemon`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.

<br />

---

## **📖 ENUNCIADO GENERAL**

Es una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa [**pokeapi**](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

-  Buscar pokemones.
-  Visualizar la información de los pokemones.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos pokemones.

⚠️ Para las funcionalidades de filtrado y ordenamiento NO se puede utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

### **Únicos end-points que se pueden utilizar**

-  [**PokeApi**](https://pokeapi.co/api/v2/pokemon)
-  **Por id**: _"https://pokeapi.co/api/v2/pokemon/{id}"_
-  **Por nombre**: _"https://pokeapi.co/api/v2/pokemon/{name}"_
-  **Por tipo**: _"https://pokeapi.co/api/v2/type"_

<br />

---

<div align="center">

## **📁 INSTRUCCIONES**

</div>

<br />

### **🖱 FRONT-END**

Se desarrollo una aplicación de React/Redux que contiene:

**📍 LANDING PAGE |**

-  Una imagen de fondo representativa del proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de la Single Page Application contiene:

-  SearchBar: un input de búsqueda para encontrar pokemones por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
-  Sector en el que se ve el listado de cards con los pokemones. Al iniciar carga los primeros 12 resultados obtenidos desde la ruta **`GET /pokemons`** y muestra su:
   -  ID.
   -  Imagen.
   -  Nombre.
   -  Tipos.
-  Cuando se le hace click a una Card redirige al detalle de ese pokemon específico.
-  Botones/Opciones para **filtrar** por tipo, y por si su origen es de la API o de la base de datos (creados desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los pokemones por orden alfabético, ataque, defensa y por velocidad.
-  Paginado: Busca y muestra 12 pokemones por pagina.

<br />

**📍 DETAIL PAGE |** en esta página se muestra toda la información específica de un pokemon:

-  ID.
-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad.
-  Altura.
-  Peso.
-  Tipo.

<br />

**📍 FORM PAGE |** en esta página se encuentra el formulario para crear un nuevo pokemon. Cuenta con los siguientes campos:

-  Nombre.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad.
-  Altura.
-  Peso.
-  Posibilidad de seleccionar/agregar varios tipos en simultáneo.
-  Botón para crear el nuevo pokemon.

> [**IMPORANTE**]: el formulario de creación está validado sólo con JavaScript.

<br />

---

<br />

### **🖱 BACK-END**

Se desarrollo un servidor en Node/Express con las siguientes rutas:

#### **📍 GET | /pokemons**

-  Obtiene un listado de los pokemons desde pokeapi.

#### **📍 GET | /pokemons/:idPokemon**

-  Obtiene el detalle de un pokemon en particular.

#### **📍 GET | /pokemons/name?="..."**

-  Obtiene el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros).

#### **📍 POST | /pokemons**

-  Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body.
-  Crea un pokemon en la base de datos.

#### **📍 GET | /types**

-  Obtiene todos los tipos de pokemons posibles.

<br />

---

<br />

### **🖱 BASE DE DATOS**

Son 2 modelos de base de datos, utilizados para el formulario de creación. Una es para los pokemones y la otra es para los tipos de pokemones. La relación entre ambos modelos es de muchos a muchos. A continuación las propiedades que tiene cada modelo:

**📍 POKEMONS**

-  ID
-  Nombre
-  Imagen
-  Vida
-  Ataque
-  Defensa
-  Velocidad
-  Altura
-  Peso

<br />

**📍 TYPE**

-  ID
-  Nombre

<br />

---

<br />
