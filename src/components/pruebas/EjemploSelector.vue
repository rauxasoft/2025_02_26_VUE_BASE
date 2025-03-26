<template>
    <div>
        <label for="lance">Selecciona un lance:</label>
        <select id="lance" v-model="lanceSeleccionado">
            <option disabled value="">-- Elige una opción</option>
            <option v-for="lance in lances" :key="lance" :value="lance"> {{ lance }} </option>
        </select>
    </div>
    <p>Lance seleccionado: {{ lanceSeleccionado }}</p>
</template>

<script setup lang="ts">

    import { ref } from 'vue';

    const lances = [
        'GOL_LOCAL',
        'GOL_VISITANTE',
        'TARJETA_AMARILLA',
        'TARJETA_ROJA'
    ]

    const lanceSeleccionado = ref('GOL_VISITANTE');

</script>