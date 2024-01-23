import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "../components/Layout/Layout";
import MobileList from "../components/Layout/MobileList";
import { Container, Typography, Box, TextField, Button, Paper } from "@mui/material";
import "../styles/menustyles.css"; // Import stylesheet

const Menu = () => {
  const [mobiles, setMobiles] = useState(MenuList);
  const [searchTerm, setSearchTerm] = useState("");
  const [newMobileName, setNewMobileName] = useState("");
  const [newMobileImage, setNewMobileImage] = useState(null);

  const handleDelete = (name) => {
    const updatedMobiles = mobiles.filter((mobile) => mobile.name !== name);
    setMobiles(updatedMobiles);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredMobiles = MenuList.filter((mobile) =>
      mobile.name.toLowerCase().includes(term.toLowerCase())
    );
    setMobiles(filteredMobiles);
  };

  const handleAdd = () => {
    if (newMobileName.trim() === "" || newMobileImage === null) {
      return;
    }
    const newMobile = { name: newMobileName, image: newMobileImage };
    setMobiles([...mobiles, newMobile]);
    setNewMobileName("");
    setNewMobileImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewMobileImage(file);
  };

  return (
    <Layout>
      <Container className="container">
        <Typography variant="h4" className="title">
          Mobile Menu
        </Typography>
        <TextField
          className="search-input"
          label="Search by Name"
          variant="outlined"
          margin="normal"
          value={searchTerm}
          onChange={handleSearch}
        />
        <MobileList mobiles={mobiles} onDelete={handleDelete} className="mobile-list" />
        <Box className="add-mobile-section">
          <TextField
            className="new-mobile-input"
            label="New Mobile Name"
            variant="outlined"
            margin="normal"
            value={newMobileName}
            onChange={(e) => setNewMobileName(e.target.value)}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="image-upload"
            />
            <label htmlFor="image-upload" className="image-upload-label">
              <Button variant="contained" component="span" className="upload-button">
                Upload Image
              </Button>
            </label>
            {newMobileImage && (
              <Paper elevation={3} className="uploaded-image">
                <img src={URL.createObjectURL(newMobileImage)} alt="Uploaded" />
              </Paper>
            )}
            <Button variant="contained" className="add-mobile-button" onClick={handleAdd}>
              Add Mobile
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Menu;