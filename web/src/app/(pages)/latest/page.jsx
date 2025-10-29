"use client";
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const LatestPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: 6 }}>
      <Box>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Сүүлд нэмэгдсэн
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Сүүлд нэмэгдсэн мэдээ, нийтлэлүүд энд харагдана.
        </Typography>
      </Box>
    </Container>
  );
};

export default LatestPage;

