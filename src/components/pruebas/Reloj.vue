<template>
  <div>
    <h1 class="titulo">Reloj Vue 3</h1>
    <div>
      <button @click="start()" :disabled="reloj.estado !== 'STOPPED'">START</button>
      <button @click="pause()" :disabled="reloj.estado !== 'RUNNING'">PAUSE</button>
      <button @click="resume()" :disabled="['RUNNING', 'STOPPED'].includes(reloj.estado)">RESUME</button>
      <button @click="invert()">INVERT</button>
      <button @click="reset()" :disabled="['STOPPED'].includes(reloj.estado)">RESET</button>
    </div>
    <hr>  
    <div>
      <div style="background-color: beige; color:black">
        <h1><span>{{ reloj.horas }}</span>:<span>{{ reloj.minutos }}</span>:<span>{{ reloj.segundos }}</span> 
            <span> [ {{ reloj.estado }}]</span>  
            <span> {{ reloj.sentido === 1 ? " UP" : " DOWN" }}</span></h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 
  import { reactive } from "vue";

  const reloj: Reloj = reactive({
    intervalId: null,
    totalSeconds: 0,
    sentido: 1,
    horas: "00",
    minutos: "00",
    segundos: "00",
    estado: "STOPPED", // "STOPPED, "RUNNING", "PAUSED"
  });

  const resume = () => {

    clearInterval(reloj.intervalId);
   
    reloj.intervalId = setInterval(() => {
      
      if(reloj.sentido === -1 && reloj.totalSeconds === 0){
        reset();
      } else {
        reloj.totalSeconds += reloj.sentido;
        reloj.horas =    ("0" +  Math.floor(reloj.totalSeconds / 3600)).slice(-2); 
        reloj.minutos =  ("0" +  Math.floor(reloj.totalSeconds / 60 % 60)).slice(-2);
        reloj.segundos = ("0" +  Math.floor(reloj.totalSeconds % 60)).slice(-2);
      }

    }, 100)

    reloj.estado = "RUNNING";
   
  }

  const start = () => {
    reset();
    resume();
  }

  const pause = () => {
    clearInterval(reloj.intervalId);
    reloj.estado = "PAUSED";
  }

  const invert = () => {
    reloj.sentido *= -1;
  }

  const reset = () => {
    clearInterval(reloj.intervalId);
    reloj.totalSeconds = 0;
    reloj.sentido = 1;
    reloj.estado = "STOPPED";
  }

  type Reloj = {
    intervalId:any; 
    totalSeconds:number;
    sentido: number;
    horas: string;
    minutos: string;
    segundos: string;
    estado: string;
  }

</script>

<style scoped>

  .titulo{
    color:red;
    font-size: 60px;
  }

</style>



