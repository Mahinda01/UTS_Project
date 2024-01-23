const express = require('express');
const router = express.Router();
const mobileController = require('../controllers'); // Update the path accordingly

// Create a new mobile
router.post('/mobiles', async (req, res) => {
  const { name, description, image } = req.body;
  try {
    const insertedId = await mobileController.createMobile(name, description, image);
    res.json({ id: insertedId, message: 'Mobile created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all mobiles
router.get('/mobiles', async (req, res) => {
  try {
    const mobiles = await mobileController.getMobiles();
    res.json(mobiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a mobile
router.put('/mobiles/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body;
  try {
    await mobileController.updateMobile(id, name, description, image);
    res.json({ id, message: 'Mobile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a mobile
router.delete('/mobiles/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await mobileController.deleteMobile(id);
    res.json({ id, message: 'Mobile deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;