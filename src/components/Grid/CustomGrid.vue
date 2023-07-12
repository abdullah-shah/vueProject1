  <script setup >
  import { ref, watchEffect } from 'vue';
  import { AgGridVue } from 'ag-grid-vue3';
  import 'ag-grid-community/styles/ag-grid.css';
  import 'ag-grid-community/styles/ag-theme-alpine.css';
  
  const data = ref(null);
  const loading = ref(true);
  const columnDefs = ref([]);
  const rowData = ref([]);
  const isDataFetched = ref(false);
  const url = 'https://dummyjson.com/users?limit=5&skip=10&select=firstName,age,email,phone'; 
  watchEffect(()=>{
    try{
        async function fetchData (url) {
            const response = await fetch(url);
            const tempData = await response.json();
            data.value = tempData.users
            loading.value = false;
            isDataFetched.value = true
            
        }
        if (!isDataFetched.value){
            fetchData(url);
        }
        if (isDataFetched.value && data.value) {
            columnDefs.value = [];
            rowData.value = [];
            for (const key of Object.keys(data.value[0])) {
                if (key !== 'id'){
                    columnDefs.value.push({ headerName: key, field: key, sortable: true, filter: true, editable: true });
                }
            }
            rowData.value = data.value.map(item => ({...item}))
    }
}
    catch(error){
        throw error;
    }
  }) 
  </script>
  <template >
    <ag-grid-vue style="width: 500px; height: 300px;"
                 class="ag-theme-alpine"
                 animateRows="true"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
    </ag-grid-vue>
    <pre>
       here is the data: {{ data }}
    </pre>
  </template>
  //   const columnDefs = ref([
  //         { headerName: 'Make', field: 'make', sortable:true},
  //         { headerName: 'Model', field: 'model', sortable:true },
  //         { headerName: 'Price', field: 'price' , sortable:true}
  //       ]);
    
  //   const rowData = ref([
  //         { make: 'Toyota', model: 'Camry', price: 25000 },
  //         { make: 'Honda', model: 'Accord', price: 30000 },
  //         { make: 'Ford', model: 'Fusion', price: 27000 }
  //       ]);