"use client";
import { useEffect, useState } from "react";
import { Container, Typography, Box, Divider, Grid } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { BACKEND_ENDPOINT } from "@/constants/constants";
import NewsCategory from "@/app/components/NewsCategory";
import CategorySmallCard from "@/app/components/CategorySmallCard";

const CategoryIndexPage = () => {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const title = searchParams.get("title");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${BACKEND_ENDPOINT}/news/category?title=${title}`
      );
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (title) fetchData();
  }, [title]);

  return (
    <Box>
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          variant="h1"
          sx={{ mb: 2, mt: 2, textTransform: "Uppercase" }}
        >
          {title === "politics" && "Улс төр"}
          {title === "latest" && "Сүүлд нэмэгдсэн"}
          {title === "business" && "Бизнес"}
          {title === "economy" && "Эдийн засаг"}
          {title === "tech" && "Технологи"}
          {title === "markets" && "Санхүү ба зах зээл"}
          {title === "mining" && "Уул уурхай"}
        </Typography>
      </Box>
      <Divider />
      <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: 6 }}>
        <Box>
          <Grid size={12} container spacing={4}>
            {data &&
              data.length > 0 &&
              data.map((data, index) => {
                return (
                  <Grid size={{ xs: 12, md: 4 }} key={(`${data._id}`, index)}>
                    <NewsCategory data={data} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CategoryIndexPage;
