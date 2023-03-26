//Importação do pacote express
const { response } = require('express');
const express = require('express');

//importação da model
const modelFornecedor = require('../model/modelFornecedores');

//gerencimento de rotas
const router = express.Router();

//Rota de Cadastro de Fornecedor
router.post('/cadastrarFornecedor', (req, res)=>{

    console.log(req.body);
    let {nome_fornecedor, tel_fornecedor, email_fornecedor} = req.body;
    
    modelFornecedor.create(
        {nome_fornecedor, tel_fornecedor, email_fornecedor}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"FORNECEDOR CADASTRADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                errorStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O FORNECEDOR.",
                errorObject: error
            })
        }
    )   
})

//Rota de Listagem de Fornecedor
router.get('/listarFornecedor', (req, res)=>{
    modelFornecedor.findAll(
    ).then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"FORNECEDORES LISTADOS COM SUCESSO.",
                data:response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR OS FORNECEDORES",
                errorObject:error
            })
        }
    )
})

//Rota de Listagem de Fornecedor por cod_fornecedor
router.get('/listarFornecedorPK/:cod_fornecedor', (req, res)=>{
    let {cod_fornecedor} = req.params;
    modelFornecedor.findByPk(cod_fornecedor)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"FORNECEDOR LISTADO COM SUCESSO.",
                data:response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR O FORNECEDOR.",
                errorObject:error
            });
        }
    )
})

//Rota de Listagem de Fornecedor por nome_fornecedor
router.get('/listarFornecedorNOME/:nome_fornecedor', (req, res)=>{
    let {nome_fornecedor} = req.params;
    modelFornecedor.findOne({
        attributes:['cod_fornecedor','nome_fornecedor','tel_fornecedor','email_fornecedor'],
        where:{nome_fornecedor}
    }).then(
        (response)=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus:"FORNECEDOR LISTADO COM SUCESSO.",
                data:response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR O FORNECEDOR.",
                data:response,
                errorObject:error
            })
        }
    )
})

//Rota de Alteração de Fornecedor
router.put('/alterarFornecedor', (req, res)=>{
    const {cod_fornecedor, nome_fornecedor, tel_fornecedor, email_fornecedor} = req.body;
    modelFornecedor.update(
        {nome_fornecedor, tel_fornecedor, email_fornecedor},
        {where:{cod_fornecedor}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus:"FORNECEDOR ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: "ERRO AO ALTERAR O FORNECEDOR",
                errorObject:error
            })
        }
    )
})

//Rota de Exclusão de Fornecedor
router.delete('/excluirFornecedor/:cod_fornecedor', (req, res)=>{
    console.log(req.params);
    let {cod_fornecedor} = req.params
    modelFornecedor.destroy(
        {where:{cod_fornecedor}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"FORNECEDOR EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: "ERRO AO EXCLUIR O FORNECEDOR.",
                errorObject:error
            })
        }
    )
})

module.exports = router;