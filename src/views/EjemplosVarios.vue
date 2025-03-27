<template>
    
    <p>Reloj</p>
    <div class="reloj">
        <Reloj :alarm="alarm" :alarmON="alarmON"/>
    </div>
    <div class="controlAlarma">

        <button @click="alarmON = !alarmON">SET ALARM {{ alarmON ? 'OFF' : 'ON' }}</button>
        <input v-model="alarm" type="number" value="alarm"/>

    </div>

    <hr>
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
    import Reloj from '@/components/pruebas/Reloj.vue';
    import RepetidorMensaje from '@/components/pruebas/RepetidorMensaje.vue';
import { ref } from 'vue';
    
    const refran = "Este es el consejo que llega de tu padre...";
    const count = 12;

    const alarm = ref(2500);
    const alarmON = ref(false);

</script>

<style scoped>

    .reloj{
        background-color: orange;
        padding:4x;
        width: 400px;
       
    }

    .controlAlarma{
        background-color: blue;
        padding:4x;
        width: 400px;
        height: 180px;;
    }

</style>


