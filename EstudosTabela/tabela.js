const nome = document.querySelector('#input-nome')
const idade = document.querySelector('#input-idade')
const cpf = document.querySelector('#input-cpf')
const botaoAdd = document.querySelector('.btn-add')
const tabela = document.querySelector('.table')


botaoAdd.addEventListener('click', ()=> {
    console.log('entrou')

    if (nome.value == ''|| idade.value == '' || cpf.value == ''){
        window.alert("Preencha todos os campos.")
    }
    else {
       
    tabela.innerHTML += `
        <tr class="tr"> 
            <td>${nome.value}</td>   
            <td>${idade.value}</td> 
            <td>${cpf.value}</td>
        </tr>
    `;
    nome.value = '';
    idade.value = '';
    cpf.value= '';
    }
})





