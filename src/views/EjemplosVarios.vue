<template>
    
    <p>Reloj</p>
    <div class="reloj">
        <Reloj :alarm="alarm" :alarmON="alarmON"/>
    </div>
    <div class="controlAlarma">
        <div>
            <button @click="alarmON = !alarmON">SET ALARM {{ alarmON ? 'OFF' : 'ON' }}</button>
        </div>
        <div>
        <fieldset>   
            <div>
                    <label for="idHoras">Horas</label>
                    <input id="idHoras" v-model="horas" type="number" value="horas"/>
                </div>
                <div>
                    <label for="idMinutos">Minutos</label>
                    <input id="idMinutos" v-model="minutos" type="number" value="minutos"/>
                </div>
                <div>
                    <label for="idSegundos">Segundos</label>
                    <input id="idSegundos" v-model="segundos" type="number" value="segundos"/>
                </div>
            </fieldset> 
        </div>
        
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
    import { ref, watch } from 'vue';
    
    const refran = "Este es el consejo que llega de tu padre...";
    const count = 12;

    const alarm = ref(0);
    const alarmON = ref(false);

    const horas = ref(0);
    const minutos = ref(0);
    const segundos = ref(0);

    watch([horas, minutos, segundos], () => {
        alarm.value = horas.value * 3600 + minutos.value * 60 + segundos.value;
    })

</script>

<style scoped>

    .reloj{
        background-color: orange;
        padding:4x;
        width: 600px;
       
    }

    .controlAlarma{
        background-color: blue;
        padding:4x;
        width: 600px;
        height: 180px;;
    }

</style>


