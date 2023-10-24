const tableData = document.getElementById("tableContent");
const btnAddProduct = document.getElementById("addProduct")
const modal = document.getElementById("modal");
const fechaModal = document.getElementById("cancel")
// value do modal....
const productName = document.getElementById('productName')
const productValue= document.getElementById('productValue')
const productQuantity = document.getElementById('productQuantity')
const btnSend = document.getElementById('send')
const form = document.getElementById('form')
// errorMessage
const errorMessage= document.getElementById('errorMessage')



const products = [
            {
                nome: 'iphone x 64Gb Grey',
                preco: 999.00,
                quantidade: 2,
            },
            {
                nome: 'Sansung SB Black',
                preco: 755.00,
                quantidade: 5,
            },
            {
                nome: 'Game Console Controller',
                preco: 22,
                quantidade: 7,
            },
          
            {
                nome: 'Tablet',
                preco: 900,
                quantidade: 7,
            },
            {
                nome: 'Tv-smart',
                preco: 2900,
                quantidade: 3,
            },
          
    ];

    function openErro(){
      errorMessage.classList.remove('hidden')
      errorMessage.classList.add('block')
    }
    function FecheErro(){
      errorMessage.classList.remove('block')
      errorMessage.classList.add('hidden')
    }

function formatDataToString(value) {
    const valorFormatado = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    return valorFormatado;
  }
  //  resolver em casa
  function handleDelet(id){
    alert(id)
  }
  function handleEdit(id){
    alert(products[id].nome)
  }


  function renderTabela(nome, preco, quantidade, total, id){
    const tabela = tableData.innerHTML += `
                <tr class="even:bg-[#f2f2f2] odd:bg-white">
                    <td class="p-3">${nome}</td>
                    <td class="p-3">${preco}</td>
                    <td class="p-3">${quantidade}</td>
                    <td class="text-center p-3">${total}</td>
                    <td class=" flex gap-2 itmes-center justify-center p-3">

                    <button onClick="handleEdit(${id})" class='py-1 px-2 bg-sky-700 text-white rounded-md'>  Editar   </button>
                    <button onClick="handleDelet(${id})" class='py-1 px-2 bg-red-800 text-white rounded-md'>  Deletar  </button>
                    </td>
                </tr>

             `
 return tabela
  };

  function openModal(){
    modal.classList.remove("hidden")
    modal.classList.add("flex")
  }
  
 

  function modalFechado(){
    modal.classList.remove("flex")
    modal.classList.add("hidden")
    FecheErro()
    form.reset();
  }
  

 
  function addProdut(){
    if(
      productName.value &&  
      productQuantity.value &&
      productValue.value 
      ) {
    products.push({
      nome: productName.value,
      preco: productValue.value,
      quantidade: productQuantity.value,

    },)

    modalFechado()

  } else{
    openErro()
  }
  }


  
  function renderDataTable() {
    tableData.innerHTML="";
    products.map((product, index) => {
      const preco = formatDataToString(parseFloat(product.preco));
      const total = product.preco * product.quantidade;
      const totalFormatado = formatDataToString(total);
      const data = renderTabela( product.nome, preco, product.quantidade, totalFormatado, index);
      
  
      return data;
    });
  }
  
  renderDataTable();

  btnAddProduct.addEventListener("click", openModal);

  fechaModal.addEventListener("click", (e)=>{
    event.preventDefault()
    modalFechado();
  })


  btnSend.addEventListener("click", (e)=>{ 
    event.preventDefault()

    addProdut()
    renderDataTable()
   
    })

    

