import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import dateformater from "../../../utils/dateformater";

export default function NewsCategory({ data }) {
  console.log(data);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={`${data.title} image`}
        height="140"
        image={data.images[0]}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.tags.map((tag, index) => (
            <span key={index}>#{tag} </span>
          ))}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dateformater(data.publishedAt)}
        </Typography>
      </CardContent>
    </Card>
  );
}
