const fetch_model = require("../models/fetch");

module.exports = {
    async index(req, res){
        try{
            let data = await fetch_model.index();
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async conversion(req, res){
        try{
            let data = await fetch_model.conversion();
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async aggregate(req, res){
        try{
            let data = await fetch_model.aggregate(req.query);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    }
}