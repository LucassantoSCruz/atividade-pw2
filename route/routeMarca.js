//Importação do pacote express
const { response } = require('express');
const express = require('express');

//importação da model
const modelMarca = require('../model/modelMarcas');

//gerencimento de rotas
const router = express.Router();

//Rota de Cadastro de Marca
router.post('/cadastrarMarca', (req, res)=>{
    console.log(req.body);
    let {nome_marca} = req.body;
    modelMarca.create(
        {nome_marca}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"MARCA INSERIDA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
              errorStatus:true,
              mensagemStatus:"ERRO AO CADASTRAR A MARCA.",
              errorObject:error
            });
        }
    );
});

//Rota de Listagem de Marca
router.get('/listarMarca', (req, res)=>{
    modelMarca.findAll(
    ).then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MARCAS LISTADAS COM SUCESSO.",
                data:response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR AS MARCAS.",
                errorObject:error
            });
        }
    )
});

//Rota de Listagem de Marca por cod_marca
router.get('/listarMarcaPK/:cod_marca', (req, res)=>{
    let {cod_marca} = req.params;
    modelMarca.findByPk(cod_marca)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MARCA RECUPERADA COM SUCESSO.",
                data:response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
              erroStatus:true,
              mensagemStatus:"ERRO AO RECUPERAR A MARCA.",
              errorObject:error
            });
        }
    )
});

//Rota de Listagem de Marca por nome_marca
router.get('/listarMarcaNOME/:nome_marca', (req, res)=>{
    let {nome_marca} = req.params;
    modelMarca.findOne({
        attributes:['cod_marca', 'nome_marca'],
        where:{nome_marca}
    }).then(
        (response)=>{
            return res.status(200).json({
              erroStatus:false,
              mensagemStatus:"MARCA RECUPERADA COM SUCESSO.",
              data:response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
              erroStatus:true,
              mensagemStatus:"ERRO AO RECUPERAR A CATEGORIA.",
              data:response,
              errorObject:error
            })
        }
    )
})

//Rota de Alteração de Marca
router.put('/alterarMarca', (req, res)=>{
    const {cod_marca, nome_marca} = req.body;
    modelMarca.update(
        {nome_marca},
        {where:{cod_marca}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus:"MARCA ALTERADA COM SUCESSO."
            })
        }
    )
})

//Rota de Exclusão de Marca
router.delete('/excluirMarca/:cod_marca', (req, res)=>{
    console.log(req.params);
    let {cod_marca} = req.params
    modelMarca.destroy(
        {where:{cod_marca}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"MARCA EXCLUIDA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: "ERRO AO EXCLUIR A CATEGORIA.",
                errorObject:error
            })
        }
    )
})

module.exports = router;