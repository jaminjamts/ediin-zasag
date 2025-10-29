import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "next/link";

export default function StoryListItem({
  title,
  href,
  summary,
  showDivider = true,
}) {
  return (
    <Box>
      <Box sx={{ py: 1.5 }}>
        <Typography
          component={Link}
          href={href}
          color="text.primary"
          sx={{
            textDecoration: "none",
            fontWeight: 500,
            display: "inline-block",
          }}
        >
          {title}
        </Typography>
        {summary ? (
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        ) : null}
      </Box>
      {showDivider && <Divider />}
    </Box>
  );
}
