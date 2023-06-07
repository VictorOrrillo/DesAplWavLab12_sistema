export class Producto {

    _id?: string;
    producto: string;
    categoria: string;
    ubicacion: string;
    precio: number;
    image: string;

    constructor(producto:string, categoria:string, ubicacion: string, precio: number, image : string){
        this.producto = producto;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.image = image;
    }

}