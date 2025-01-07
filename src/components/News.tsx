// @ts-ignore
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Modal, Grid, Link } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import newsData from '@/data/news.json';

// Define the type for news items
interface NewsItem {
  id: number;
  title: string;
  content: string;
  datePublished: string;
  imageUrl: string;
  tweetId?: string;
}

const News = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = (news: NewsItem) => {
    setSelectedNews(news);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Sort news items by datePublished in descending order (most recent first)
  const sortedNewsItems = newsData.newsItems.sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % sortedNewsItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + sortedNewsItems.length) % sortedNewsItems.length);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      my={4}
      px={2}
      gap={4}
      sx={{ marginTop: "15rem"}}
    >
      <Typography
        variant="h2"
        gutterBottom
        align="center"
        style={{
          color: '#E1EBFA',
          fontSize: '3rem',
          fontWeight: 700,
        }}
      >
        CyberVerse News
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap={2}
      >
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon style={{ color: '#E1EBFA' }} />
        </IconButton>
        <Grid container spacing={2} justifyContent="center">
          {sortedNewsItems.slice(currentIndex, currentIndex + 3).map((news) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
              <Card
                style={{
                  flex: 1,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '450px',
                  backgroundColor: '#1A1B1F',
                  color: '#E1EBFA',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
                onClick={() => handleOpenModal(news)}
              >
                <CardMedia
                  component="img"
                  image={news.imageUrl}
                  alt={news.title}
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                />
                <CardContent
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px',
                    height: '100%'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="div" 
                    style={{
                      fontWeight: 600,
                      marginBottom: '16px',
                      fontSize: '1.4rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {news.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    component="div"
                    style={{
                      flex: 1,
                      fontSize: '1rem',
                      lineHeight: '1.5',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {news.content}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    component="div" 
                    style={{ 
                      marginTop: 'auto',
                      color: '#9BA4B5',
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}
                  >
                    {news.datePublished}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon style={{ color: '#E1EBFA' }} />
        </IconButton>
      </Box>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#1A1B1F',
            color: '#E1EBFA',
            border: '1px solid #2A2B2F',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
            width: '80vw',
            maxWidth: '800px',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          {selectedNews && (
            <>
              <Typography 
                variant="h3" 
                gutterBottom
                style={{
                  fontWeight: 600,
                  fontSize: '2rem',
                  marginBottom: '20px'
                }}
              >
                {selectedNews.title}
              </Typography>
              <CardMedia
                component="img"
                image={selectedNews.imageUrl}
                alt={selectedNews.title}
                style={{ height: '300px', width: '100%', objectFit: 'cover', marginBottom: '20px' }}
              />
              <Typography 
                variant="body1" 
                gutterBottom
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}
              >
                {selectedNews.content}
              </Typography>
              {selectedNews.tweetId && (
                <TwitterTweetEmbed tweetId={selectedNews.tweetId} />
              )}
              <Typography 
                variant="body2" 
                style={{ 
                  color: '#9BA4B5',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  marginTop: '20px'
                }}
              >
                {selectedNews.datePublished}
              </Typography>
              {selectedNews.tweetId && (
                <Link 
                  href={`https://x.com/CyberVerse_io/status/${selectedNews.tweetId}`} 
                  target="_blank" 
                  rel="noopener" 
                  sx={{
                    color: '#4A9EFF',
                    textDecoration: 'none',
                    marginTop: '10px',
                    display: 'inline-block',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  View Tweet
                </Link>
              )}
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default News;