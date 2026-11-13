let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/agendamentos`)
        .then(res => {
            return res.json()
        })
        .then(dados => {

            if(dados.message){
                resposta.innerHTML = dados.message
                return
            }

            resposta.innerHTML = `
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Ciclista</th>
                        <th>Bicicleta</th>
                    </tr>

                    ${dados.map(agendamento => `
                        <tr>
                            <td>${agendamento.codAgendamento}</td>
                            <td>${agendamento.data}</td>
                            <td>${agendamento.hora}</td>
                            <td>${agendamento.idCiclista}</td>
                            <td>${agendamento.idBicicleta}</td>
                        </tr>
                    `).join('')}
                </table>
            `
        })
        .catch((err) => {
            console.error('Erro ao listar agendamentos', err)
            resposta.innerHTML = 'Erro ao listar agendamentos'
        })
})