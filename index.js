// Un ejemplo de pila es el historial del navegador web. Una persona ha navegado 
// hoy, por este orden en: Decathlon, ElPeriodico, Marca, Booking y Amazon. Hacer 
// una función que imprima en pantalla en orden LIFO (Last In First Out) los nombres 
// de las páginas web visitadas

class Pila {
    constructor()
    {
        this.items = [];
    }

    apilar(elem) 
    {
        this.items.push(elem);
        return this.items;
    }

    vaciar()
    {
        this.items = [];
        return this.items;
    }

    imprimir() 
    {
        for (var i = 0; i < this.items.length; i++)
        { 
            document.write(this.items[i] + "<br/>");
        }
    }
}

const paginasVisitadas = new Pila();

paginasVisitadas.apilar("Decathlon");
paginasVisitadas.apilar("ElPeriodico");
paginasVisitadas.apilar("Marca");
paginasVisitadas.apilar("Booking");
paginasVisitadas.apilar("Amazon");

paginasVisitadas.imprimir();

