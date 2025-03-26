<template>
    <ul>
        <li v-for="n in count" :key="n">{{ n }} : {{ texto }}</li>
    </ul>
</template>

<script setup lang="ts">
    defineProps<{
        texto: string,
        count: number
    }>();
</script>