# Entrega final de proyecto en React

## INFORMACIÓN GENERAL
El proyecto fue creado en React para la clase de React en Coderhouse. Se subió en GitHub Pages con el siguiente enlace: https://haro90.github.io/react1/ donde se puede ver la versión final. Cabe aclarar que solo fue una clase de programación y no de diseño, por lo que el diseño quedó un poco de lado. Este proyecto tomó varios meses en desarrollo y tomó un esfuerzo grande, ya que fue realizado por una sola persona. Sin embargo, el resultado final fue satisfactorio; fue un reto grande por que el creador no tenía ninguna experiencia en el uso de dicho software.

Existen varios CSS vacíos/se decidió que por tiempo se haría prácticamente todo el diseño en dos páginas de CSS: App.css y Itemlistcontainer.css.

Links de las páginas CSS mencionadas:
- App.css
- Itemlistcontainer.css


## Funcionamiento general del proyecto
El proyecto es una e-commerce clásica, donde se observan "productos" y se buscan los detalles de dicho producto (pueden ser vistos por categorías), después se da la opción de agregar dichos productos a un carrito (y también la cantidad de producto). Finalmente, se revisan los totales y se da un check-out donde se llena un formulario con datos personales (para asegurar la comunicación vendedor-comprador) y se obtiene de forma automática un código/id de la transacción; mientras que para el vendedor se generará una orden en Firebase.

## Generación de ID de la compra
Al final, sí se genera una ID de compra. Además, en Firebase se hace una orden y se guarda. Aquí dejo el detalle en la siguiente imagen:

![Detalle de la generación de ID de compra y la orden en Firebase](https://i.ibb.co/51v98HZ/Compra.png)

Además, el número en el stock se disminuye automáticamente, es decir, el stock se actualiza automáticamente.

### Lista de páginas js creadas o modificadas:
- Cart.js
- CartItem.js
- CartWidget.js
- Checkout.js
- Checkoutform.js
- CartContext.js
- Item.js
- ItemCount.js
- ItemDetail.js
- ItemDetailcontainer.js
- ItemList.js
- ItemListContainer.js
- Navbar.js
- firebaseConfig.js
- App.js

Finalmente agradezco las revisiones y las enseñanzas que me dejan mis tutores y compañeros.

