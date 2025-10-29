import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Lessoncard = ({ lesson }) => {
  return (
    <>
      <Typography
        component="a"
        target="_blank"
        href={lesson.lesson_url}
        sx={{
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        {lesson.name}
      </Typography>
    </>
  );
};

export default Lessoncard;
