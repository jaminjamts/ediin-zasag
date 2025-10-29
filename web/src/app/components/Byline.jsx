import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Byline({ author, date }) {
  return (
    <Box sx={{ color: "text.secondary" }}>
      <Typography variant="body2">
        {author ? `By ${author}` : null}
        {author && date ? " · " : null}
        {date || null}
      </Typography>
    </Box>
  );
}
