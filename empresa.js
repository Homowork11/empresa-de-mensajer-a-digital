// Clase que representa un pedido con ID, prioridad y orden original
class Pedido {
  constructor(id, prioridad, ordenOriginal) {
    this.id = id;
    this.prioridad = prioridad;
    this.ordenOriginal = ordenOriginal;
  }
} 

// Función para generar un arreglo de 'n' pedidos aleatorios
function generarPedidos(n) {
  const prioridades = ["alta", "media", "baja"]; // Posibles prioridades
  const pedidos = [];
  for (let i = 0; i < n; i++) {
    const id = Math.floor(Math.random() * 10000); // ID aleatorio entre 0 y 9999
    const prioridad = prioridades[Math.floor(Math.random() * 3)]; // Prioridad aleatoria
    pedidos.push(new Pedido(id, prioridad, i)); // Se agrega el pedido al arreglo
  }
  return pedidos;
}

// Algoritmo de ordenamiento Bubble Sort por ID
function bubbleSort(pedidos) {
  const arr = [...pedidos]; // Se copia el arreglo para no modificar el original
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].id > arr[j + 1].id) {
        // Intercambia si el ID actual es mayor que el siguiente
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Algoritmo de ordenamiento Selection Sort por ID
function selectionSort(pedidos) {
  const arr = [...pedidos]; // Copia del arreglo original
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i; // Índice del valor mínimo
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].id < arr[minIdx].id) {
        minIdx = j; // Se actualiza el índice mínimo
      }
    }
    // Intercambia el elemento actual con el mínimo encontrado
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// Algoritmo de ordenamiento Insertion Sort por ID
function insertionSort(pedidos) {
  const arr = [...pedidos]; // Copia del arreglo original
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Elemento actual a insertar
    let j = i - 1;
    // Mueve los elementos mayores hacia la derecha
    while (j >= 0 && arr[j].id > key.id) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key; // Inserta el elemento en su posición correcta
  }
  return arr;
}

// Función para medir el tiempo de ejecución de un algoritmo de ordenamiento
function medirTiempo(algoritmo, pedidos) {
  const inicio = performance.now(); // Tiempo inicial
  const resultado = algoritmo(pedidos); // Ejecuta el algoritmo
  const fin = performance.now(); // Tiempo final
  console.log(`${algoritmo.name}: ${(fin - inicio).toFixed(2)} ms`); // Muestra el tiempo en consola
  return resultado;
}

// Tamaños de prueba para evaluar el rendimiento de los algoritmos
const tamaños = [100, 1000, 10000];

// Ejecuta los algoritmos para cada tamaño de pedidos
tamaños.forEach(tamaño => {
  console.log(`\n--- ${tamaño} pedidos ---`);
  const pedidos = generarPedidos(tamaño); // Genera los pedidos
  medirTiempo(bubbleSort, pedidos);       // Mide tiempo de Bubble Sort
  medirTiempo(selectionSort, pedidos);    // Mide tiempo de Selection Sort
  medirTiempo(insertionSort, pedidos);    // Mide tiempo de Insertion Sort
});