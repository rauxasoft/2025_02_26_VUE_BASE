<template>
    <p>El mensaje del padre: {{ mensaje }}</p>
</template>

<script setup lang="ts">
    defineProps<{
        mensaje: string
    }>();

   
</script>