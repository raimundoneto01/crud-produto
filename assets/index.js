const tableData = document.getElementById("tableContent");
const btnAddProduct = document.getElementById("addProduct")
const modal = document.getElementById("modal");
const fechaModal = document.getElementById("cancel")

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

    ];

function formatDataToString(value) {
    const valorFormatado = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
    return valorFormatado;
  }


  function renderTabela(nome, preco, quantidade, total){
    const tabela = tableData.innerHTML += `
                <tr class="even:bg-[#f2f2f2] odd:bg-white">
                    <td class="p-3">${nome}</td>
                    <td class="p-3">${preco}</td>
                    <td class="p-3">${quantidade}</td>
                    <td class="text-center p-3">${total}</td>
                </tr>

             `
 return tabela
  };

  
  function renderDataTable() {
    products.map((product) => {
      const preco = formatDataToString(product.preco);
      const total = product.preco * product.quantidade;
      const totalFormatado = formatDataToString(total);
      const data = renderTabela( product.nome, preco, product.quantidade, totalFormatado);
  
      return data;
    });
  }
  
  renderDataTable();


 

  function openModal(){
    modal.classList.remove("hidden")
    modal.classList.add("flex")
  }
  btnAddProduct.addEventListener("click", openModal);

  function modalFechado(e){
    event.preventDefault()
    modal.classList.remove("flex")
    modal.classList.add("hidden")
  }
  
  fechaModal.addEventListener("click", modalFechado )

