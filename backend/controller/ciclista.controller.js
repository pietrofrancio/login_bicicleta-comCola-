const Ciclista = require('../models/Ciclista')
const cryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo' // deve ficar no arquivo .env   

const cadastrar = async (req, res)=>{
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha || !valores.cpf){
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    }

    if(valores.cpf.length !== 11){
        return res.status(400).json({ message: 'CPF deve ter 11 dígitos!' })
    }

    try{
        const senhaCriptografada = cryptoJs.AES.encrypt(valores.senha, CHAVE_SECRETA).toString()
        const cpfCripto = cryptoJs.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()

        await Ciclista.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCriptografada,
            cpf: cpfCripto
        })

        return res.status(201).json({ message: 'Ciclista cadastrado com sucesso!' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao cadastrar ciclista' })
    }
}

const listar = async(req, res)=>{
    try{
        const ciclistas = await Ciclista.findAll()
        return res.status(200).json(ciclistas)
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao listar ciclistas' })
    }
}

const consultar = async(req, res)=>{
    const id = req.params.id
    try{
        const ciclista = await Ciclista.findByPk(id)
        if(!ciclista){
            return res.status(404).json({ message: 'Ciclista não encontrado' })
        }
        return res.status(200).json(ciclista)
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao consultar ciclista' })
    }
}

const atualizar = async(req, res)=>{
    const id = req.params.id
    const valores = req.body

    try{
        const ciclista = await Ciclista.findByPk(id)
        if(!ciclista){
            return res.status(404).json({ message: 'Ciclista não encontrado' })
        }
        await ciclista.update(valores, {where: {codCiclista: id}})
        return res.status(200).json({ message: 'Ciclista atualizado com sucesso!' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar ciclista' })
    }
}

const apagar = async(req, res)=>{
    const id = req.params.id
    try{
        const ciclista = await Ciclista.findByPk(id)
        if(!ciclista){
            return res.status(404).json({ message: 'Ciclista não encontrado' })
        }
        await ciclista.destroy({where: {codCiclista: id}})
        return res.status(200).json({ message: 'Ciclista apagado com sucesso!' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao apagar ciclista' })
    }
}

module.exports = { cadastrar, listar, consultar, atualizar, apagar }