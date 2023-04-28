const { getPool } = require("../database");

module.exports = {
    async list(){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("select * from checklists");
            await  conn.commit();

            response = result;
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },
    
    async create(params){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("INSERT INTO checklists (name) value (?)", [params.name]);
            await  conn.commit();

            response = {
                "id": parseInt(result.insertId),
                "name": params.name
            }
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },
    
    async delete(id){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            await conn.query("delete from checklists where id = ?", [id]);
            await  conn.commit();

            response = {
                "id": id
            }
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },

    async itemList(checklistId){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("select * from checklist_items where checklist_id = ?", [checklistId]);
            await  conn.commit();

            response = result;
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },
    
    async itemCreate(checklistId, params){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("INSERT INTO checklist_items (checklist_id, name, status) value (?, ?, ?)", [checklistId, params.itemName, "OPEN"]);
            await  conn.commit();

            response = {
                "checklist_id": checklistId,
                "item_id": parseInt(result.insertId),
                "item_name": params.itemName
            }
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },

    async itemShow(checklistId, itemId){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("select * from checklist_items where checklist_id = ? and id = ?", [checklistId, itemId]);
            await  conn.commit();

            response = result[0];
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },

    async itemUpdateStatus(checklistId, itemId){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            await conn.query("update checklist_items set status = 'CLOSE' where checklist_id = ? and id = ?", [checklistId, itemId]);
            
            const result = await conn.query("select * from checklist_items where checklist_id = ? and id = ?", [checklistId, itemId]);
            await  conn.commit();

            response = result[0];
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },
    
    async itemDelete(checklistId, itemId){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("select * from checklist_items where checklist_id = ? and id = ?", [checklistId, itemId]);
            
            await conn.query("delete from checklist_items where checklist_id = ? and id = ?", [checklistId, itemId]);
            
            await  conn.commit();

            response = result[0];
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },
    
    async itemRename(checklistId, itemId, params){
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            await conn.query("update checklist_items set name = ? where checklist_id = ? and id = ?", [params.itemName, checklistId, itemId]);
            
            const result = await conn.query("select * from checklist_items where checklist_id = ? and id = ?", [checklistId, itemId]);
            await  conn.commit();

            response = result[0];
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },
}