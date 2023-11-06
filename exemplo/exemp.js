const inputName = document.getElementById("name")
const btnSend = document.getElementById("btn-send")
const content = document.getElementById("content")

const convidados = [
    {
        name: 'Lopes',

    },
    {
        name: 'Neto',

    },
    {
        name: 'Samuel',

    },
    {
        name: 'Adriano',

    },
    
];


function editarCnvidado(id){
    const convidado = convidados.find((convidado, index)=> index === id)
    inputName.value = convidado.name;
}

function deletarConvidado(id){

    convidados.splice(id, 1);
    content.innerHTML ="";
    convidados.map((convidado, index)=>{
        return (content.innerHTML +=`
                <li>
                    ${convidado.name} 
                    <div class= 'btn-action'>
                        <button class ="btn-edit" onClick="editarCnvidado(${index})"> Editar </button>
                        <button class="btn-delete" onClick="deletarConvidado(${index})"> Excluir </button>
                    </div>
                </li>
        `)
    })
     
}

window.addEventListener("load", ()=>{
    convidados.map((convidado, index)=>{
        return (content.innerHTML +=`
                <li>
                    ${convidado.name} 
                    <div class= 'btn-action'>
                        <button class ="btn-edit" onClick="editarCnvidado(${index})"> Editar </button>
                        <button class="btn-delete" onClick="deletarConvidado(${index})"> Excluir </button>
                    </div>
                </li>
        `)
    })
})