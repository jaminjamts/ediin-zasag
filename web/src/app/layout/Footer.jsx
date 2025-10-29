import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { title: "Хичээл", href: "/lesson" },
      { title: "Нийтлэл", href: "/analysis" },
      { title: "Мэдээ", href: "/news" },
    ],
    about: [
      { title: "Бидний тухай", href: "/about" },
      { title: "Холбоо барих", href: "/contact" },
      { title: "Тусламж", href: "/help" },
    ],
    legal: [
      { title: "Нууцлалын бодлого", href: "/privacy" },
      { title: "Үйлчилгээний нөхцөл", href: "/terms" },
    ],
  };

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
        mt: "auto",
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Main Navigation */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Холбоос
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.main.map((link) => (
                <Box component="li" key={link.title} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          color: "primary.main",
                        },
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* About Section */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Мэдээлэл
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.about.map((link) => (
                <Box component="li" key={link.title} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          color: "primary.main",
                        },
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Legal Section */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Хууль ёс
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.legal.map((link) => (
                <Box component="li" key={link.title} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          color: "primary.main",
                        },
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Холбоо барих
            </Typography>
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                И-мэйл: info@edzasaag.mn
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Утас: +976 11 123 456
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Хаяг: Улаанбаатар хот
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Эдийн засаг. Бүх эрх хуулиар хамгаалагдсан.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Эдийн засгийн мэдээ, шинжилгээ, хичээл
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
