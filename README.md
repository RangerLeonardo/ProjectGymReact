# My landingPage

## URL: https://rangerleonardo.github.io/ProjectGymReact/

# Proyecto Gym React

Este proyecto es una aplicación de carrito de compras para un gimnasio, desarrollada con React. Permite a los usuarios agregar productos al carrito, ajustar las cantidades, y realizar compras.

## Características

- Agregar productos al carrito
- Ajustar la cantidad de productos en el carrito
- Eliminar productos del carrito
- Calcular el total de la compra
- Realizar compras y vaciar el carrito
- Crear una cuenta que se guarda en una DB
- Iniciar sesión con una cuenta creada que se guarda

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/RangerLeonardo/ProjectGymReact.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd PROJECTGYMREACT
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia la aplicación:
    ```bash
    npm start
    ```

2. Abre tu navegador y navega a `http://localhost:5173/ProjectGymReact/`.

## Estructura del Proyecto

- [CartSummary.jsx](http://_vscodecontentref_/1): Componente que muestra el resumen del carrito de compras.
- [CartCheckout.jsx](http://_vscodecontentref_/2): Componente que maneja el proceso de compra y reduce el stock de productos.
- [QuantityControl.jsx](http://_vscodecontentref_/3): Componente para controlar la cantidad de productos.
- [QuantityControlWithQuantity.jsx](http://_vscodecontentref_/4): Componente para controlar la cantidad de productos con validación de stock.
- [CartShoppingContext.jsx](http://_vscodecontentref_/5): Contexto para manejar el estado del carrito de compras.
- [SessionContext.jsx](http://_vscodecontentref_/6): Contexto para manejar el estado de la sesión del usuario.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.