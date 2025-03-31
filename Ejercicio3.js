class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinKedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpety() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // Función para agregar un nodo al final de la lista
    append(value) {
        const node = new Node(value); // Crea un nuevo nodo con el valor proporcionado

        // Si la lista está vacía, establece el nuevo nodo como la cabeza de la lista
        if (this.isEmpety()) {
            this.head = node;
        } else {
            let prev = this.head;

            // Recorre la lista hasta encontrar el último nodo (donde prev.next es null)
            while (prev.next) {
                prev = prev.next;
            }

            // Establece el siguiente nodo del último nodo como el nuevo nodo creado
            prev.next = node;
        }

        // Incrementa el tamaño de la lista
        this.size++;
    }

    // Función para imprimir los elementos de la lista
    print() {
        if (this.isEmpety()) {
            console.log('Lista vacía');
        } else {
            let curr = this.head;
            let lisValue = '';

            // Recorre la lista y agrega los valores de cada nodo a la variable lisValue
            while (curr) {
                lisValue += `${curr.value} `;
                curr = curr.next;
            }

            // Imprime todos los valores de los nodos en la lista
            console.log(lisValue);
        }
    }
}

const list = new LinKedlist();

console.log('¿Está vacía la lista?', list.isEmpety());
console.log('Tamaño de la lista:', list.getSize());

// Agregar elementos a la lista
list.append(10);  // Agrega 10 al final
list.print();     // Salida esperada: 10

list.append(20);  // Agrega 20 al final
list.print();     // Salida esperada: 10 20

list.append(30);  // Agrega 30 al final
list.print();     // Salida esperada: 10 20 30





