// @ts-ignore
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DiscoverWorldCyberverse = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '10px', sm: '20px' } }}>
      <Typography variant="h1" sx={{ marginBottom: '20px', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
        Discover the World of CyberVerse
      </Typography>
      <Image
        src="https://static.wikia.nocookie.net/cyberverse/images/a/af/Minttank.png/revision/latest/scale-to-width-down/185?cb=20240225081927"
        alt="Discover the World of CyberVerse"
         width={400}
        height={233}
        style={{ borderRadius: '8px', marginBottom: '20px', width: '100%', height: 'auto' }}
      />
      <Box
        className="article-container"
        sx={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          borderRadius: '8px',
          textAlign: 'left',
        }}
      >

        <Typography variant="h3" sx={{ color: '#03a9f4', marginTop: '20px' }}>Introduction</Typography>
        <Typography variant="body1">
          CyberVerse is a vast and immersive world built on the Ergo Blockchain. Explore the possibilities and start
          your adventure today! In this post, we delve into the features, gameplay mechanics, and the vibrant community
          that makes CyberVerse a unique gaming experience.
        </Typography>

        <Typography variant="h3" sx={{ color: '#03a9f4', margin: '20px 0' }}>Features</Typography>
        <Typography variant="body1">
          CyberVerse offers a range of exciting features including:
        </Typography>
        <Box component="ul" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Blockchain Integration</li>
          <li>NFT-powered Gameplay</li>
          <li>Dynamic In-Game Economy</li>
          <li>Extensive Real Estate Options</li>
          <li>Immersive Job System</li>
          <li>Exclusive Club Access</li>
        </Box>

        <Typography variant="h3" sx={{ color: '#03a9f4', margin: '20px 0' }}>Getting Started</Typography>
        <Typography variant="body1">
          To get started in CyberVerse, follow these steps:
        </Typography>
        <Box component="ol" sx={{ listStyleType: 'none', margin: '0', padding: '0 0 0 20px' }}>
          <li>Download the wallet</li>
          <li>Set up your wallet</li>
          <li>Mint a CyberCitizen NFT</li>
          <li>Connect and play</li>
        </Box>

        <Typography variant="body1" sx={{ marginTop: '20px' }}>Embark on your journey in CyberVerse today!</Typography>
      </Box>
    </Box>
  );
};

export default DiscoverWorldCyberverse;
