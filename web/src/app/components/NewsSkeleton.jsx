import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function NewsSkeleton({ count = 5 }) {
  return (
    <Box>
      {Array.from({ length: count }, (_, index) => (
        <Box sx={{ mb: 2 }} key={`news-skeleton-${index}`}>
          <Skeleton
            variant="text"
            width="90%"
            height={36}
            sx={{ mb: 1 }}
            animation="wave"
          />

          <Skeleton
            variant="text"
            width="95%"
            height={20}
            sx={{ mb: 0.5 }}
            animation="wave"
          />
          <Skeleton variant="text" width="80%" height={20} animation="wave" />
        </Box>
      ))}
    </Box>
  );
}
