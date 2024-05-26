import { Box, Button } from '@mui/material';
import { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SectionText from '../components/SectionText';
import Section2 from '../components/Section2';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import AnimationComponent from '../components/AnimationComponent';
import NeohubSection from '../components/NeohubSection';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Home() {
  const roadmapRef = useRef<HTMLDivElement>(null);  // Specify the type here
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
              width:'100%',
              display:'block',
              height: 'auto', 
              objectFit: 'cover', 
              margin: '0 auto',
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
              width: '90%',  // Increased width to make the box wider
              maxWidth: '600px', 
            }}
          >
            <h1 style={{ fontSize: '4rem', lineHeight: '1.2', margin: '0 0 20px 0' }}> {/* Increased font size */}
              Explore the dystopian<br />
              world of CyberVerse
            </h1>
            <p style={{ 
  fontSize: '1.7rem', 
  color: 'black', 
  lineHeight: '1.5', 
  margin: '0 0 30px 0',
  textShadow: '2px 2px 2px rgba(255,255,255,0.5)' // Adds a white outline effect
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
    mb: { xs: 2, md: 0 },
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
      <Section2 />
      <div ref={roadmapRef}>
   
      </div>
      <NeohubSection />
   
      <Footer onRoadmapClick={scrollToRoadmap} />
    </Box>
  );
}
