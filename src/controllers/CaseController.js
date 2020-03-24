const connection = require('../database/connection');

module.exports = {

    async index(req, res) {

        const cases = await connection('cases').select('*');

        return res.json(cases)
    },

    async create(req, res){
    const { title, description, value } = request.body;
    const org_id = req.headers.authorization;

    const result = await connection('case').insert({
        title,
        description,
        value,
        org_id
    });

    const id = result[0];
}
}