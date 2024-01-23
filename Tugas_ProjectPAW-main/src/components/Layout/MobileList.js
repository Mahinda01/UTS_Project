import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const MobileList = ({ mobiles, onDelete }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {mobiles.map((mobile) => (
        <Card key={mobile.name} style={{ maxWidth: "300px", margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={mobile.name}
              height="200"
              image={mobile.image}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {mobile.name}
              </Typography>
              <Typography variant="body2">{mobile.description}</Typography>
            </CardContent>
          </CardActionArea>
          <div style={{ textAlign: "center", padding: "10px" }}>
            <button onClick={() => onDelete(mobile.name)}>Delete</button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MobileList;