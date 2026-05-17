<template>
  <div class="container py-4">
    <header class="mb-3">
      <h1 class="h4 mb-1">Metadatos de estaciones (XEMA)</h1>
      <small class="text-muted">
        Endpoint: https://api.meteo.cat/xema/v1/estacions/metadades
      </small>
    </header>

    <div class="mb-3 d-flex gap-2">
      <button class="btn btn-primary" @click="cargarEstaciones">Cargar</button>

      <button class="btn btn-outline-secondary" @click="limpiar">Limpiar</button>
    </div>

    <p v-if="estaciones.length" class="text-muted">
      Se han obtenido {{ estaciones.length }} estaciones.
    </p>

    <div class="row" v-if="estaciones.length">
      <div v-for="estacion in estaciones" :key="estacion.codi" class="col-12 col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-2">{{ estacion.nom }} ({{ estacion.codi }})</h5>

            <p class="mb-1"><strong>Tipo:</strong> {{ estacion.tipus }}</p>

            <p class="mb-1">
              <strong>Coordenadas:</strong>
              Lat: {{ estacion.coordenades.latitud }}, Lon: {{ estacion.coordenades.longitud }}
            </p>

            <p class="mb-1"><strong>Altitud:</strong> {{ estacion.altitud }} m</p>

            <p class="mb-1"><strong>Emplazamiento:</strong> {{ estacion.emplacament }}</p>

            <p class="mb-1"><strong>Municipio:</strong> {{ estacion.municipi.nom }}</p>

            <p class="mb-1"><strong>Comarca:</strong> {{ estacion.comarca.nom }}</p>

            <p class="mb-1"><strong>Provincia:</strong> {{ estacion.provincia.nom }}</p>

            <p class="mb-2"><strong>Red:</strong> {{ estacion.xarxa.nom }}</p>

            <div>
              <strong>Estados:</strong>

              <ul class="mb-0 mt-1">
                <li v-for="estado in estacion.estats" :key="estado.codi">
                  codi: {{ estado.codi }} — inicio: {{ estado.dataInici }} — fin:
                  {{ estado.dataFi ?? 'EN CURSO' }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="text-muted">No hay estaciones cargadas.</p>
  </div>
</template>

<script setup lang="ts">
import type { EstacioMeteorologica } from '@/interfaces/estacioMeteorologica.interface';
import { ref } from 'vue';

const estaciones = ref<EstacioMeteorologica[]>([]);

const cargarEstaciones = async () => {
  try {
    const response = await fetch('https://api.meteo.cat/xema/v1/estacions/metadades', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'u3DfW3MfBN6ozAAesvqIN6VF7caKzlqL4XaTemwr',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    estaciones.value = data;
  } catch (err) {
    console.error('Error al cargar estaciones:', err);
  }
};

const limpiar = () => {
  estaciones.value = [];
};
</script>
