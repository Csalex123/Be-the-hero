const connection = require('../database/connection');

module.exports = {

    async index(req, res) {

        const cases = await connection('incidents').select('*');

        return res.json(cases)
    },

    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const results = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        const id = results[0];
        return res.json({ id });
    },

    async delete(req, res){
        //Pegando ID do paramentro
        const { id } = req.params;

        const ong_id = req.headers.authorization;

        //Pegando o ID de quem criou o caso para verificar com ID da ONG logada e ver se realmente é dela
        const cases = await connection('incidents').where('id',id).select('ong_id').first();

         //Validação: Verificando se o O case é daquela ONG
        if(cases.ong_id != ong_id){
            //Retoranndo O status 401 que é não autorizado para o usuário e seguida envio um erro em formato json
            return res.status(401).json({error: "Operation not permitted", msg: cases.ong_id});
        }

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();

    }
}