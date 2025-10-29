"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const pages = [
  { title: "Сүүлд нэмэгдсэн", route: "news/category?title=latest" },
  { title: "Бизнес", route: "news/category?title=business" },
  { title: "Улс төр", route: "news/category?title=politics" },
  { title: "Эдийн засаг", route: "news/category?title=economy" },
  { title: "Технологи", route: "news/category?title=tech" },
  { title: "Санхүү ба зах зээл", route: "news/category?title=markets" },
  { title: "Уул уурхай", route: "news/category?title=mining" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isActiveRoute = (route) => {
    const [path, query] = route.split("?");

    if (pathname !== `/${path}`) return false;

    if (query) {
      const [key, value] = query.split("=");
      return searchParams.get(key) === value;
    }

    return true;
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      component="header"
      role="banner"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          component="nav"
          role="navigation"
          aria-label="Main navigation"
          disableGutters
          sx={{
            flexDirection: "column",
            alignItems: "stretch",
            gap: 1.5,
            py: 1.5,
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 1,
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8,
                    transition: "opacity 0.2s ease-in-out",
                  },
                }}
              >
                Эдийн засаг
              </Typography>
            </Link>
          </Box>

          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-expanded={Boolean(anchorElNav)}
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              MenuListProps={{
                "aria-labelledby": "menu-appbar",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={`menu-${page.title}`}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={`/${page.route}`}
                  aria-current={isActiveRoute(page.route) ? "page" : undefined}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="ul"
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              justifyContent: "center",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {pages.map((page) => (
              <Box component="li" key={`desktop-${page.title}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "text.primary",
                    fontWeight: isActiveRoute(page.route) ? 600 : 400,
                    textDecoration: isActiveRoute(page.route)
                      ? "underline"
                      : "none",
                    "&:hover": {
                      backgroundColor: "action.hover",
                      textDecoration: "underline",
                    },
                  }}
                  component={Link}
                  href={`/${page.route}`}
                  aria-current={isActiveRoute(page.route) ? "page" : undefined}
                >
                  {page.title}
                </Button>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
