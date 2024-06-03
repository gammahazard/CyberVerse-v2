import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Card, CardContent, Divider } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { posts, Post } from '../utils/posts'; // Adjust the import path based on your project structure

const PatchPage = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleClick = (post: Post) => {
    setSelectedPost(post);
  };

  return (
    <Box>
      <Navbar />

      <Typography variant="h1" sx={{ textAlign: 'center', margin: '2rem 0' }}>Patch Notes</Typography>
      <Box sx={{ display: 'flex' }}>
        <List sx={{ width: '25%', padding: '1rem' }}>
          {posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).map((post) => (
            <ListItem
              button
              key={post.id}
              onClick={() => handleClick(post)}
              sx={{
                '&:hover': {
                  backgroundColor: 'lightgray',
                },
                '&:hover .MuiListItemText-primary': {
                  color: 'blue',
                },
                transition: 'background-color 0.3s, color 0.3s',
              }}
            >
              <ListItemText
                primary={new Date(post.publishDate).toLocaleDateString()}
                primaryTypographyProps={{
                  variant: 'h6',
                  sx: { fontSize: '1.2rem' },
                }}
              />
            </ListItem>
          ))}
        </List>
        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2, borderColor: 'grey.500' }} />
        <Box sx={{ width: '70%', padding: '1rem' }}>
          {selectedPost ? (
            <Card
              sx={{
                margin: '1rem 0',
                boxShadow: 3,
                width: '100%',
                maxWidth: '100%',
              }}
            >
              <CardContent sx={{ padding: { xs: '1rem', sm: '1.5rem' } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '2rem' },
                    marginBottom: '0.5rem'
                  }}
                >
                  {selectedPost.title}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>{selectedPost.excerpt}</Typography>
                <Typography variant="caption">Published on: {new Date(selectedPost.publishDate).toLocaleDateString()}</Typography>
                <Box mt={2}>
                  {selectedPost.component && <selectedPost.component />}
                </Box>
              </CardContent>
            </Card>
          ) : (
            <Typography variant="h6" sx={{ textAlign: 'center', margin: '2rem 0' }}>
              Select a publish date to view the patch notes.
            </Typography>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default PatchPage;
