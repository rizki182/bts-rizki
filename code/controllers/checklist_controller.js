const checklist_model = require("../models/checklist");

module.exports = {
    async list(req, res){
        try{
            let data = await checklist_model.list();
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async create(req, res){
        try{
            let data = await checklist_model.create(req.body);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async delete(req, res){
        try{
            let data = await checklist_model.delete(req.params.id);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },

    async itemList(req, res){
        try{
            let data = await checklist_model.itemList(req.params.checklistId);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async itemCreate(req, res){
        try{
            let data = await checklist_model.itemCreate(req.params.checklistId, req.body);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },

    async itemShow(req, res){
        try{
            let data = await checklist_model.itemShow(req.params.checklistId, req.params.itemId);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async itemUpdateStatus(req, res){
        try{
            let data = await checklist_model.itemUpdateStatus(req.params.checklistId, req.params.itemId);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async itemDelete(req, res){
        try{
            let data = await checklist_model.itemDelete(req.params.checklistId, req.params.itemId);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
    
    async itemRename(req, res){
        try{
            let data = await checklist_model.itemRename(req.params.checklistId, req.params.itemId, req.body);
            res.status(200).json(data);
        } catch (err) {
            console.warn(err);
            res.status(500).json({"error": "Something went wrong"});
        }
    },
}