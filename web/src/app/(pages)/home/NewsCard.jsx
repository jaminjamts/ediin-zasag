"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/theme";

const NewsCard = ({ data }) => {
  console.log(data);

  const wordCount = data?.title ? data.title.trim().split(/\s+/).length : 0;

  return (
    <Box
      component="a"
      href={`news/${data.slug}`}
      sx={{
        textDecoration: "none",
        display: "block",
        color: theme.palette.primary.main,
      }}
    >
      <Typography variant={wordCount > 8 ? "h5" : "h4"}>
        {data.title}
      </Typography>
      <Typography variant="body">{data.summary}</Typography>
    </Box>
  );
};

export default NewsCard;
