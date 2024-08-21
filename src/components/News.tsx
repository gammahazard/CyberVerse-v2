// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Modal, Grid, Link } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const News = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsItems, setNewsItems] = useState([]);

  const API_URL = process.env.NEXT_PUBLIC_NEWS_API_URL;

  useEffect(() => {
    fetchNewsItems();
  }, []);

  const fetchNewsItems = async () => {
    try {
      const response = await fetch(`${API_URL}/news`);
      if (response.ok) {
        const data = await response.json();
        setNewsItems(data);
      } else {
        console.error('Failed to fetch news items');
      }
    } catch (error) {
      console.error('Error fetching news items:', error);
    }
  };

  const handleOpenModal = (news) => {
    setSelectedNews(news);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % newsItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + newsItems.length) % newsItems.length);
  };

  // Sort news items by datePublished in descending order (most recent first)
  const sortedNewsItems = newsItems.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());

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
                  height: '500px',
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
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <Typography variant="h5" component="div" gutterBottom>
                    {news.title}
                  </Typography>
                  <Typography variant="body2" component="div">
                    {news.content}
                  </Typography>
                  <Typography variant="caption" component="div" style={{ marginTop: '10px' }}>
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
            bgcolor: 'black',
            border: '1px solid #000',
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
              <Typography variant="h3" gutterBottom>
                {selectedNews.title}
              </Typography>
              <CardMedia
                component="img"
                image={selectedNews.imageUrl}
                alt={selectedNews.title}
                style={{ height: '300px', width: '100%', objectFit: 'cover', marginBottom: '20px' }}
              />
              <Typography variant="body1" gutterBottom>
                {selectedNews.content}
              </Typography>
              {selectedNews.tweetId && (
                <TwitterTweetEmbed tweetId={selectedNews.tweetId} />
              )}
              <Typography variant="caption" display="block" gutterBottom>
                {selectedNews.datePublished}
              </Typography>
              {selectedNews.tweetId && (
                <Link href={`https://x.com/CyberVerse_io/status/${selectedNews.tweetId}`} target="_blank" rel="noopener" underline="hover">
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