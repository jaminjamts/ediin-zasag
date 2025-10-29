"use client";
import { BACKEND_ENDPOINT } from "@/constants/constants";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { decryptFromBackend } from "../../../../../utils/security";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const id = useParams().id;
  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/news/${id}`);
      const data = await response.json();

      const decryptedData = decryptFromBackend(data.iv, data.encryptedData);
      const a = JSON.parse(decryptedData);

      setData(a);
    } catch (error) {
      console.error("Error fetching news item:", error);
      return null;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={4}
      my={4}
      minHeight={"80vh"}
    >
      {data && (
        <Container maxWidth="sm">
          <Box mb={4} display={"flex"} gap={2}>
            <Link
              href={`category?title=${data?.category?.title}`}
              sx={{ textTransform: "Uppercase" }}
            >
              {data?.category?.title}
            </Link>
            <Box display={"flex"} gap={2}>
              {data.tags &&
                data?.tags?.map((tag, index) => {
                  return <Typography key={index}>#{tag}</Typography>;
                })}
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            <Typography variant="h1">{data?.title}</Typography>
            <Typography variant="h3">{data?.summary}</Typography>
            {/* <Image
        src={data.images[0]}
        onLoad={() => setLoad(false)}
        alt={data?.title}
        width={600}
        height={400}
        /> */}
            <Typography variant="body2">{data?.content}</Typography>
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default page;
