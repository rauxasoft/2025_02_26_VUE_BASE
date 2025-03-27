<template>
  <div>
    <h1>Reloj Vue 3</h1>
    <div>
      <button @click="start()" :disabled="reloj.estado !== 'STOPPED'">START</button>
      <button @click="pause()" :disabled="reloj.estado !== 'RUNNING'">PAUSE</button>
      <button @click="resume()" :disabled="['RUNNING', 'STOPPED'].includes(reloj.estado)">RESUME</button>
      <button @click="invert()">INVERT</button>
      <button @click="reset()" :disabled="['STOPPED'].includes(reloj.estado)">RESET</button>
    </div>
    <div>
      <span>{{ reloj.estado }}</span><span> {{ reloj.sentido === 1 ? " UP" : " DOWN" }}</span>
    </div>
    <div>
      <h3>Alarm {{ alarmON ? 'ON' : 'OFF' }}</h3>
      <h3>Set Alarm {{ getDisplay(alarm) }}</h3>
    </div>
    <hr>  
    <div>
      <div class="display">
        <h1 class="tituloGrande">{{ getDisplay(reloj.totalSeconds) }} </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from "vue";

  const props = defineProps<{
        alarm: number,
        alarmON: boolean
    }>();

  const reloj: Reloj = reactive({
    intervalId: null,
    totalSeconds: 0,
    sentido: 1,
    estado: "STOPPED", // "STOPPED, "RUNNING", "PAUSED"
  });

  const resume = () => {

    clearInterval(reloj.intervalId);
   
    reloj.intervalId = setInterval(() => {
      
      if((reloj.totalSeconds === props.alarm) && props.alarmON){
        console.log("ALARMA!!!!!!");
        playAlarm();
      } 

      if(reloj.sentido === -1 && reloj.totalSeconds === 0){
        reset();
      } else {
        reloj.totalSeconds += reloj.sentido;
      }

    }, 100)

    reloj.estado = "RUNNING";
   
  }

  const getDisplay = (time: number) => {
    const horas = ("0" +  Math.floor(time / 3600)).slice(-2); 
    const minutos = ("0" +  Math.floor(time / 60 % 60)).slice(-2);
    const segundos = ("0" +  Math.floor(time % 60)).slice(-2);
    return `${horas}:${minutos}:${segundos}`;
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
    estado: string;
  }

  function playAlarm(){
    const audio = new Audio('/alarma1.mp3');
    audio.play();
  }

</script>

<style scoped>
  .display{
    margin:1px;
    padding:1px;
    background-color: black;
    color:red;
  }

  .tituloGrande{
    font-size: 70px;
    text-align: center;
  }
</style>
