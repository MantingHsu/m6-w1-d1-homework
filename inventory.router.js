const express = require("express");
const router = express.Router();
const controller = require("./inventory.controller");

router.post("/api/inventory", controller.createInventory);
router.get("/api/inventory/:id", controller.getInventory);
router.get("/api/inventories", controller.inventories);
router.put("/api/inventory", controller.updateInventory);
router.delete("/api/inventory/:id", controller.deleteInventory);

module.exports = router;
