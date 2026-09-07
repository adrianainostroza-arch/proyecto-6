<template>
  <div class="libros">
    <h2> Lista de Libros</h2>

    <div v-if="mostrarAviso" class="aviso">
      💡 Completá el formulario y hacé click en "Agregar" (o presioná Enter en el título) para sumar un libro.
      <button class="btn-cerrar" @click.once="mostrarAviso = false">Entendido</button>
    </div>

    <!-- Formulario para agregar libros -->
    <form class="formulario" @submit.prevent="agregar">
      <div class="campo">
        <label for="titulo">Título</label>
        <input
          id="titulo"
          v-model="nuevoLibro.titulo"
          type="text"
          placeholder="Ej: El Principito"
          @keyup.enter="agregar"
        />
      </div>

      <div class="campo">
        <label for="autor">Autor</label>
        <input
          id="autor"
          v-model="nuevoLibro.autor"
          type="text"
          placeholder="Ej: Antoine de Saint-Exupéry"
          @keyup.enter="agregar"
        />
      </div>

      <div class="campo">
        <label for="categoria">Categoría</label>
        <select id="categoria" v-model="nuevoLibro.categoria">
          <option disabled value="">Elegí una categoría</option>
          <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>

      <div class="campo">
        <label for="descripcion">Descripción (opcional)</label>
        <textarea
          id="descripcion"
          v-model="nuevoLibro.descripcion"
          placeholder="Una breve descripción del libro..."
        ></textarea>
      </div>

      <button type="submit" class="btn-agregar"> Agregar libro</button>
    </form>

    
    <p v-show="nuevoLibro.titulo || nuevoLibro.autor" class="preview">
      Vista previa: {{ nuevoLibro.titulo || '(sin título)' }}
      — {{ nuevoLibro.autor || '(sin autor)' }}
      <span v-if="nuevoLibro.categoria">· {{ nuevoLibro.categoria }}</span>
    </p>

    <hr />

    <p v-if="libros.length === 0" class="vacio">
      No hay libros disponibles. ¡Agregá el primero!
    </p>

    <ul v-else class="lista">
      <li v-for="libro in libros" :key="libro.id">
        <Libro
          :id="libro.id"
          :titulo="libro.titulo"
          :autor="libro.autor"
          :categoria="libro.categoria"
          @eliminar="eliminarLibro(libro.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>

 /* eslint-disable */
import { reactive, ref } from 'vue'
import { libros, agregarLibro, eliminarLibro } from '../store/libros.js'
import Libro from '../components/Libro.vue'

// Categorías disponibles para el <select>
const categorias = ['Ficción', 'No ficción', 'Ciencia', 'Historia', 'Infantil', 'Otro']

const mostrarAviso = ref(true)

// Modelo del formulario, vinculado con v-model a cada campo
const nuevoLibro = reactive({
  titulo: '',
  autor: '',
  categoria: '',
  descripcion: ''
})

function agregar () {
  // Validación mínima: título y autor son obligatorios
  if (!nuevoLibro.titulo.trim() || !nuevoLibro.autor.trim()) {
    alert('Por favor completá al menos el título y el autor.')
    return
  }

  agregarLibro({ ...nuevoLibro })

  // Reiniciamos el formulario para cargar el próximo libro
  nuevoLibro.titulo = ''
  nuevoLibro.autor = ''
  nuevoLibro.categoria = ''
  nuevoLibro.descripcion = ''
}
</script>

<style scoped>
.libros {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.aviso {
  background-color: #eaf2fb;
  border: 1px solid #b9d4ee;
  border-radius: 6px;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.btn-cerrar {
  background: none;
  border: 1px solid #3f6fa8;
  color: #3f6fa8;
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  white-space: nowrap;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: #ffffff;
  border: 1px solid #dde3ea;
  border-radius: 8px;
  padding: 1rem;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.campo label {
  font-weight: 600;
  font-size: 0.9rem;
}

.campo input,
.campo select,
.campo textarea {
  padding: 0.5rem;
  border: 1px solid #c7d0da;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.campo textarea {
  resize: vertical;
  min-height: 60px;
}

.btn-agregar {
  align-self: flex-start;
  background-color: #3f6fa8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-agregar:hover {
  background-color: #325a8a;
}

.preview {
  font-size: 0.9rem;
  color: #555;
}

.vacio {
  color: #888;
  font-style: italic;
}

.lista {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
</style>
