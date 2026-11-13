let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')
let codCiclista = document.getElementById('codCiclista')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/ciclista/${codCiclista.value}`)
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
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>CPF</th>
                    </tr>

                    <tr>
                        <td>${dados.codCiclista}</td>
                        <td>${dados.nome}</td>
                        <td>${dados.email}</td>
                        <td>${dados.senha}</td>
                        <td>${dados.cpf}</td>
                    </tr>
                </table>
            `
        })
        .catch((err) => {
            console.error('Erro ao consultar o ciclista', err)
            resposta.innerHTML = `Erro ao consultar o ciclista`
        })
})