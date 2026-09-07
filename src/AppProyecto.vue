<template>
  <div id="app">
    <header class="app-header">
      <h1> BookList</h1>
      <nav class="navbar">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/libros">Libros</RouterLink>
      </nav>
    </header>
    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background-color: #f5f7fa;
  color: #222;
}

.app-header {
  background-color: #3f6fa8;
  color: white;
  padding: 1rem 2rem;
}

.app-header h1 {
  margin: 0 0 0.5rem 0;
}

.app-header nav a {
  color: white;
  text-decoration: none;
  margin-right: 1.2rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
}

.app-header nav a.router-link-exact-active {
  border-bottom: 2px solid white;
}

.app-content {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>
