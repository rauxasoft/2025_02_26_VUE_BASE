<template>
    <h2>Listado de Equipos</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Cumple Fair Play</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="equipo in equiposF" :key="equipo.id">
                <td>{{ equipo.id }}</td>
                <td>{{ equipo.nombre }}</td>
                <td>{{ equipo.ciudad }}</td>
                <td class="noCumple">{{ equipo.cumpleFairPlayFinanciero ? '' : 'NO CUMPLE' }}</td>
            </tr>
        </tbody>
    </table>
    <pre>{{ JSON.stringify(equiposF,null, 2) }}</pre>
</template>

<script setup lang="ts">

    import type { Equipo } from '@/model/equipo';
    import equipoServices from '@/services/equipoServices';
    import { onMounted, ref } from 'vue';

    const equiposF = ref<Equipo[]>([]);

    onMounted(async () => {

      equiposF.value = await equipoServices.getAll();

      console.log(equiposF);
 
    });

</script>

<style scoped>
    .noCumple{
        color: red;
    }

    table{
        width: 100%;
    }
</style>