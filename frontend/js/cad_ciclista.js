const resposta = document.getElementById("resposta");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cpf = document.getElementById("cpf").value;

    const valores = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf
    }

    fetch("http://localhost:3000/ciclista",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(valores)
    })
    .then(res => {
        return res.json()
    })
    .then(dados=>{
        resposta.innerHTML = ''
        resposta.innerHTML += dados.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar ciclista!',err)
        resposta.innerHTML = 'Erro ao cadastrar ciclista!'
    })
})