export class Producto {

    _id?: string;
    producto: string;
    categoria: string;
    ubicacion: string;
    imagen: File;
    precio: string;

    constructor(producto:string, categoria:string, ubicacion: string, imagen: File, precio: string){
        this.producto = producto;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
        this.precio = precio;
    }

}