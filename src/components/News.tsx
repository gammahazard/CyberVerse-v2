import { Box, Typography, Card, CardContent, Modal } from '@mui/material';
import { useState } from 'react';

// Define the type for news items
interface NewsItem {
  id: number;
  title: string;
  content: string;
  datePublished: string;
}

const News = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null); // Specify the type here

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
    },
    {
      id: 2,
      title: 'New CyberVerse Update Released',
      content: 'Sed euismod tincidunt felis, nec volutpat nisl ultricies eu. Nullam at ligula quis sapien consectetur euismod.',
      datePublished: 'June 5, 2024',
    },
    {
      id: 3,
      title: 'CyberVerse Community Event',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      datePublished: 'June 12, 2024',
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      my={4}
      px={4}
      gap={4}
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
      <Box display="flex" justifyContent="space-between" gap={4}>
        {newsItems.map((news) => (
          <Card key={news.id} style={{ flex: 1, cursor: 'pointer' }} onClick={() => handleOpenModal(news)}>
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
        ))}
      </Box>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'transparent',
            border:'1px solid white',
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
