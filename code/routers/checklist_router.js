const express = require("express");
const router = express.Router();

const checklist_controller = require("../controllers/checklist_controller");

router.get("/", checklist_controller.list);
router.post("/", checklist_controller.create);
router.delete("/:id", checklist_controller.delete);

router.get("/:checklistId/item", checklist_controller.itemList);
router.post("/:checklistId/item", checklist_controller.itemCreate);
router.get("/:checklistId/item/:itemId", checklist_controller.itemShow);
router.put("/:checklistId/item/:itemId", checklist_controller.itemUpdateStatus);
router.delete("/:checklistId/item/:itemId", checklist_controller.itemDelete);
router.put("/:checklistId/item/rename/:itemId", checklist_controller.itemRename);

module.exports = router;