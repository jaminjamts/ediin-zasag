import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ShareBar({ url, title }) {
  const encodedUrl = encodeURIComponent(url || "");
  const encodedTitle = encodeURIComponent(title || "");

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Tooltip title="Share">
        <IconButton
          aria-label="share"
          onClick={() => navigator.share?.({ url, title }).catch(() => {})}
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Post to X">
        <IconButton
          aria-label="x"
          component="a"
          href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Facebook">
        <IconButton
          aria-label="facebook"
          component="a"
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
