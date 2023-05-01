const products = [
    {
      id: '1',
      name: 'Control Biologico',
      price: 1000,
      category: 'ControlBiologico',
      img: 'https://www.imex.mx/wp-content/uploads/2021/01/biobest1.png',
      stock: 25,
      description: 'Descripcion de Control Biologico'
    },
    {
      id: '2',
      name: 'Polinizacion',
      price: 800,
      category: 'Polinizacion',
      img: 'https://www.imex.mx/wp-content/uploads/2021/01/biobest2.png',
      stock: 50,
      description: 'Descripcion de Polonizacion'
    },
    {
      id: '3',
      name: 'Trampas Adhesivas',
      price: 1200,
      category: 'Trampas',
      img: 'https://www.imex.mx/wp-content/uploads/2021/01/2021-01-12-17_39_26-Biobest-Mexico-_-Imex2.png',
      stock: 75,
      description: 'Descripcion de Trampas Adhesivas'
    }
  ]
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })
  }
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId))
      }, 500)
    })
  }
  
  export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === productCategory))
      }, 500)
    })
  }
  