import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { posts } from '../utils/posts'; // Adjust the import path based on your project structure

const PatchPage = () => {
  return (
    <Box>
      <Navbar />
      <Typography variant="h1">Patch Notes</Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {posts.map((post) => (
          <Card key={post.id} style={{ width: 300, margin: 10 }}>
            <CardContent>
              <Typography variant="h2">{post.title}</Typography>
              <Typography variant="body1">{post.excerpt}</Typography>
              <Typography variant="caption">Published on: {new Date(post.publishDate).toLocaleDateString()}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Footer onRoadmapClick={() => {}} />
    </Box>
  );
};

export default PatchPage;
