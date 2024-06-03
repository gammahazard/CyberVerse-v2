// @ts-ignore
// @ts-nocheck
import { Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SectionText = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const featureImages = [
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
    '/gen2.png',
  ];

  return (
    <Box p={2} maxWidth="90%" margin="auto" style={{ marginTop: '15rem' }}>
      <Slider {...sliderSettings}>
        {featureImages.map((imageUrl, index) => (
          <Box key={index} style={{ padding: '0', position: 'relative' }}>
            <Box
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative', // Ensure positioning context for the text
                margin: '0 10px', // Add margin to avoid image crowding
              }}
            >
              <img
                src={imageUrl}
                alt={`Feature ${index + 1}`}
                style={{
                  width: '100%',
                  fontFamily: 'pixelFont',
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />
              <Box
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '5px 10px',
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  width: '80%', // Ensure the text container doesn't exceed the image width
                  textAlign: 'center', // Center the text
                }}
              >
                Feature {index + 1}
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SectionText;
