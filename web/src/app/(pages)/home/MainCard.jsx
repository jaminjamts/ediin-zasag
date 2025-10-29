"use client";

import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Skeleton } from "@mui/material";

export default function MainCard({ data }) {
  console.log(data);

  const [loading, setLoading] = useState(true);

  return (
    <Box>
      {loading && (
        <Skeleton variant="rectangular" height={300} animation="wave" />
      )}
      {
        <>
          <CardMedia
            component="img"
            sx={{ height: 300, display: loading ? "none" : "block" }}
            image={data.image_url}
            alt={data.title + " image"}
            onLoad={() => setLoading(false)}
          />
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {data.summary}
            </Typography>
          </Box>
        </>
      }
    </Box>
  );
}
