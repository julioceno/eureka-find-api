const axios = require('axios');

module.exports = {
    async index(req, res) {
      const { cep } = req.params;

      try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        return res.json(data);
      } catch(err) {
        console.log(err)
        return res.json({ message: "cep not found" });
      }
       
    },
};