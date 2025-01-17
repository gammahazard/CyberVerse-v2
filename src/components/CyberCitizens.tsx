// @ts-ignore
// @ts-nocheck
import { Box, Typography, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '@mui/material/styles';

const SectionText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4, // Display one image at a time on mobile
    slidesToScroll: 1, // Ensure it scrolls one image at a time
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  // Define image states for each feature
  const [visibleImage1, setVisibleImage1] = useState('/robot.webp');
  const [imageIndex1, setImageIndex1] = useState(0);
  const imageArray1 = ['/robot.webp', '/gen3.png'];

  const [visibleImage2, setVisibleImage2] = useState('/apart-penthouse.webp');
  const [imageIndex2, setImageIndex2] = useState(0);
  const imageArray2 = [
    '/apart-penthouse.webp',
    '/apart-yacht.webp',
    '/apartlarge.webp',
    '/apartmed.webp',
    '/apartsmall.webp',
  ];

  const [visibleImage3, setVisibleImage3] = useState('/car1.png');
  const [imageIndex3, setImageIndex3] = useState(0);
  const imageArray3 = [
    '/car1.png',
    '/car2.png',
    '/car3.png',
    '/car4.png',
  ];

  const [visibleImage4, setVisibleImage4] = useState('/degenbober.png');
  const [imageIndex4, setImageIndex4] = useState(0);
  const imageArray4 = [
    '/degenbober.png',
    '/degen_pink_bear.png',
    '/omen.png',
    '/titan.png',
  ];

  const [visibleImage5, setVisibleImage5] = useState('/goldencard.webp');
  const [imageIndex5, setImageIndex5] = useState(0);
  const imageArray5 = [
    '/goldencard.webp',
    '/platinumcard.webp',
    '/cyberiumcard.webp',
  ];

  const [visibleImage6, setVisibleImage6] = useState('/classiccardano.png');
  const [imageIndex6, setImageIndex6] = useState(0);
  const imageArray6 = [
    '/classiccardano.png',
    '/goldenada.png',
    '/platinumcardano.png',
    '/classicada.png',
  ];

  const [visibleImage7, setVisibleImage7] = useState('/trex.png');
  const [imageIndex7, setImageIndex7] = useState(0);
  const imageArray7 = [
    '/trex.png',
    '/hosky.png',
    '/unicorn.png',
    '/frog.png',
  ];

  const [loading, setLoading] = useState(true);

  const preloadImages = (images, callback) => {
    let loadedImages = 0;
    const totalImages = images.length;

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          callback();
        }
      };
    });
  };

  useEffect(() => {
    const allImages = [
      ...imageArray1,
      ...imageArray2,
      ...imageArray3,
      ...imageArray4,
      ...imageArray5,
      ...imageArray6,
      ...imageArray7,
    ];
    preloadImages(allImages, () => setLoading(false));
  }, []);

  // Define interval logic for each feature
  useEffect(() => {
    const interval1 = setInterval(() => {
      setImageIndex1((prevIndex) => (prevIndex + 1) % imageArray1.length);
      setVisibleImage1(imageArray1[(imageIndex1 + 1) % imageArray1.length]);
    }, 2000);

    return () => clearInterval(interval1);
  }, [imageArray1]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setImageIndex2((prevIndex) => (prevIndex + 1) % imageArray2.length);
      setVisibleImage2(imageArray2[(imageIndex2 + 1) % imageArray2.length]);
    }, 2000);

    return () => clearInterval(interval2);
  }, [imageArray2]);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setImageIndex3((prevIndex) => (prevIndex + 1) % imageArray3.length);
      setVisibleImage3(imageArray3[(imageIndex3 + 1) % imageArray3.length]);
    }, 2000);

    return () => clearInterval(interval3);
  }, [imageArray3]);

  useEffect(() => {
    const interval4 = setInterval(() => {
      setImageIndex4((prevIndex) => (prevIndex + 1) % imageArray4.length);
      setVisibleImage4(imageArray4[(imageIndex4 + 1) % imageArray4.length]);
    }, 2000);

    return () => clearInterval(interval4);
  }, [imageArray4]);

  useEffect(() => {
    const interval5 = setInterval(() => {
      setImageIndex5((prevIndex) => (prevIndex + 1) % imageArray5.length);
      setVisibleImage5(imageArray5[(imageIndex5 + 1) % imageArray5.length]);
    }, 2000);

    return () => clearInterval(interval5);
  }, [imageArray5]);

  useEffect(() => {
    const interval6 = setInterval(() => {
      setImageIndex6((prevIndex) => (prevIndex + 1) % imageArray6.length);
      setVisibleImage6(imageArray6[(imageIndex6 + 1) % imageArray6.length]);
    }, 2000);

    return () => clearInterval(interval6);
  }, [imageArray6]);

  useEffect(() => {
    const interval7 = setInterval(() => {
      setImageIndex7((prevIndex) => (prevIndex + 1) % imageArray7.length);
      setVisibleImage7(imageArray7[(imageIndex7 + 1) % imageArray7.length]);
    }, 2000);

    return () => clearInterval(interval7);
  }, [imageArray7]);

  const featureData = [
    { image: visibleImage1, name: 'CyberCitizens' },
    { image: visibleImage2, name: 'Real-Estate' },
    { image: visibleImage3, name: 'CyberCars' },
    { image: visibleImage4, name: 'NFT Skins' },
    { image: visibleImage5, name: 'VIP Cards' },
    { image: visibleImage6, name: 'In-game Emotes' },
    { image: visibleImage7, name: 'CyberPets' },
  ];

  return (
    <Box p={2} maxWidth="90%" margin="auto" style={{ marginTop: '15rem' }}>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="400px"
        >
          <Typography variant="h4" style={{ color: 'white' }}>
            Loading...
          </Typography>
        </Box>
      ) : (
        <>
          {isMobile ? (
            <Box display="flex" flexDirection="column" gap={4}>
              {featureData.map((feature, index) => (
                <Box key={index} style={{ position: 'relative' }}>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      width: '100%',
                      height: '400px', // Increased height
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                      overflow: 'hidden',
                      justifyContent: 'center',
                      border: '2px solid #FF00FC',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '70%',
                        backgroundColor: '#000',
                        padding: '10px', // Added padding to ensure no overlap
                        width: '100%',
                        position: 'relative',
                      }}
                    >
                      <AnimatePresence>
                        <motion.img
                          key={feature.image}
                          src={feature.image}
                          alt={feature.name}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            position: 'absolute',
                          }}
                        />
                      </AnimatePresence>
                    </Box>
                    <Box
                      sx={{
                        height: '30%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: '10px 20px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {feature.name}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Slider {...sliderSettings}>
              {featureData.map((feature, index) => (
                <Box key={index} sx={{ padding: '0 15px', position: 'relative' }}>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      width: '100%',
                      height: '400px', // Increased height
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                      overflow: 'hidden',
                      border: '2px solid #FF00FC',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '70%',
                        backgroundColor: '#000',
                        padding: '10px', // Added padding to ensure no overlap
                        width: '100%',
                        position: 'relative',
                      }}
                    >
                      <AnimatePresence>
                        <motion.img
                          key={feature.image}
                          src={feature.image}
                          alt={feature.name}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            position: 'absolute',
                          }}
                        />
                      </AnimatePresence>
                    </Box>
                    <Box
                      sx={{
                        height: '30%',
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        padding: '10px 20px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {feature.name}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          )}
        </>
      )}
    </Box>
  );
};

export default SectionText;
