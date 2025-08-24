// Cada pedido tiene un ID, una prioridad y su orden original
class Pedido {
  constructor(id, prioridad, ordenOriginal) {
    this.id = id;
    this.prioridad = prioridad;
    this.ordenOriginal = ordenOriginal;
  }
}
function generarPedidos(n) {
  const prioridades = ["alta", "media", "baja"];
  const pedidos = [];
  for (let i = 0; i < n; i++) {
    const id = Math.floor(Math.random() * 10000);
    const prioridad = prioridades[Math.floor(Math.random() * 3)];
    pedidos.push(new Pedido(id, prioridad, i));
  }
  return pedidos;
}
function bubbleSort(pedidos) {
  const arr = [...pedidos]; // Copia para no modificar el original
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].id > arr[j + 1].id) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
function selectionSort(pedidos) {
  const arr = [...pedidos];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].id < arr[minIdx].id) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
function insertionSort(pedidos) {
  const arr = [...pedidos];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].id > key.id) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
function medirTiempo(algoritmo, pedidos) {
  const inicio = performance.now();
  const resultado = algoritmo(pedidos);
  const fin = performance.now();
  console.log(`${algoritmo.name}: ${(fin - inicio).toFixed(2)} ms`);
  return resultado;
}
const tamaños = [100, 1000, 10000];

tamaños.forEach(tamaño => {
  console.log(`\n--- ${tamaño} pedidos ---`);
  const pedidos = generarPedidos(tamaño);
  medirTiempo(bubbleSort, pedidos);
  medirTiempo(selectionSort, pedidos);
  medirTiempo(insertionSort, pedidos);
});