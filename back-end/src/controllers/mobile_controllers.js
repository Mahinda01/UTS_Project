// mobile_controller.js

const db = require("../database/database_connection");

async function addMobile(req, res) {
  try {
    const { name, image } = req.body;
    
    // Assuming you have a 'mobiles' table in your database
    const [result] = await db.execute("INSERT INTO mobiles (name, image) VALUES (?, ?)", [name, image]);

    // The 'result' object may contain information about the inserted row
    const insertedMobileId = result.insertId;

    res.status(201).json({ id: insertedMobileId, message: "Mobile added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getAllMobiles(req, res) {
  try {
    const [mobiles] = await db.query("SELECT * FROM mobiles");
    res.status(200).json(mobiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteMobile(req, res) {
  try {
    const { id } = req.params;
    await db.execute("DELETE FROM mobiles WHERE id = ?", [id]);
    res.status(200).json({ message: "Mobile deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { addMobile, getAllMobiles, deleteMobile };
