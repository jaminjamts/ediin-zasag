import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "next/link";

const analyses = Array.from({ length: 6 }).map((_, i) => ({
  title: `Шинжилгээ ${i + 1}: Бодлогын нөлөөлөл`,
  summary: "Эдийн засгийн бодлогын өөрчлөлтийн үр нөлөөг тайлбарлав.",
  href: "/",
}));

export default function AnalysisPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: 6 }}>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Нийтлэл
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box>
        {analyses.map((a, idx) => (
          <Box key={a.title} sx={{ py: 2 }}>
            <Typography
              component={Link}
              href={a.href}
              variant="h2"
              color="text.primary"
              sx={{ textDecoration: "none" }}
            >
              {a.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {a.summary}
            </Typography>
            {idx < analyses.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
