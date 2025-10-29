import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import StoryListItem from "./StoryListItem";

export default function SectionList({ title, items }) {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 2 }}>
      {title ? (
        <Typography variant="h3" sx={{ mb: 1.5 }}>
          {title}
        </Typography>
      ) : null}
      <Divider />
      {items.map((item, idx) => (
        <StoryListItem
          key={item.title + idx}
          title={item.title}
          href={item.href}
          summary={item.summary}
          showDivider={idx < items.length - 1}
        />
      ))}
    </Box>
  );
}
