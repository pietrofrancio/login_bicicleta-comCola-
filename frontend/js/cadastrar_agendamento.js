let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    let data = document.getElementById('data').value
    let hora = document.getElementById('hora').value
    let idCiclista = document.getElementById('idCiclista').value
    let idBicicleta = document.getElementById('idBicicleta').value

    const valores = {
        data: data,
        hora: hora,
        idCiclista: idCiclista,
        idBicicleta: idBicicleta,
    }

    fetch(`http://localhost:3000/agendamento`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(res => {
        return res.json()
    })
    .then(dados => {
        resposta.innerHTML = `${dados.message}`
    })
    .catch((err) => {
        console.error('Erro ao cadastrar a agendamento', err)
        resposta.innerHTML = `Erro ao cadastrar a agendamento`
    })
})