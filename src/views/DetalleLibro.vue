<template>
  <div class="detalle">
    <RouterLink to="/libros" class="volver">← Volver a la lista</RouterLink>

    <div v-if="libro">
      <h2>{{ libro.titulo }}</h2>
      <p>Autor: {{ libro.autor }}</p>
      <p>Categoría: {{ libro.categoria || 'Sin categoría' }}</p>
      <p v-if="libro.descripcion">Descripción: {{ libro.descripcion }}</p>

      <nav class="subnav">
        <RouterLink :to="`/libros/${libro.id}/descripcion`">Descripción</RouterLink>
        <RouterLink :to="`/libros/${libro.id}/opiniones`">Opiniones</RouterLink>
      </nav>

      <RouterView />
    </div>

    <p v-else class="no-encontrado">
      ❌ No encontramos ese libro. Puede que ya haya sido eliminado.
    </p>
  </div>
</template>

<script setup>
 /* eslint-disable */
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { libros } from '../store/libros.js'

const route = useRoute()

// Buscamos el libro dentro del store compartido según el parámetro de la ruta
const libro = computed(() =>
  libros.value.find((l) => String(l.id) === String(route.params.sku))
)
</script>

<style scoped>
.detalle {
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #dde3ea;
  border-radius: 8px;
}
.volver {
  display: inline-block;
  margin-bottom: 1rem;
  color: #3f6fa8;
  text-decoration: none;
  font-weight: 600;
}
.subnav {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}
.subnav a {
  color: #0077cc;
}
.no-encontrado {
  color: #c94444;
  font-weight: 600;
}
</style>
