import type { Equipo } from "@/model/equipo";
import axios from "axios";


const equipoServices = {

    async getAll(): Promise<Equipo[]> {
        const response = await axios.get<Equipo[]>('http://localhost:8080/equipos');
        return response.data;
    }

}

// axios.get() ---> devuelve una promesa
// await provoca la espera y de esa manera obtenemos una response HTTP a partir de la cual extraemos los datos que necesitamos.
// el hecho de que getAll esté marcado como async automáticamente impleca que getAll devuelve una promesa

// Como prueba de ello, vamos a tipos getAll()

export default equipoServices