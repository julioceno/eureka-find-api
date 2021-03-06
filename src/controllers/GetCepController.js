const axios = require('axios');
const Cep = require('../models/Cep');

module.exports = {
    async index(req, res) {
      const { cep } = req.params;

      try {
        const cepAlreadyExists = await Cep.findOne({ 
          where: { cep }
        });

        if (cepAlreadyExists) {
          return res.json(cepAlreadyExists);
        };

        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
       
        const { 
          logradouro,
          complemento,
          bairro,
          localidade,
          uf,
          ibge,
          gia,
          ddd,
          siafi
        } = data;

        const newCep = await Cep.create({
          cep,
          logradouro,
          complemento,
          bairro,
          localidade,
          uf,
          ibge,
          gia,
          ddd,
          siafi
        })

        return res.status(200).json(newCep);
      } catch(err) {
        return res.status(400).json({error: "Cep not found"});
      }
    },
};