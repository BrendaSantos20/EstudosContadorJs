const inputNome = document.querySelector('#nome')
const inputIdade = document.querySelector('#idade')
const inputCpf = document.querySelector('#cpf')
const botaoAdd = document.querySelector('.btn-add')
const tabela = document.querySelector('.table')
const imglixeira = document.querySelector('.img');


botaoAdd.addEventListener('click', ()=>{
    if (inputNome.value == ''|| inputIdade.value == '' || inputCpf.value == ''){
    window.alert('Preencha todos os campos.')
    return
    }
    tabela.innerHTML += `
        <tr class="tr">
            <th>${inputNome.value}</th>
            <th>${inputIdade.value}</th>
            <th>${inputCpf.value} <img class="img" src="lixeira-de-reciclagem.png" alt=""</th> 
        </tr> `

    inputNome.value = '';
    inputCpf.value = '';
    inputIdade.value = '';
})

imglixeira.addEventListener('click',()=>{
    tabela.innerHTML -= `
        <tr class="tr">
            <th>${inputNome.value}</th>
            <th>${inputIdade.value}</th>
            <th>${inputCpf.value} <img class="img" src="lixeira-de-reciclagem.png" alt=""</th> 
        </tr> `
})


