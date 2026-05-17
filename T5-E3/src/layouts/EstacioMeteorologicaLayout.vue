<script setup lang="ts">
import HeaderComponent from '../views/HeaderComponent.vue';
import ConsultaEstaciones from '@/views/ConsultaEstaciones.vue';
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <HeaderComponent />
    <main class="flex-grow-1">
      <div class="container py-4">
        <ConsultaEstaciones />
      </div>
    </main>
  </div>
</template>
