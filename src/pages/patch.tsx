import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
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

      <Typography variant="h1" sx={{ textAlign: 'center', margin: '2rem 0' }}>Patch Notes</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {posts.map((post) => (
          <Card 
            key={post.id} 
            onClick={() => handleClick(post.href)} 
            sx={{ 
              margin: '1rem', 
              cursor: 'pointer', 
              width: { xs: '100%', sm: '45%', md: '30%' },
              maxWidth: { xs: '100%', sm: '45%', md: '30%' },
              boxShadow: 3
            }}
          >
            <CardMedia 
              component="img" 
              height="140" 
              image={post.image} 
              alt={post.title} 
              sx={{ 
                height: { xs: 120, sm: 140 },
                objectFit: 'cover'
              }} 
            />
            <CardContent sx={{ padding: { xs: '1rem', sm: '1.5rem' } }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                  marginBottom: '0.5rem'
                }}
              >
                {post.title}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>{post.excerpt}</Typography>
              <Typography variant="caption">Published on: {new Date(post.publishDate).toLocaleDateString()}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default PatchPage;
