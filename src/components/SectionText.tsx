// @ts-ignore
import { Box, Typography, Button, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
const SectionText = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();
  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', md: 'row' }} 
      alignItems="center" 
      justifyContent="space-between" 
      fontFamily="pixelFont"
      my={4} 
      px={4}
      gap={4}
    >
      <Box flex={1} p={2}>
        <Typography 
          variant="h2" 
          gutterBottom 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: '3rem',
            fontWeight: 700,
          }}
        >
          CYBERVERSE
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          align="left"
          style={{
            color: '#E1EBFA',
            fontSize: '1.2rem',
            lineHeight: '1.5',
            marginBottom: '20px',
          }}
        >
          CyberVerse is a free-to-play, pixel-based MMORPG currently available in beta on both the Ergo and Cardano blockchains. Players can explore Cyberia city, engage in a variety of mini-games, and earn CYPX.
        </Typography>
        <Box display="flex" gap={2}>
            <Button 
            variant="contained"
            onClick={() => window.open('https://playcyberverse.com', '_blank', 'noopener,noreferrer')}
            style={{
              backgroundColor: '#FF00FC',
              color: '#E1EBFA',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '26px',
              width: '50%', 
              height: '60px',
              marginRight: '20px',
              outline: 'none',
            }}
          >
            PLAY FOR FREE
          </Button>
          <Button 
  onClick={() => window.open('https://cyberversewiki.com/index.html', '_blank', 'noopener,noreferrer')}
  variant="outlined"
  sx={{
    borderColor: '#FF00FC',
    color: '#FF00FC',
    fontSize: '20px',
    fontFamily: '"pixelFont"',
    fontWeight: 700,
    lineHeight: '26px',
    width: '50%', // Adjusted width to match the other button
    height: '60px',
    outline: 'none',
  }}
>
  EXPLORE WIKI
</Button>
        </Box>
      </Box>
      <Box 
        flex={1} 
        p={2} 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          style={{
            position: 'relative',
            paddingTop: '56.25%', // 16:9 aspect ratio
            width: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/SZh_vjE96ZU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionText;
