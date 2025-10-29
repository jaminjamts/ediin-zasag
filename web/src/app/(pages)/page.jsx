"use client";
import { useEffect, useState } from "react";

import {
  Grid,
  Stack,
  Divider,
  Box,
  Container,
  Skeleton,
  CardContent,
} from "@mui/material";

import {
  BACKEND_ENDPOINT,
  GNEWS_API_KEY,
  mockLessons,
  NEWSDATA_API_KEY,
} from "@/constants/constants";
import Lessoncard from "./home/LessonCard";
import NewsCard from "./home/NewsCard";
import NewsSkeleton from "../components/NewsSkeleton";
import ArticleSkeleton from "../components/ArticleSkeleton";
import MainCard from "./home/MainCard";
import { decryptFromBackend } from "../../../utils/security";

export default function Home() {
  const [datas, setDatas] = useState([]);

  const [loading, setLoading] = useState(true);
  const fetchdata = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/news`);
      const data = await response.json();
      const decryptedData = decryptFromBackend(data.iv, data.encryptedData);
      const a = JSON.parse(decryptedData);
      setDatas(a);

      setLoading(false);
    } catch {
      setLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <Box my={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 9 }}>
            {/*  */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                {loading ? (
                  <NewsSkeleton />
                ) : (
                  <Stack divider={<Divider />} spacing={2}>
                    {datas &&
                      datas.length > 0 &&
                      datas.map((data, index) => {
                        return (
                          <Box key={`news card ${index}`}>
                            <NewsCard data={data} />
                          </Box>
                        );
                      })}
                  </Stack>
                )}
              </Grid>
              <Grid size={{ xs: 12, sm: 8, md: 8 }}>
                {loading ? (
                  <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
                    <Skeleton
                      variant="rectangular"
                      height={300}
                      animation="wave"
                    />

                    {/* Text placeholders */}
                    <CardContent>
                      <Skeleton
                        variant="text"
                        width="80%"
                        height={32}
                        sx={{ mb: 1 }}
                      />
                      <Skeleton
                        variant="text"
                        width="90%"
                        height={20}
                        sx={{ mb: 0.5 }}
                      />
                      <Skeleton
                        variant="text"
                        width="85%"
                        height={20}
                        sx={{ mb: 0.5 }}
                      />
                      <Skeleton variant="text" width="70%" height={20} />
                    </CardContent>
                  </Box>
                ) : (
                  <Stack divider={<Divider />}>
                    {datas &&
                      datas.length > 0 &&
                      datas.map((data, index) => {
                        return (
                          <Box key={`main_card_${index}`}>
                            <MainCard data={data} />
                          </Box>
                        );
                      })}
                  </Stack>
                )}
              </Grid>
            </Grid>
          </Grid>
          {/*  */}
          <Grid size={{ xs: 12, sm: 12, md: 3 }}>
            Хичээл
            <Stack direction={"column"} spacing={1} divider={<Divider />}>
              {loading ? (
                <ArticleSkeleton />
              ) : (
                mockLessons.map((lesson) => (
                  <Box key={lesson.id}>
                    <Lessoncard lesson={lesson} />
                  </Box>
                ))
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
