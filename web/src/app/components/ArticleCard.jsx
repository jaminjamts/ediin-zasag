import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function ArticleCard({ title, summary, href }) {
  return (
    <Card elevation={0} sx={{ bgcolor: "background.paper", height: "100%" }}>
      <CardActionArea component={Link} href={href} sx={{ height: "100%" }}>
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            {title}
          </Typography>
          {summary ? (
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
