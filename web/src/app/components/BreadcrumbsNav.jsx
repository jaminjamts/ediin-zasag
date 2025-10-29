import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function BreadcrumbsNav({ items }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, idx) =>
        item.href && idx < items.length - 1 ? (
          <Link
            key={item.label + idx}
            href={item.href}
            style={{ textDecoration: "none" }}
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={item.label + idx} color="text.primary">
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
