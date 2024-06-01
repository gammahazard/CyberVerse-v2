// @ts-ignore
import { Box, Button, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SectionText from '../components/SectionText';
import CyberCitizens from '../components/CyberCitizens';
import Features from '../components/Features';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import News from '../components/News';
import AnimationComponent from '../components/AnimationComponent';
import NeohubSection from '../components/NeohubSection';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const theme = useTheme();

  const scrollToRoadmap = () => {
    roadmapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (router.asPath.includes('#roadmap')) {
      scrollToRoadmap();
    }
  }, [router.asPath]);

  return (
    <Box>

      <Navbar onRoadmapClick={scrollToRoadmap} />
      <AnimationComponent />
      <Box my={4} sx={{ marginTop: 0, position: 'relative', width: 'auto', height: 'auto', marginInline: 'auto' }}>
        <Box sx={{ position: 'relative' }}>
          <img 
            src="/headerbg.gif" 
            alt="DePunkz Banner" 
            style={{ 
              width: '100%',
              display: 'block',
              height: 'auto', 
              objectFit: 'contain', 
              margin: '0 auto',
            }} 
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
     
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              textAlign: 'center', 
              color: 'white', 
              width: '100%',  // Increased width to avoid text being squished
              maxWidth: '800px',  // Adjusted maxWidth for better responsiveness
              zIndex: 2, 
            }}
          >
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '1.5rem', sm: '2.5rem', md: '5rem' }, // Adjusted font sizes for mobile, small screens, and desktop
                lineHeight: { xs: '1.2', sm: '1.2' },
                margin: '0 0 20px 0',
              }}
            >
              Explore the dystopian<br />
              world of CyberVerse
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.7rem' }, // Adjusted font sizes for mobile, small screens, and desktop
                color: 'white', // Changed text color to white
                lineHeight: { xs: '1.5', sm: '1.5' },
                margin: '0 0 30px 0',
                textShadow: '2px 2px 2px rgba(255,255,255,0.5)',
              }}
            >
              Explore, play, earn and have fun on the Ergo and Cardano Blockchain!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={() => window.open('https://playcyberverse.com', '_blank', 'noopener,noreferrer')}
                sx={{
                  backgroundColor: '#FF00FC',
                  color: '#E1EBFA',
                  fontSize: '20px',
                  fontFamily: '"pixelFont"',
                  fontWeight: 700,
                  lineHeight: '26px',
                  width: '200px',
                  height: '60px',
                  marginRight: '25px'
                }}
              >
                Play Now
              </Button>
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
                  width: '200px', 
                  height: '60px',
                  outline: 'none',
                }}
                onClick={() => window.open('https://playcyberverse.com', '_blank', 'noopener,noreferrer')}
              >
                Join the community
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <SectionText />
      <Features />
      <CyberCitizens />
      <News />
      <Box ref={roadmapRef} />
      <NeohubSection />
      <Footer />
    </Box>
  );
}
