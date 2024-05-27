import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';
import { posts } from '../utils/posts'; // Adjust the import path based on your project structure

const PatchPage = () => {
  return (
    <Box>
      <Navbar />
      <Typography variant="h1">Patch Notes</Typography>
      {posts.map((post) => (
        <div key={post.id}>
          <Typography variant="h2">{post.title}</Typography>
          <Typography variant="body1">{post.excerpt}</Typography>
          <Typography variant="caption">Published on: {new Date(post.publishDate).toLocaleDateString()}</Typography>
          {/* Add more details as needed */}
        </div>
      ))}
      <Footer onRoadmapClick={() => {}} />
    </Box>
  );
};

export default PatchPage;
