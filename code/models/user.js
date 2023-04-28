const { getPool } = require("../database");

module.exports = {
    async register(params){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("INSERT INTO users (username, password) value (?, PASSWORD(?))", [params.username, params.password]);
            await  conn.commit();

            response = {
                "username": params.username
            }
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    }
}