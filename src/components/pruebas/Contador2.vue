<template>
    <h4>Número: {{ count }}</h4>
   <button @click="count++">{{ count }}</button>
   <button @click="count--">{{ count }}</button>
</template>

<!-- Forma no recomendable! Necesitamos el setup lang="ts"-->
<script>
   export default {
    data() {
        return{
            count: 24,
            nombre: "fdfd"
        }
    }

   }
</script>
