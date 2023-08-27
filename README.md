<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# **Pokémon** | Proyecto Individual

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />


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

-  **react**: 17.0.1
-  **react-dom**: 17.0.1
-  **react-router-dom**: 5.2.0
-  **redux**: 4.0.5
-  **react-redux**: 7.2.3

Está permitido, **bajo tu responsabilidad**, actualizar las dependencias a versiones más actuales si lo deseas. Versiones mas actuales podrían presentar configuraciones diferentes respecto a las versiones en las que venimos trabajando durante el bootcamp.

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

La idea de este proyecto es construir una aplicación web a partir de la API [**pokeapi**](https://pokeapi.co/) en la que se pueda:

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

### **🖱 BASE DE DATOS**

Deberás crear dos modelos para tu base de datos. Una será para los pokemones y la otra será para los tipos de pokemones (pueden llevar el nombre que tu quieras). La relación entre ambos modelos debe ser de muchos a muchos. A continuación te dejamos las propiedades que debe tener cada modelo. Aquellas marcadas con un asterísco son obligatorias.

**📍 MODELO 1 | Pokemons**

-  ID. \*
-  Nombre. \*
-  Imagen. \*
-  Vida. \*
-  Ataque. \*
-  Defensa. \*
-  Velocidad.
-  Altura.
-  Peso.

<br />

**📍 MODELO 2 | Type**

-  ID. \*
-  Nombre. \*

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

### **🖱 FRONT-END**

Se desarrollo una aplicación de React/Redux que contiene:

**📍 LANDING PAGE |**

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
-  Sector en el que se vea un listado de cards con los pokemones. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /pokemons`** y deberá mostrar su:
   -  Imagen.
   -  Nombre.
   -  Tipos.
-  Cuando se le hace click a una Card deberá redirigir al detalle de ese pokemon específico.
-  Botones/Opciones para **filtrar** por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.
-  Paginado: el listado de pokemones se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 12 pokemones por página.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un pokemon:

-  ID.
-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Tipo.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear un nuevo pokemon.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Posibilidad de seleccionar/agregar varios tipos en simultáneo.
-  Botón para crear el nuevo pokemon.

> [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del pokemon no pueda contener números, o que la defensa no pueda exceder determinado valor, etc.

<br />

---

<br />
