import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function LeadStory({ title, summary, href }) {
  return (
    <Card elevation={0} sx={{ bgcolor: "background.paper" }}>
      <CardActionArea component={Link} href={href}>
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Typography variant="h1" sx={{ mb: 1.5 }}>
            {title}
          </Typography>
          {summary ? (
            <Typography variant="body1" color="text.secondary">
              {summary}
            </Typography>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
