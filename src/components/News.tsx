// @ts-ignore
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Modal, Grid, Link } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TwitterTweetEmbed } from 'react-twitter-embed';

// Define the type for news items
interface NewsItem {
  id: number;
  title: string;
  content: string;
  datePublished: string;
  imageUrl: string;
  tweetId?: string; // Optional field for tweet ID
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
      title: 'CyberVerse Town Hall Announcement!',
      content: 'Join @kilver_erg and @sisyphuspush for our community town hall on coming up on Sunday June 2nd!',
      datePublished: 'May 31, 2024',
      imageUrl: '/townhall.jpg',
      tweetId: '1796294872074457352'
    },
    {
      id: 2,
      title: 'CyberVerse x House of Titans partnership announced!',
      content: `We're excited to announce our partnership with House of Titans! 

House of Titans is a digital collectibles project with a utility-driven, gamification-focused approach on the Cardano blockchain!`,
      datePublished: 'May 31, 2024',
      imageUrl: '/titan-cyberverse.png',
      tweetId: '1794383208554877128', // ID of the tweet to embed
    },
    {
      id: 3,
      title: 'CyberVerse x Omen partnership announced!',
      content: `In the coming weeks, we'll be bringing Omen into CyberVerse! Omen is a self sustaining ecosystem on Cardano. http://nemonium.com/`,
      datePublished: 'May 14, 2024',
      imageUrl: '/omen-cyberverse.jpg',
      tweetId: '1790505806783185370', // ID of the tweet to embed
    },

    {
      id: 4,
      title: 'Community market surpasses 5 million $CYPX trading volume!',
      content: `Our community market has surpassed the 5,000,000 $CYPX in trading volume, which is equivalent to 6.2k Ergo at current CYPX price! Thanks to everyone for supporting CyberVerse, and let's keep the momentum going!`,
      datePublished: 'May 22, 2024',
      imageUrl: '/marketplace-volume.jpg',
      tweetId: '1793301080761385145', // ID of the tweet to embed
    },
 
    {
      id: 5,
      title: 'Rising Player Counts',
      content: 'Our daily average number of active players is showing an upward trend, we are now averaging between 60-70 active players online every day!',
      datePublished: 'May 28, 2024',
      imageUrl: '/player-count.jpg',
      tweetId: '1795539702898163735'
    },
    {
      id: 6,
      title: 'CyberVerse Wiki Website Announced',
      content: 'The CyberVerse Wiki now has its own website, found at cyberversewiki.com! special thanks to @lexim0n',
      datePublished: 'May 28, 2024',
      imageUrl: '/wiki.png',
      tweetId: '1795414078510223496'
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
