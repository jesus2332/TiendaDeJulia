const fs = require('fs'); 

let data = fs.readFileSync('productos.dat', 'utf8').split("\n");
console.log(data.length)
DAO = () => {
    let listaProductos = []
    for (let i = 0; i<=data.length-1;i++){
        productoCompleto = data[i].split(", ")
        let producto ={ 
            id: parseInt(productoCompleto[0]),
            descripcion: productoCompleto[1],
            precio : parseFloat(productoCompleto[2]),
            categoria : productoCompleto[3],
            existencia: parseInt(productoCompleto[4]),
            minimaExistencia : parseInt(productoCompleto[5]),
            maximaExistencia: parseInt(productoCompleto[6])
        }
        listaProductos.push(producto)
    }
    return listaProductos;
}

listaProductos = DAO()

productosArribaDe20 = (listaProductos) => {
    NumeroDeProductosSobre20 = 0;
    for (const product of listaProductos) {
        if( product.existencia >= 20){
            NumeroDeProductosSobre20++
        }
    }
    return NumeroDeProductosSobre20
}

productosDebajoDe15 = (listaProductos) =>{
    NumeroDeProductosMenor15 =0;
    for (const producto of listaProductos) {
        if(producto.existencia < 15){
            NumeroDeProductosMenor15++;
        }
    }
    return NumeroDeProductosMenor15

}

listaProductosClasificacionPrecio = (listaProductos, categoria) =>{
    let lista = [];
    for (const producto of listaProductos) {
        if (producto.categoria == categoria && producto.precio > 15.50) {
            lista.push(producto.id);
        }
    }
    return lista;
}

listaProductosPrecioEntre20y45 = (listaProductos) =>{
    lista = []
    for (const producto of listaProductos) {
        if(producto.precio >= 20.30 && producto.precio <= 45)
        lista.push(producto.id);
    }
    return lista
}

productosPorClasificacion = (listaProductos) =>{
    let productosLimpieza = 0;
    let productosAlimentos = 0;
    let productosHigiene = 0;
    let productosOtros = 0;

    for (const producto of listaProductos) {
        if(producto.categoria == "Limpieza"){
            productosLimpieza++;
        }else if(producto.categoria == "Alimentos"){
            productosAlimentos++;
        }else if(producto.categoria == "Higiene"){
            productosHigiene++;
        }else{
            productosOtros++;
        }
    }

    console.log(`El numero de productos de la categoria Limpieza es: ${productosLimpieza}`)
    console.log(`El numero de productos de la categoria Alimentos es: ${productosAlimentos}`)
    console.log(`El numero de productos de la categoria Higiene es: ${productosHigiene}`)
    console.log(`El numero de productos de la categoria Otros es: ${productosOtros}`)

}

console.log(`El mumero de productos con existencia mayor a 20 es: ${productosArribaDe20(listaProductos)}\n`)
console.log(`El numero de productos con existencia menor a 15 es: ${productosDebajoDe15(listaProductos)}\n`)
console.log(`La lista de productos con la categoria Limpieza y precio mayor a 15.50 es:  ${listaProductosClasificacionPrecio(listaProductos, "Limpieza")}\n`)
console.log(`La lista de productos con la categoria Higiene y precio mayor a 15.50 es:  ${listaProductosClasificacionPrecio(listaProductos, "Higiene")}\n`)
console.log(`La lista de productos con la categoria Alimentos y precio mayor a 15.50 es:  ${listaProductosClasificacionPrecio(listaProductos, "Alimentos")}\n`)
console.log(`La lista de productos con la categoria Otros y precio mayor a 15.50 es:  ${listaProductosClasificacionPrecio(listaProductos, "Otros")}\n`)
console.log(`La lista de productos con precio entre 20 y 45 es: ${listaProductosPrecioEntre20y45(listaProductos)}\n`)
productosPorClasificacion(listaProductos)