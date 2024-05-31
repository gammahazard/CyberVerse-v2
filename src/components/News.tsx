// @ts-ignore
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Modal, Grid } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Define the type for news items
interface NewsItem {
  id: number;
  title: string;
  content: string;
  datePublished: string;
  imageUrl: string;
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

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'CYPX hits new high',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut hendrerit velit.',
      datePublished: 'May 31, 2024',
      imageUrl: '/gen2.png',
    },
    {
      id: 2,
      title: 'New CyberVerse Update Released',
      content: 'Sed euismod tincidunt felis, nec volutpat nisl ultricies eu. Nullam at ligula quis sapien consectetur euismod.',
      datePublished: 'June 5, 2024',
      imageUrl: '/gen2.png',
    },
    {
      id: 3,
      title: 'CyberVerse Community Event',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      datePublished: 'June 12, 2024',
      imageUrl: '/gen2.png',
    },
    {
      id: 4,
      title: 'CyberVerse Partners with XYZ',
      content: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh.',
      datePublished: 'June 20, 2024',
      imageUrl: '/gen3.png',
    },
    {
      id: 5,
      title: 'New Features Coming Soon',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut hendrerit velit.',
      datePublished: 'June 25, 2024',
      imageUrl: '/gen3.png',
    },
    {
      id: 6,
      title: 'Join the CyberVerse Tournament',
      content: 'Sed euismod tincidunt felis, nec volutpat nisl ultricies eu. Nullam at ligula quis sapien consectetur euismod.',
      datePublished: 'June 30, 2024',
      imageUrl: '/gen3.png',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % newsItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + newsItems.length) % newsItems.length);
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
      sx={{         marginTop: "5rem"}}
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
          {newsItems.slice(currentIndex, currentIndex + 3).map((news) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
              <Card
                style={{
                  flex: 1,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
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
                <CardContent>
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
            bgcolor: 'background.paper',
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
              <Typography variant="body1" gutterBottom>
                {selectedNews.content}
              </Typography>
              <Typography variant="caption">{selectedNews.datePublished}</Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default News;
