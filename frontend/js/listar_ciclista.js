let resposta = document.getElementById('resposta')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/ciclistas`)
    .then(res => {
        return res.json()
    })
    .then(dados =>{
        resposta.innerHTML = `<table>
        <thead>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>CPF</th>
        </tr>
        </thead>
        <tbody>
        ${dados.map(ciclista => `
            <tr>
                <td>${ciclista.codCiclista}</td>
                <td>${ciclista.nome}</td>
                <td>${ciclista.email}</td>
                <td>${ciclista.senha}</td>
                <td>${ciclista.cpf}</td>
            </tr>
        `).join('')}
        </tbody>
        </table>`
    })
        })
        .catch((err) => {
            console.error('Erro ao listar o usuário', err)
            resposta.innerHTML = `Erro ao listar o usuário`
        })