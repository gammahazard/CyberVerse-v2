import { Box, Button, Typography, Snackbar } from '@mui/material';
import React, {useState} from 'react'
import Link from 'next/link';
export default function NeohubSection() {

  return (
    <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center" 
        justifyContent="center" 
        mt={4}
        textAlign={{ xs: 'center', md: 'left' }}
        px={{ xs: 2, md: 0 }}
    >
      <Box 
        mb={{ xs: 2, md: 0 }}
        mr={{ xs: 0, md: 4 }}
        sx={{ 
          width: { xs: '100%', md: '445px' },
          height: { xs: 'auto', md: '446px' },
          mainidth: { xs: '545px', md: 'none' },
          borderRadius: '8px',
          right:'500px',
          backgroundImage: 'url(/logo2.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box sx={{ width: '100%', paddingBottom: { xs: '100%', md: '0' } }} />
      </Box>
      <Box sx={{ maxWidth: '400px' }}>
        <Typography
          variant="h1"
          sx={{
            color: '#E1EBFA',
            fontSize: { xs: '40px', md: '60px' },
            fontFamily: '"pixelFont"',
            fontWeight: 700,
            lineHeight: { xs: '45px', md: '70px' },
            mb: 2,
          }}
        >
          Find out more
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#E1EBFA',
            fontSize: '20px',
            fontFamily: '"pixelFont"',
            lineHeight: '26px',
          }}
          paragraph
        >
      Cyberverse bla bla bla blabalb al balb al bl bl bal bl bal
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#E1EBFA',
            fontSize: '20px',
            fontFamily: '"pixelFont"',
            lineHeight: '26px',
            mb: 2,
          }}
        >
       Play, earn and have fun on the Ergo Blockchain!
        </Typography>
        <Box 
            display="flex" 
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="center"
            gap={2}
        >
      <Button
  variant="outlined"
  sx={{
    borderColor: '#FF00FC',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#E1EBFA',
    fontSize: '20px',
    fontFamily: '"pixelFont"',
    fontWeight: 700,
    lineHeight: '26px',
    width: '172px', 
    height: '60px',
    mb: { xs: 2, md: 0 },
  }}
  onClick={() => window.open('https://playcyberverse.com', '_blank', 'noopener,noreferrer')}
>
  CyberVerse
</Button>
<Button
  variant="contained"
  onClick={() => window.open('https://docs.cyberversegame.io/cyberverse-litepaper/', '_blank', 'noopener,noreferrer')}
  sx={{
    backgroundColor: '#FF00FC',
    color: '#E1EBFA',
    fontSize: '20px',
    fontFamily: '"pixelFont"',
    fontWeight: 700,
    lineHeight: '26px',
    width: '200px',
    height: '60px',
  }}
>
  Litepaper
</Button>
        </Box>
      </Box>
     
      {/* Snackbar Component */}
  
    </Box>
);
          }