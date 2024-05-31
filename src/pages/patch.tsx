import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { posts } from '../utils/posts'; // Adjust the import path based on your project structure
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PatchPage = () => {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(`/posts/${href}`);
  };

  return (
    <Box>
      <Navbar />

      <Typography variant="h1">Patch Notes</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {posts.map((post) => (
          <Card key={post.id} onClick={() => handleClick(post.href)} style={{ margin: '1rem', cursor: 'pointer', width: '30%' }}>
            <CardMedia component="img" height="140" image={post.image} alt={post.title} />
            <CardContent>
              <Typography variant="h2">{post.title}</Typography>
              <Typography variant="body1">{post.excerpt}</Typography>
              <Typography variant="caption">Published on: {new Date(post.publishDate).toLocaleDateString()}</Typography>
              {/* Add more details as needed */}
            </CardContent>
          </Card>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default PatchPage;
