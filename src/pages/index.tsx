import { Box, Button } from '@mui/material';
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

export default function Home() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
      <Box my={4} style={{ marginTop: 0, position: 'relative', width: '100%', height: 'auto', marginInline: 'auto' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src="/headerbg.gif" 
            alt="DePunkz Banner" 
            style={{ 
              width: '100%',
              display: 'block',
              height: 'auto', 
              objectFit: 'cover', 
              margin: '0 auto',
            }} 
          />
          <Box
            style={{
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
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              textAlign: 'center', 
              color: 'white', 
              width: '90%', 
              maxWidth: '600px', 
              zIndex: 2, 
            }}
          >
            <h1 style={{ fontSize: '3rem', lineHeight: '1.2', margin: '0 0 20px 0' }}> {/* Adjusted font size */}
              Explore the dystopian<br />
              world of CyberVerse
            </h1>
            <p style={{ 
              fontSize: '1.7rem', 
              color: 'black', 
              lineHeight: '1.5', 
              margin: '0 0 30px 0',
              textShadow: '2px 2px 2px rgba(255,255,255,0.5)'
            }}>
              Explore, play, earn and have fun on Ergo Blockchain!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
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
            </div>
          </Box>
        </div>
      </Box>
      <SectionText />
      <Features />
      <CyberCitizens />
      <News />
      <div ref={roadmapRef}>
   
      </div>
      <NeohubSection />
   
      <Footer  />
    </Box>
  );
}
