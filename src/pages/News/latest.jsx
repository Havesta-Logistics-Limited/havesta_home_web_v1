import { Box, Container } from "@mui/material";
import Heading from "./Heading";
import Faq from "../../common/faq/Faq";
import DownloadApp from "../Home/components/Hero/DownloadApp";
import NewsCard from "./NewsCard";
import { newsArticles } from "../../data/newsData";
const Latest = () => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Box marginY={8}>
          <Heading title="Latest News" Talign="left" x="0" PX="0" />
          {newsArticles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              summary={article.summary}
              image={article.image}
              link={article.link}
            />
          ))}
        </Box>
      </Container>
      <div className="font-primary bg-green-radial py-20 md:py-40">
        <Faq />
        <div className="mt-16 md:mt-32">
          <DownloadApp />
        </div>
      </div>
    </>
  );
};
export default Latest;
