<template>
    <div>
        <input v-model="valorEntrada" type="text" placeholder="Texto aqui..."/>
        <h2> {{ valorEntrada }}</h2>
    </div>
</template>

<script setup lang="ts">
    
    import { ref } from 'vue';

    const valorEntrada = ref('Bartolo')

</script>