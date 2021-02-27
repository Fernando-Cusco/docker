# Docker Introducción

https://docs.google.com/presentation/d/1PM4O1nr5a_M58NOm05ncV9VM-cJVsjOEiiSY_5UmBrQ/edit?usp=sharing

# Comandos básicos

#### Muestra información general del servidor y cliente de docker.

`$ docker info`

#### Muestra las imagenes que tenemos en local.

`$ docker images`

#### Buscar una imagen

`$ docker search postgres`

#### Descargar una imagen desde el repositorio de DockeHub

`$ docker pull postgres`

#### Ejecutar contenedores

##### Contenedor con la imagen "hello-world", es un ejemplo sencillo

`$ docker run hello-world`

##### Depende de la imagen que se este usuando serán necesarios los parámetros, por ejemplo si usamos una imagen de nginx, para poder acceder sera necesario exponer el puerto en este caso el 80, si usamos una imagen de mysql el puerto por defecto sera el 3306
