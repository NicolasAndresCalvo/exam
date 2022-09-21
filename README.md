# Repositorio de ejemplo para practicar para el examen

## Introduccion

La aplicacion consta de tres layers: ***1 Frontend***, ***1 Backend*** y ***1 DataBase***.

---

## Tareas

- Contruir las imagenes de Docker para el ***FrontEnd*** y ***BackEnd***.

- Construir los manifiestos YAMLS para el ***FrontEnd***, el ***BackEnd*** y la **DataBase**.

  - Deberan crear para cada capa: ***1 Deployment***, ***1 Service***.
  - Deberan crear ***1 Ingress*** con el mismo ***Host***: examen.info. El cual ademas expondra:
    - El ***FrontEnd*** en ***/.****
    - El ***BackEnd*** en ***/api***
  - Para el ***BackEnd*** deberemos setear las siguientes Variables de Entorno:
    - **MONGO_HOST**
    - **MONGO_PORT**
    - **MONGO_DB**
    - **BACKEND_PORT**
  - Los ***Puertos*** para los containers pueden obtenerse de los **DockerFiles**

---

## Fuente:

https://betterprogramming.pub/kubernetes-deployment-connect-your-front-end-to-your-back-end-with-nginx-7e4e7cfef177
