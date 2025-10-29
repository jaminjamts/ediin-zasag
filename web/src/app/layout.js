import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import theme from "@/theme";

export const metadata = {
  title: {
    default: "Эдийн засаг - Эдийн засгийн мэдээ, шинжилгээ, хичээл",
    template: "%s | Эдийн засаг",
  },
  description:
    "Эдийн засгийн мэдээ, шинжилгээ, хичээл. Монголын эдийн засгийн хөгжлийн тухай мэдээлэл.",
  keywords: [
    "эдийн засаг",
    "мэдээ",
    "шинжилгээ",
    "хичээл",
    "монгол",
    "эдийн засгийн хөгжил",
  ],
  authors: [{ name: "Эдийн засаг" }],
  creator: "Эдийн засаг",
  publisher: "Эдийн засаг",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    url: "https://edzasaag.mn",
    siteName: "Эдийн засаг",
    title: "Эдийн засаг - Эдийн засгийн мэдээ, шинжилгээ, хичээл",
    description:
      "Эдийн засгийн мэдээ, шинжилгээ, хичээл. Монголын эдийн засгийн хөгжлийн тухай мэдээлэл.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Эдийн засаг - Эдийн засгийн мэдээ, шинжилгээ, хичээл",
    description:
      "Эдийн засгийн мэдээ, шинжилгээ, хичээл. Монголын эдийн засгийн хөгжлийн тухай мэдээлэл.",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout(props) {
  return (
    <html lang="mn">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ediinzasag.mn" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Box component="main" sx={{ flex: 1 }}>
                {props.children}
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
