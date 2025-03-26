<template>
    <p>Selector de lances</p>
    <EjemploSelector/>
    <hr>
    <p>Repetidor de mensaje</p>
    <RepetidorMensaje :count="count" texto="Este es el texto"/>
    <hr>
    <p>Ejemplo de padre que envía un mensaje (prop) al Hijo</p>
    <Hijo :mensaje="refran"/>
    <hr>
    <p>Ejemplo básico de componente contador</p>
    <Contador1/>
    <hr>
    <p>Ejemplo sencillo de data binding</p>
    <EjemploBinding/>
 
</template>

<script setup lang="ts">

    import Contador1 from '@/components/pruebas/Contador1.vue';
    import EjemploBinding from '@/components/pruebas/EjemploBinding.vue';
    import EjemploSelector from '@/components/pruebas/EjemploSelector.vue';
    import Hijo from '@/components/pruebas/Hijo.vue';
    import RepetidorMensaje from '@/components/pruebas/RepetidorMensaje.vue';

    const refran = "Este es el consejo que llega de tu padre...";

    const count = 12;

</script>


