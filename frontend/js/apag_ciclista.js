let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    let codCiclista = document.getElementById('codCiclista').value

    fetch(`http://localhost:3000/ciclista/${codCiclista}`, {
        method: 'DELETE'
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        resposta.innerHTML = dados.message
    })
    .catch((err) => {
        console.error('Erro ao apagar o ciclista', err)
        resposta.innerHTML = 'Erro ao apagar o ciclista'
    })
})