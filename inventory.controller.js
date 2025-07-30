const Inventory = require("./inventory.model");

exports.createInventory = async (req, res) => {
  try {
    const inv = new Inventory(req.body);
    await inv.save();
    res.status(200).send("Inventory added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getInventory = async (req, res) => {
  try {
    const inv = await Inventory.findById(req.params.id);
    res.json(inv);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.inventories = async (req, res) => {
  try {
    const invs = await Inventory.find();
    res.json(invs);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateInventory = async (req, res) => {
  try {
    await Inventory.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).send("Inventory updated");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    await Inventory.findByIdAndRemove(req.params.id);
    res.status(200).send("Inventory deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
