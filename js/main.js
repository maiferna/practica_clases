
/**
 * Clases
 */

class Libro {
    /**
     * 
     * @param {String} titulo Título del libro
     * @param {String} autor Autor del libro
     * @param {String} isbn Número identificador del libro
     */

    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = false;
    }

    prestar() {
        this._prestado = true;
    }

    devolver() {
        this._prestado = false;
    }

    getEstado() {
        if (this._prestado) {
            return 'Prestado';
        } else {
            return 'Disponible';
        }
    }
}


class Biblioteca {
    /**
     * 
     * @param {String} nombre Nombre de la biblioteca
     * @param {Array} libros Array con todos los libros que se agreguen
     */

    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    buscarPorISBN(isbn) {
        return this.libros.find((libro) => isbn === libro.isbn);
    }

    prestarLibro(isbn) {
        const libro = this.buscarPorISBN(isbn);

        if (libro.getEstado() === 'Disponible') {
            libro.prestar();
        } else {
            return 'El libro no está disponible.'
        }
    }

    devolverLibro (isbn) {
        const libro = this.buscarPorISBN(isbn);

        if (libro.getEstado() === 'Prestado') {
            libro.devolver();
        }
    }

    mostrarLibros() {
        this.libros.forEach((libro) => {
            console.log(`${libro.titulo}, ${libro.autor}, ${libro.isbn}, ${libro.getEstado()}`);
        })
    }
}


const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", "12345");

const libro2 = new Libro("El nombre del viento", "Patrick Rothfuss", "54321");

const biblioteca = new Biblioteca("Biblioteca General");

biblioteca.agregarLibro(libro1);
console.log(biblioteca.libros);
biblioteca.agregarLibro(libro2);
console.log(biblioteca.libros);
biblioteca.mostrarLibros();
console.log(biblioteca.buscarPorISBN('12345'));
biblioteca.prestarLibro('12345');
biblioteca.mostrarLibros();
biblioteca.devolverLibro('12345');
biblioteca.mostrarLibros();
