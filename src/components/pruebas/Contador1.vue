<template>
    <h4>Número: {{ count }}</h4>
   <button @click="count++">{{ count }}</button>
   <button @click="count--">{{ count }}</button>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    const count = ref(24);
</script>

<!-- Este Contador1.vue (que es el bueno) con respecto a Contador2.vue se diferencia en... -->
<!-- Código más corto y directo -->
<!-- Mejor soporte de TypeScript -->
<!-- Mejor rendimiento en tiempo de compilación -->
<!-- No hay boilerplate -->