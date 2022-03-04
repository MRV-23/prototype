<template>
<div class="grid justify-items-center p-28 w-full">


<form class="w-full max-w-2xl ">
  <div class="flex flex-wrap -mx-3 mb-6" >
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Cliente
      </label>
      <input v-model="cliente" class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/3 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Hora Recoleccion
      </label>
      <input v-model="hora" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="datetime" placeholder="11:00">
    </div>
   <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Paquetes
      </label>
      <div class="relative">
        <select v-model="paquete" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option></option>
          <option>Pauqte 1</option>
          <option>Paquete 2</option>
          <option>Paquete 3</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Direccion
      </label>
      <input v-model="direccion" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Privada Norte #8567">
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Saldo
      </label>
      <input v-model="saldo" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="900">
    </div>
    <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Notas
      </label>
      <input v-model="nota" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Casa con fachada color verde ">
    </div>
  </div>
  <button  @click="enviarForm($event)" class="text-white font-medium rounded-md shadow-xl bg-green-400  px-5 p-2 m-3">SAVE <i class="fa-solid fa-floppy-disk"></i></button>
    <button type="reset" class="text-white font-medium rounded-md shadow-xl bg-red-400 p-2">CANCEL <i class="fa-solid fa-ban"></i></button>
  {{cliente}}
  {{hora}}
  {{paquete}}
  {{direccion}}
  {{saldo}}
  {{nota}} <br>
    <br><br>
  <div class="w-full max-w-2xl ">
      <table class="table table-striped w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cliente </th>
                                <th>Hora</th>
                                <th>Paquete</th>
                                <th>Direccion</th>
                                <th>Saldo</th>
                                <th>Notas</th>
                                <th colspan="2">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in datos" :key="user">
                                <td>{{ user.id }}</td>
                                <td>{{ user.cliente }}</td>
                                <td>{{ user.hora }}</td>
                                <td>{{ user.paquete }}</td>
                                <td>{{ user.direccion }}</td>
                                <td>{{ user.saldo }}</td>
                                <td>{{ user.notas }}</td>
                                <td><button  class="text-white font-medium rounded-md shadow-xl bg-green-400  px-5 p-2 m-3">Edit</button>
                                </td>
                                <td><button  @click="eliminar($event,user.id)" :id="index" class="text-white font-medium rounded-md shadow-xl bg-red-400 p-2">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
  </div>


</form>

</div>
    
  <h1 class="text-xl text-red-400">This is rentas {{ collapsed ? 'closed' : 'open' }}</h1>
  <button @click="toggleSidebar">T</button>
</template>

<script>
import { collapsed, toggleSidebar } from '@/components/sidebar/state'
import { ref , onMounted , computed} from 'vue'

export default {
  setup() {
      const cliente = ref('')
      const hora = ref('')
      const paquete = ref(0)
      const direccion = ref('')
      const saldo = ref('')
      const nota = ref('')

      const users = ref([])

      let datosRef = ref([
            {   
                id: '1',
                cliente: 'MRV-23',
                hora: '10',
                paquete: 'Paquete 1',
                direccion: 'Privada 9A',
                notas: 'Casa Verde',
                saldo: '800'
            },
            {   
                id: '2',
                cliente: 'Jose-23',
                hora: '10',
                paquete: 'Privada 2',
                direccion: '800',
                notas: 'Casa Azul',
                saldo: '800'
            }
      ])
      

      onMounted(async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                users.value = data.slice(0, 5);
                users.value = data
                console.log('data: ',users.value)
      })
        const actualizarData = (()=>{
            localStorage.setItem('DataFefUser', JSON.stringify(datosRef.value));
            console.info("entro")
        })
        const enviarForm = (async(event)=>{
            

                event.preventDefault()

       
                
                   datosRef.value.push({
                        id: datosRef.value.length+1,
                        cliente:cliente.value ,
                        hora: hora.value,
                        paquete: paquete.value,
                        direccion:  direccion.value,                        
                        saldo: saldo.value,
                        notas: nota.value,
                    });
               actualizarData()
         alert("FORMULARIO ENVIADO")
         console.info(
                cliente.value,
                hora.value,
                paquete.value,
                direccion.value,
                saldo.value,
                nota.value
            )

         /*localStorage.setItem("response", response.value.type_user)
                localStorage.setItem("responses", JSON.stringify(response.value))*/
      })
      

      const eliminar = ((event,id)=>{
        //   const confirmation = confirm('Do you want to delete the user?');
                    console.log(id)
                    event.preventDefault();
                    datosRef  = datosRef.value.filter(user => user.id !== id);
                    console.log()
                    
                   
          
      })

      const datos = computed(() => {
          console.log()
        return localStorage.getItem('DataFefUser')== null ? datosRef.value : localStorage.getItem('DataFefUser')
        }) 
        //Li


    return { 
        cliente,
        hora,
        paquete,
        direccion,
        saldo,
        nota,
        datosRef,

        collapsed, 
        toggleSidebar ,
        enviarForm,
        eliminar,
        datos
    }
  }
}
</script>
