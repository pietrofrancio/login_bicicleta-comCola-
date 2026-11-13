let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    let codCiclista = document.getElementById('codCiclista').value
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let cpf = document.getElementById('cpf').value

    const valores = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
    }

    fetch(`http://localhost:3000/ciclista/${codCiclista}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res =>{
        return res.json()
    })
    .then(dados => {
        if(dados.message){
            resposta.innerHTML = dados.message
        }else{
            resposta.innerHTML = 'Ciclista atualizado com sucesso!'
        }
    })
    .catch((err) => {
        console.error('Erro ao atualizar o ciclista', err)
        resposta.innerHTML = 'Erro ao atualizar o ciclista'
    })
})