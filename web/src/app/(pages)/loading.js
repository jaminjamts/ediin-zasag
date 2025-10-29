import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";

export default function PagesLoading() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: 6 }}>
      <Skeleton variant="text" width="200px" height={60} sx={{ mb: 2 }} />
      <Skeleton variant="rectangular" height={2} sx={{ mb: 3 }} />

      {Array.from({ length: 5 }).map((_, i) => (
        <Box key={i} sx={{ py: 2 }}>
          <Skeleton variant="text" width="80%" height={40} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="rectangular" height={1} sx={{ mt: 2 }} />
        </Box>
      ))}
    </Container>
  );
}
