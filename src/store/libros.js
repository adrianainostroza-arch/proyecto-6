

import { ref } from 'vue'

export const libros = ref([
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    categoria: 'Ficción',
    descripcion: 'La historia de la familia Buendía en el pueblo de Macondo.'
  },
  {
    id: 2,
    titulo: 'Sapiens',
    autor: 'Yuval Noah Harari',
    categoria: 'Historia',
    descripcion: 'Un recorrido por la historia de la humanidad.'
  },
  {
    id: 3,
    titulo: 'Cosmos',
    autor: 'Carl Sagan',
    categoria: 'Ciencia',
    descripcion: 'Un viaje por el universo, la ciencia y su historia.'
  }
])

// Contador simple para generar ids nuevos
let siguienteId = 4

export function agregarLibro (libro) {
  libros.value.push({
    id: siguienteId,
    titulo: libro.titulo,
    autor: libro.autor,
    categoria: libro.categoria,
    descripcion: libro.descripcion
  })
  siguienteId++
}

export function eliminarLibro (id) {
  libros.value = libros.value.filter((libro) => libro.id !== id)
}
