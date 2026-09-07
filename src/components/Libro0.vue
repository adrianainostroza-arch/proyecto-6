<template>
  <div class="libro-card">
    <h3>{{ titulo }}</h3>
    <p>Autor: {{ autor }}</p>
    <!-- v-if: solo mostramos la categoría si existe -->
    <p v-if="categoria">Categoría: {{ categoria }}</p>

    <div class="acciones">
      <RouterLink :to="`/libros/${id}`">Ver detalle</RouterLink>
      <button class="btn-eliminar" @click="$emit('eliminar')"> Eliminar</button>
    </div>
  </div>
</template>

<script setup>
 /* eslint-disable */
// Recibimos los datos del libro por props (v-bind desde el componente padre)
defineProps({
  id: {
    type: [Number, String],
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    default: ''
  },
  categoria: {
    type: String,
    default: ''
  }
})

// Avisamos al padre que el usuario quiere eliminar este libro
defineEmits(['eliminar'])
</script>

<style scoped>
.libro-card {
  border: 1px solid #dde3ea;
  border-radius: 8px;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.libro-card h3 {
  margin: 0 0 0.4rem 0;
  color: #3f6fa8;
}

.libro-card p {
  margin: 0.2rem 0;
}

.acciones {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.6rem;
}

.acciones a {
  color: #3f6fa8;
  text-decoration: none;
  font-weight: 600;
}

.btn-eliminar {
  background-color: #e05555;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
}

.btn-eliminar:hover {
  background-color: #c94444;
}
</style>