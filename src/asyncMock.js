const products = [{
    id:'1',
    name: 'Control Biologico',
    price: 1000,
    Category: 'Biobest',
    img: 'https://www.imex.mx/wp-content/uploads/2021/01/biobest1.png',
    stock: 25,
    description: 'Descripcion de Control Biologico'

    
},
{id:'2',
name: 'Polinizacion',
price: 800,
Category: 'Biobest',
img: 'https://www.imex.mx/wp-content/uploads/2021/01/biobest2.png',
stock: 50,
description: 'Descripcion de Polonizacion'},

{id:'3',
name: 'Trampas Adhesivas',
price: 1200,
Category: 'Biobest',
img: 'https://www.imex.mx/wp-content/uploads/2021/01/2021-01-12-17_39_26-Biobest-Mexico-_-Imex2.png',
stock: 75,
description: 'Descripcion de Trampas Adhesivas'}
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}