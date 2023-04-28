const user_model = require("../models/user");

module.exports = {
    async register(req, res){
        try{
            let data = await user_model.register(req.body);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async login(req, res){
        try{
            let data = await user_model.login(req.body);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    }
}