import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Divider from "@mui/material/Divider";

export default function ArticleSkeleton({ count = 5 }) {
  return (
    <Box>
      {Array.from({ length: count }).map((_, i) => (
        <Box key={i} sx={{ py: 2 }}>
          <Skeleton variant="text" width="80%" height={40} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="60%" height={20} sx={{ mb: 1 }} />
          {i < count - 1 && <Divider sx={{ mt: 2 }} />}
        </Box>
      ))}
    </Box>
  );
}
